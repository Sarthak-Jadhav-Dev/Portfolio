import React, { useEffect, useRef } from "react";

interface CustomRightClickProps {
    x: number;
    y: number;
    onClose: () => void;
}

export const CustomRightClick: React.FC<CustomRightClickProps> = ({ x, y, onClose }) => {
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <div
            ref={menuRef}
            className="absolute z-50 w-52 rounded-lg border border-white/20 bg-gray-900/60 p-1.5 text-sm text-white shadow-2xl backdrop-blur-xl"
            style={{
                top: y,
                left: x,
            }}
        >
            <div className="flex flex-col space-y-0.5">
                <ContextMenuItem label="New Folder" />
                <div className="my-1 h-px bg-white/10" />
                <ContextMenuItem label="Get Info" />
                <ContextMenuItem label="Change Wallpaper" />
                <div className="my-1 h-px bg-white/10" />
                <ContextMenuItem label="Use Stacks" />
                <ContextMenuItem label="Sort By" hasSubmenu />
                <ContextMenuItem label="Clean Up" disabled />
                <ContextMenuItem label="Clean Up By" hasSubmenu disabled />
                <ContextMenuItem label="Show View Options" />
            </div>
        </div>
    );
};

const ContextMenuItem = ({
    label,
    onClick,
    disabled = false,
    hasSubmenu = false
}: {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    hasSubmenu?: boolean;
}) => {
    return (
        <button
            onClick={disabled ? undefined : onClick}
            disabled={disabled}
            className={`
                group flex w-full items-center justify-between rounded px-3 py-1 text-left transition-colors
                ${disabled
                    ? "cursor-default text-white/40"
                    : "cursor-default hover:bg-blue-500 hover:text-white active:bg-blue-600"
                }
            `}
        >
            <span>{label}</span>
            {hasSubmenu && (
                <svg
                    className="h-3 w-3 opacity-60 group-hover:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            )}
        </button>
    );
};

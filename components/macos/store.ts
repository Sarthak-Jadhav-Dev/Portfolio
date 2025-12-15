import { create } from 'zustand';

interface DesktopState {
    openApps: string[];
    focusedApp: string | null;
    minimizedApps: string[];

    openApp: (appId: string) => void;
    closeApp: (appId: string) => void;
    toggleMinimize: (appId: string) => void;
    bringToFront: (appId: string) => void;
}

export const useDesktopStore = create<DesktopState>((set) => ({
    openApps: [],
    focusedApp: null,
    minimizedApps: [],

    openApp: (appId) =>
        set((state) => {
            if (state.openApps.includes(appId)) {
                if (state.minimizedApps.includes(appId)) {
                    return {
                        minimizedApps: state.minimizedApps.filter((id) => id !== appId),
                        focusedApp: appId,
                    };
                }
                return { focusedApp: appId };
            }
            return {
                openApps: [...state.openApps, appId],
                focusedApp: appId,
            };
        }),

    closeApp: (appId) =>
        set((state) => ({
            openApps: state.openApps.filter((id) => id !== appId),
            focusedApp: state.focusedApp === appId ? null : state.focusedApp,
        })),

    toggleMinimize: (appId) =>
        set((state) => {
            if (state.minimizedApps.includes(appId)) {
                return {
                    minimizedApps: state.minimizedApps.filter((id) => id !== appId),
                    focusedApp: appId,
                };
            }
            return {
                minimizedApps: [...state.minimizedApps, appId],
                focusedApp: null,
            };
        }),

    bringToFront: (appId) => set({ focusedApp: appId }),
}));

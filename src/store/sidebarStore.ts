import { create } from 'zustand';

interface SidebarState {
  isCollapsed: boolean;
  currentPage: string;
  toggleCollapse: () => void;
  setCurrentPage: (page: string) => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isCollapsed: false,
  currentPage: 'dashboard',
  toggleCollapse: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
  setCurrentPage: (page) => set({ currentPage: page }),
}));
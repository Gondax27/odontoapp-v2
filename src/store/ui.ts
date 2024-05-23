import { create } from 'zustand';

import { UIStore } from '@/types/ui';

export const useUIStore = create<UIStore>(set => ({
  lastPath: sessionStorage.getItem('last-path') || '',
  setLastPath: (lastPath: string) => {
    sessionStorage.setItem('last-path', lastPath);
    set({ lastPath });
  }
}));

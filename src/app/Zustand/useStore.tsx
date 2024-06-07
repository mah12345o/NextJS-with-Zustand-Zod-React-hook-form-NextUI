
"use client"
import create from 'zustand';

export const useStore = create( (set) => {
    return {
        counter: false,
        incrCounter: () => set((state) => ({ counter: state.counter! })),
      };
});
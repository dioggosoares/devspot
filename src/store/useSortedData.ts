import { create } from 'zustand'

interface SortedData {
  sortOrder: string
  setSortOrder: (order: string) => void
}

export const useSortedData = create<SortedData>((set) => ({
  sortOrder: 'desc',
  setSortOrder: (order: string) => set({ sortOrder: order }),
}))

import create from 'zustand';

const useStore = create((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user })),

  bookDetails: null,
  setBookDetails: (details) => set(() => ({ bookDetails: details })),

  selectedExploreBook: null,
  setSelectedExploreBook: (book) => set(() => ({ selectedExploreBook: book })),

  selectedLibBook: null,
  setSelectedLibBook: (book) => set(() => ({ selectedLibBook: book }))
}))

export default useStore
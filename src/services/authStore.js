import { create } from 'zustand'

const useAuthStore = create((set) => ({
  token: localStorage.getItem('token') || null,
  setToken: (token) => {
    localStorage.setItem('token', token)
    set({ token })
  },
  logout: () => {
    localStorage.removeItem('token')
    set({ token: null })
  },
}))

export default useAuthStore

import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export interface User {
  id: string
  first_name: string
  last_name: string
  email: string
  phone_number: string
  state: string
  status: boolean
  details: string
  createdAt: Date
}

export const useUserStore = defineStore('user', () => {
  const users = ref<User[]>(JSON.parse(localStorage.getItem('users') || '[]'))

  watch(
    users,
    (newUsers) => {
      localStorage.setItem('users', JSON.stringify(newUsers))
    },
    { deep: true },
  )

  function addUser(user: Omit<User, 'id' | 'createdAt'>) {
    users.value = [
      ...users.value,
      {
        ...user,
        id: crypto.randomUUID(),
        createdAt: new Date(),
      },
    ]
  }

  return {
    users,
    addUser,
  }
})

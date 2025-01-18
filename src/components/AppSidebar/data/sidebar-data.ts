import type { SidebarData, Team, User } from '../types'

import { useSidebar } from '@/composables/useSidebar'

import {
  GalleryVerticalEnd,
} from 'lucide-vue-next'

const user: User = {
  name: 'shadcn',
  email: 'm@example.com',
  avatar: '/avatars/shadcn.jpg',
}

const teams: Team[] = [
  {
    name: 'Sycamore',
    logo: GalleryVerticalEnd,
    plan: 'Admin',
  },
]

const { navData } = useSidebar()

export const sidebarData: SidebarData = {
  user,
  teams,
  navMain: navData.value!,
}

import type { SidebarData, Team } from '../types'

import { useSidebar } from '@/composables/useSidebar'

import { GalleryVerticalEnd } from 'lucide-vue-next'

const teams: Team[] = [
  {
    name: 'Sycamore',
    logo: GalleryVerticalEnd,
    plan: 'Admin',
  },
]

const { navData } = useSidebar()

export const sidebarData: SidebarData = {
  teams,
  navMain: navData.value!,
}

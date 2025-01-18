import type { NavGroup } from '@/components/AppSidebar/types'
import { BadgeHelp, LayoutDashboard, Users } from 'lucide-vue-next'

export function useSidebar() {
  const navData = ref<NavGroup[]>()

  navData.value = [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          url: '/dashboard',
          icon: LayoutDashboard,
        },
        {
          title: 'Users',
          url: '/users',
          icon: Users,
        },
      ],
    },
    {
      title: 'Pages',
      items: [
        {
          title: 'Know More',
          url: '/help-center',
          icon: BadgeHelp,
        },
      ],
    },
  ]

  return {
    navData,
  }
}

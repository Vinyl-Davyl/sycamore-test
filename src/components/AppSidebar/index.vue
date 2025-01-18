<script lang="ts" setup>
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'
import { sidebarData } from './data/sidebar-data'
import NavGroup from './NavGroup.vue'
import TeamSwitcher from './TeamSwitcher.vue'
</script>

<template>
  <Sidebar collapsible="icon" class="z-50">
    <SidebarHeader>
      <TeamSwitcher :teams="sidebarData.teams" />
    </SidebarHeader>

    <SidebarContent>
      <NavGroup :nav-main="sidebarData.navMain" />
    </SidebarContent>

    <SidebarRail />
  </Sidebar>
</template>

<style></style>

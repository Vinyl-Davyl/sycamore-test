<script setup lang="ts">
import Page from '@/components/Layout/Page.vue'
import { columns } from './components/columns'
import CreateUser from './components/CreateUser.vue'
import DataTable from './components/DataTable.vue'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
</script>

<template>
  <Page title="Users" description="Manage your users" sticky>
    <template #actions>
      <CreateUser />
    </template>
    <div class="w-[calc(100svw-2rem)] md:w-full overflow-x-auto">
      <DataTable :data="userStore.users" :columns="columns" />
    </div>
  </Page>
</template>

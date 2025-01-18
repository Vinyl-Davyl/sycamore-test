<script setup lang="ts">
import Page from '@/components/Layout/Page.vue'

import { columns } from './components/columns'
import CreateUser from './components/CreateUser.vue'
import DataTable from './components/DataTable.vue'
import InviteUser from './components/InviteUser.vue'
import { users } from './data/users'
</script>

<template>
  <Page
    title="Users"
    description="Users description"
    sticky
  >
    <template #actions>
      <InviteUser />
      <CreateUser />
    </template>
    <div class="w-[calc(100svw-2rem)] md:w-full overflow-x-auto">
      <DataTable :data="users" :columns="columns" />
    </div>
  </Page>
</template>

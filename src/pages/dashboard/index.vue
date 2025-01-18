<script lang="ts" setup>
import Page from '@/components/Layout/Page.vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import OverviewContent from './components/OverviewContent.vue'

const tabs = ref([
  { name: 'Overview', value: 'overview' },
  { name: 'Analytics', value: 'analytics' },
  { name: 'Reports', value: 'reports' },
])

const activeTab = ref(tabs.value[0].value)
</script>

<template>
  <Page title="Sycamore Admin" description="Hello There 👋" sticky>
    <Tabs :default-value="activeTab" class="w-full">
      <TabsList>
        <TabsTrigger v-for="tab in tabs" :key="tab.value" :value="tab.value">
          {{ tab.name }}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview" class="space-y-4">
        <OverviewContent />
      </TabsContent>
    </Tabs>
  </Page>
</template>

<style></style>

<script setup lang="ts">
import Page from '@/components/Layout/Page.vue'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

interface ISocialMediaAccount {
  title: string
  desc: string
  url: string
}

const socialMediaAccounts = ref<ISocialMediaAccount[]>([
  {
    title: 'GitHub',
    desc:
      'This is where i have all my personl project, all publicly available on GitHub.',
    url: 'https://github.com/Vinyl-Davyl',
  },
  {
    title: 'Website',
    desc: 'A portfolio of some of major works',
    url: 'https://vinyldavyl.xyz',
  },
  {
    title: 'Twitter',
    desc: 'Randomly rant and share my thoughts here',
    url: 'https://x.com/Vinylchi',
  },
])
</script>

<template>
  <Page title="Know More" description="About Me">
    <Alert>
      <AlertTitle>Heads up! Hey Recriuter👋</AlertTitle>
      <AlertDescription>
        You can find answers to your questions on any more information you would
        like to know about me.
      </AlertDescription>
    </Alert>

    <ul class="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="account in socialMediaAccounts" :key="account.title">
        <a
          :href="account.url || '#'"
          target="_blank"
          rel="noopener noreferrer"
          class="block p-4 border rounded-lg shadow bg-background border-border"
        >
          <h2 class="mb-2 text-lg font-bold">
            {{ account.title }}
          </h2>
          <p class="text-sm text-stone-500">
            {{ account.desc }}
          </p>
        </a>
      </li>
    </ul>
  </Page>
</template>

<style scoped></style>

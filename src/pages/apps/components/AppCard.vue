<script setup lang="ts">
import type { IApp } from '../type'
import Button from '@/components/ui/button/Button.vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

defineProps<{ app: IApp }>()
</script>

<template>
  <Card class="relative">
    <CardHeader>
      <div class="flex items-center justify-between">
        <div
          class="flex items-center justify-center p-2 rounded-lg size-10 bg-muted"
        >
          <component :is="app.logo" />
        </div>
        <Button
          :variant="app.connected ? 'secondary' : 'outline'"
          size="sm"
        >
          {{ app.connected ? 'Connected' : 'Connect' }}
        </Button>
      </div>
    </CardHeader>
    <CardContent>
      <CardTitle>
        {{ app.name }}
      </CardTitle>
      <CardDescription class="mt-2">
        {{ app.desc }}
      </CardDescription>
    </CardContent>
  </Card>
</template>

<style scoped>
</style>

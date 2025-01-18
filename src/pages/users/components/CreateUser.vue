<script setup lang="ts">
import AutoForm from '@/components/ui/auto-form/AutoForm.vue'
import Button from '@/components/ui/button/Button.vue'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { toast } from '@/components/ui/toast'
import { createReusableTemplate, useMediaQuery } from '@vueuse/core'
import { UserRoundPlus } from 'lucide-vue-next'
import { z } from 'zod'

const [UseTemplate, GridForm] = createReusableTemplate()
const isDesktop = useMediaQuery('(min-width: 768px)')

const isOpen = ref(false)

const schema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  username: z.string(),
  email: z.string().email(),
  phoneNumber: z.string().optional(),
  role: z.enum(['superadmin', 'admin', 'cashier', 'manager']),
  password: z.string().default('admin888'),
  confirm: z.string().default('admin888'),
}).refine(data => data.password === data.confirm, {
  message: 'Passwords do not match',
  path: ['confirm'],
})

function onSubmit(values: Record<string, any>) {
  toast({
    title: 'You submitted the following values:',
    description: h(
      'pre',
      { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' },
      h('code', { class: 'text-white' }, JSON.stringify(values, null, 2)),
    ),
  })
}
</script>

<template>
  <UseTemplate>
    <AutoForm
      v-auto-animate
      class="max-h-[500px] overflow-y-auto"
      :schema="schema"
      :field-config="{
        email: {
          label: 'Email address',
          inputProps: {
            type: 'email',
          },
        },
        password: {
          label: 'Password',
          inputProps: {
            type: 'password',
          },
        },
        confirm: {
          label: 'Password',
          inputProps: {
            type: 'password',
          },
        },
      }"
      @submit="onSubmit"
    >
      <div class="flex items-center justify-end space-x-2">
        <Button type="submit" class="w-full">
          SaveChanges
        </Button>
      </div>
    </AutoForm>
  </UseTemplate>

  <Dialog v-if="isDesktop" v-model:open="isOpen">
    <DialogTrigger as-child>
      <Button>
        Create User
        <UserRoundPlus />
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create User</DialogTitle>
        <DialogDescription>
          Enter the required information below to create a new user.
        </DialogDescription>
      </DialogHeader>
      <GridForm />
    </DialogContent>
  </Dialog>

  <Drawer v-else v-model:open="isOpen">
    <DrawerTrigger as-child>
      <Button>
        Create User
        <UserRoundPlus />
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Create User</DrawerTitle>
        <DrawerDescription>
          Enter the required information below to create a new user.
        </DrawerDescription>
      </DrawerHeader>
      <GridForm />
      <DrawerFooter class="pt-2">
        <DrawerClose as-child>
          <Button variant="outline">
            Cancel
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>

<style scoped>
</style>

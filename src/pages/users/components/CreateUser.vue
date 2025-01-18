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
import { useUserStore } from '@/stores/userStore'
import { QuillEditor } from '@vueup/vue-quill'
import { createReusableTemplate, useMediaQuery } from '@vueuse/core'
import { UserRoundPlus } from 'lucide-vue-next'
import { z } from 'zod'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { User } from '../data/schema'

const [UseTemplate, GridForm] = createReusableTemplate()
const isDesktop = useMediaQuery('(min-width: 768px)')
const isOpen = ref(false)
const userStore = useUserStore()

const nigerianStates = [
  'Abia',
  'Adamawa',
  'Akwa Ibom',
  'Anambra',
  'Bauchi',
  'Bayelsa',
  'Benue',
  'Borno',
  'Cross River',
  'Delta',
  'Ebonyi',
  'Edo',
  'Ekiti',
  'Enugu',
  'FCT',
  'Gombe',
  'Imo',
  'Jigawa',
  'Kaduna',
  'Kano',
  'Katsina',
  'Kebbi',
  'Kogi',
  'Kwara',
  'Lagos',
  'Nasarawa',
  'Niger',
  'Ogun',
  'Ondo',
  'Osun',
  'Oyo',
  'Plateau',
  'Rivers',
  'Sokoto',
  'Taraba',
  'Yobe',
  'Zamfara',
]

const schema = z.object({
  first_name: z.string().min(1, 'First name is required'),
  last_name: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone_number: z.string().min(1, 'Phone number is required'),
  state: z.enum(nigerianStates as [string, ...string[]]),
  status: z.boolean().default(true),
  details: z.string(),
})

function onSubmit(values: Record<string, any>) {
  const user: Omit<User, 'id' | 'createdAt'> = {
    first_name: values.first_name,
    last_name: values.last_name,
    email: values.email,
    phone_number: values.phone_number,
    state: values.state,
    status: values.status,
    details: values.details || '',
  }

  userStore.addUser(user)
  toast({
    title: 'User created successfully',
    description: 'The user has been added to the system.',
  })
  isOpen.value = false
}
</script>

<template>
  <UseTemplate>
    <AutoForm
      v-auto-animate
      class="max-h-[500px] overflow-y-auto space-y-4"
      :schema="schema"
      :field-config="{
        email: {
          label: 'Email address',
          inputProps: { type: 'email' },
        },
        state: {
          label: 'State',
          inputProps: {
            options: nigerianStates,
          },
        },
        status: {
          label: 'Set to active',
          inputProps: { type: 'checkbox' },
        },
        details: {
          label: 'Customer Details',
          inputProps: {
            component: QuillEditor,
            theme: 'snow',
            contentType: 'html',
          },
        },
      }"
      @submit="onSubmit"
    >
      <div class="flex items-center justify-end space-x-2">
        <Button type="submit" class="w-full">
          Create User
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

<style scoped></style>

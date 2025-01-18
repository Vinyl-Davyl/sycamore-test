<script setup lang="ts">
import type { Table } from '@tanstack/vue-table'
import type { User } from '../data/schema'
import DataTableViewOptions from '@/components/DataTable/ViewOptions.vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { X } from 'lucide-vue-next'
import { computed, ref } from 'vue'

interface DataTableToolbarProps {
  table: Table<User>
}

const props = defineProps<DataTableToolbarProps>()
const searchValue = ref('')

const isFiltered = computed(
  () => props.table.getState().columnFilters.length > 0,
)

function handleSearch(event: Event) {
  const value = (event.target as HTMLInputElement).value
  searchValue.value = value

  const columns = ['first_name', 'last_name', 'email', 'phone_number', 'state']
  columns.forEach((column) => {
    const tableColumn = props.table.getColumn(column)
    if (tableColumn) {
      if (value) {
        tableColumn.setFilterValue(value)
      } else {
        tableColumn.setFilterValue(undefined)
      }
    }
  })
}
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center flex-1 space-x-2">
      <Input
        placeholder="Search users..."
        class="h-8 w-[150px] lg:w-[250px]"
        @input="handleSearch"
      />
      <Button
        v-if="isFiltered"
        variant="ghost"
        class="h-8 px-2 lg:px-3"
        @click="table.resetColumnFilters()"
      >
        Reset
        <X class="w-4 h-4 ml-2" />
      </Button>
    </div>
    <DataTableViewOptions :table="table" />
  </div>
</template>

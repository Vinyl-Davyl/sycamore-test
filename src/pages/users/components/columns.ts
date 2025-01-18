import type { ColumnDef } from '@tanstack/vue-table'
import type { User } from '../data/schema'

import DataTableColumnHeader from '@/components/DataTable/ColumnHeader.vue'
import { SelectColumn } from '@/components/DataTable/tableColumns'
import Badge from '@/components/ui/badge/Badge.vue'
import { h } from 'vue'
import DataTableRowActions from './DataTableRowActions.vue'

export const columns: ColumnDef<User>[] = [
  SelectColumn as ColumnDef<User>,
  {
    accessorKey: 'first_name',
    header: ({ column }) => h(DataTableColumnHeader<User>, { column, title: 'First Name' }),
    cell: ({ row }) => h('div', {}, row.getValue('first_name')),
    enableSorting: true,
    enableHiding: false,
    filterFn: (row, id, value) => {
      return row.getValue(id)?.toLowerCase().includes(value.toLowerCase())
    },
  },
  {
    accessorKey: 'last_name',
    header: ({ column }) => h(DataTableColumnHeader<User>, { column, title: 'Last Name' }),
    cell: ({ row }) => h('div', {}, row.getValue('last_name')),
    enableSorting: true,
    filterFn: (row, id, value) => {
      return row.getValue(id)?.toLowerCase().includes(value.toLowerCase())
    },
  },
  {
    accessorKey: 'email',
    header: ({ column }) => h(DataTableColumnHeader<User>, { column, title: 'Email' }),
    cell: ({ row }) => h('div', {}, row.getValue('email')),
    enableSorting: true,
    filterFn: (row, id, value) => {
      return row.getValue(id)?.toLowerCase().includes(value.toLowerCase())
    },
  },
  {
    accessorKey: 'phone_number',
    header: ({ column }) => h(DataTableColumnHeader<User>, { column, title: 'Phone Number' }),
    cell: ({ row }) => h('div', {}, row.getValue('phone_number')),
    filterFn: (row, id, value) => {
      return row.getValue(id)?.toLowerCase().includes(value.toLowerCase())
    },
  },
  {
    accessorKey: 'state',
    header: ({ column }) => h(DataTableColumnHeader<User>, { column, title: 'State' }),
    cell: ({ row }) => h('div', {}, row.getValue('state')),
    filterFn: (row, id, value) => {
      return row.getValue(id)?.toLowerCase().includes(value.toLowerCase())
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => h(DataTableColumnHeader<User>, { column, title: 'Status' }),
    cell: ({ row }) => h(Badge, { 
      class: row.getValue('status') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800', 
      variant: 'outline' 
    }, () => row.getValue('status') ? 'Active' : 'Inactive'),
  },
  {
    id: 'actions',
    cell: ({ row }) => h(DataTableRowActions, { row }),
  },
]
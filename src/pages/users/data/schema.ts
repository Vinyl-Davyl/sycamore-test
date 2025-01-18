import { z } from 'zod'

export const userSchema = z.object({
  id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  phone_number: z.string(),
  state: z.string(),
  status: z.boolean(),
  details: z.string(),
  createdAt: z.date(),
})

export type User = z.infer<typeof userSchema>

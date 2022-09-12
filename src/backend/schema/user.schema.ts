import z from 'zod'

export const createUserSchema = z.object({
    username: z.string(),
    password: z.string(),
})

export type CreateUserInput = z.TypeOf<typeof createUserSchema>
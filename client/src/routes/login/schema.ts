import { z } from "zod"

export const formSchema = z.object({
  email: z.string().email(),
  password :z.string({
		required_error: "Password is required"
	})
})

export type FormSchema = typeof formSchema;

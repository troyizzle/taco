import { z } from "zod";

export const formSchema = z.object({
	name: z.string({
		required_error: "Name is required"
	}),
	rating: z.string({
		required_error: "A rating is required"
	})
})

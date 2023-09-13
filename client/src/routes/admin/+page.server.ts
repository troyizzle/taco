import { superValidate } from "sveltekit-superforms/server"
import { formSchema } from "./schema"
import type { Actions, PageServerLoad } from "./$types"
import { fail, redirect } from "@sveltejs/kit"

export const load: PageServerLoad = () => {
	return {
		form: superValidate(formSchema)
	}
}

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, formSchema)
		if (!form.valid) {
		return fail(400, { form })
		}

		const payload = { 
			review: { 
				name: form.data.name,
				rating: +form.data.rating
			}
		}

		console.log("token", event.cookies.get("AuthorizationToken"))

		const resp = await fetch("http://localhost:3001/reviews", {
			method: "POST",
			body: JSON.stringify(payload),
			headers: {
				Authorization: `Bearer ${event.cookies.get("AuthorizationToken")}` ?? "",
				"Content-Type": "application/json",

			}
		})

		if (!resp.ok) {
			console.log("there was an error saving form")
		}

		const data = await resp.json()

		console.log(data)

		throw redirect(302, "/admin")
	}
}

import type { PageServerLoad, Actions } from "./$types"
import { superValidate } from "sveltekit-superforms/server"
import { formSchema } from "./schema"
import { fail, redirect } from "@sveltejs/kit"
import { loginUser } from "$lib/user.model"

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

    const { error, token } = await loginUser(form.data.email, form.data.password)

    if (error || !token) {
      return fail(401, { error, form })
    }

    event.cookies.set('AuthorizationToken', token, {
      httpOnly: true,
      path: '/',
      secure: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 //1 day
    })

    throw redirect(302, '/admin')
  }
}

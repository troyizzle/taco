import type { Handle } from "@sveltejs/kit";
import jwt from 'jsonwebtoken'

const handle: Handle = async ({ event, resolve }) => {
	const authCookie = event.cookies.get('AuthorizationToken');

	if (authCookie) {
		// Remove Bearer prefix
		const token = authCookie.split(' ')[1];

		try {
			const jwtUser = jwt.verify(token, 'yessir')
			if (typeof jwtUser === 'string') {
				throw new Error('Something went wrong');
			}
	} catch (error) {
			console.error(error)
		}
	}

	return await resolve(event);
}

export { handle }

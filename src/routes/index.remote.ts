import { form } from '$app/server';
import { env } from '$env/dynamic/private';
import { validate_form } from '$lib/utils';
import { contact_schema } from '$lib/schemas';

export const send_contact_data = form(validate_form(contact_schema, async (data) => {
	const response = await fetch(env.N8N_URL!, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'key': env.N8N_AUTH!,
		},
		body: JSON.stringify(data),
	});

	if (!response.ok) {
		return {
			success: false,
			message: 'Ocurrió un error al conectar con nuestros servicios. Inténtelo más tarde.',
		};
	}

	return {
		success: true,
		message: 'Hemos recibido tu mensaje. En breve nuestro equipo se contactará contigo.',
	};
}));

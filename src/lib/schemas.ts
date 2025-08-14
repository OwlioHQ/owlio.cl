import { z } from 'zod';

import { company_size_options } from './constants';

export const contact_schema = z.object({
	name: z.string()
		.nonempty({
			error: 'Debe ingresar su nombre.',
		}),
	email: z.email({
		error: 'Correo inválido.',
	}),
	company_name: z.string()
		.nonempty({
			error: 'Debe ingresar el nombre de la empresa.',
		}),
	company_size: z.enum(company_size_options.map(({ value }) => (value as string)), {
		error: 'Debe seleccionar una de las opciones.',
	}),
	details: z.string()
		.nonempty({
			error: 'Por favor, comparte algunos detalles para poder brindarte la mejor asistencia posible.',
		}),
});

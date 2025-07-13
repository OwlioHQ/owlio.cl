import type { ProxiedValue } from '$lib/types';

import { getContext, setContext } from 'svelte';

const ACCORDION_CTX_KEY = Symbol('ACCORDION_CTX');

export function set_accordion_ctx(accordion_id: ProxiedValue<string>) {
	return setContext(ACCORDION_CTX_KEY, accordion_id);
}

export function get_accordion_ctx(): ReturnType<typeof set_accordion_ctx> {
	return getContext(ACCORDION_CTX_KEY);
}

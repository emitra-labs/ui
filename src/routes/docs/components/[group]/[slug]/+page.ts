import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getComponent } from '../../utils';

export const load: PageLoad = async ({ params, parent }) => {
	const data = await parent();

	const component = await getComponent(params.group, params.slug);
	if (!component) {
		error(404);
	}

	return { ...data, ...component };
};

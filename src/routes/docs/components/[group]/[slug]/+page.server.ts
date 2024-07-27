import type { RouteParams } from './$types';
import { glob } from 'glob';
import { kebabCase } from 'change-case';

export const entries = async (): Promise<RouteParams[]> => {
	const components = await glob('src/lib/components/**/*.d.svx');

	let result: { group: string; slug: string }[] = [];

	for (const c of components) {
		const segments = c.split('/');
		const group = segments[segments.length - 2];
		const slug = segments[segments.length - 1].replace('.d.svx', '');
		result.push({ group, slug: kebabCase(slug) });
	}

	return result;
};

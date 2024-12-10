import type { PageLoad } from '../../.svelte-kit/types/src/routes/$types';
import type { DevExperience } from '$lib/types/sanity';
import sanityClient from '$lib/utils/sanity';


export const load: PageLoad = async () => {
	const workExperience: DevExperience[] = await sanityClient.fetch(
		'*[_type == "devExperience"] | order(startDate desc)'
	);

	return {
		workExperience,
	};
}
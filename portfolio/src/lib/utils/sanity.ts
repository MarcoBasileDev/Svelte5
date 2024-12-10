import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
	projectId: '6iie94gg',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2024-12-10',
}

const sanityClient = createClient(config);
export default sanityClient;
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


/*export const client = createClient({
    projectId: import.meta.env.VITE_SANITY_ID,
    dataset: 'production',
    apiVersion: '2024-06-03',
    useCdn: true,
    token: import.meta.env.VITE_SANITY_TOKEN,
});*/

export const client = createClient({
    projectId: import.meta.env.VITE_SANITY_ID,
    dataset: 'production',
    apiVersion: '2022-03-07',
    token: import.meta.env.VITE_SANITY_TOKEN,
    useCdn: true,
});




const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

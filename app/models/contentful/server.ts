import { createClient } from "contentful"
import { getPlaiceholder } from "plaiceholder";
import { TypeBlogSkeleton, TypePageSkeleton, TypeProjectsSkeleton } from "./types";

const contentfulClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? '',
})


async function getProjects() {
    const { items } = await contentfulClient.getEntries<TypeProjectsSkeleton>({
        content_type: 'projects',
        order: ['-fields.releaseDate'],
        select: ['fields.title', 'fields.desc', 'fields.releaseDate', 'fields.link', 'fields.previewImage']
    });
    const formattedData = items.map(
        async (project) => {
            const { title, desc, releaseDate, link, previewImage } = project.fields;
            if ('fields' in previewImage && previewImage?.fields?.file?.url) {
                const imageUrl = `https:${previewImage.fields.file.url}`;
                const buffer = await fetch(imageUrl).then(async (res) =>
                    Buffer.from(await res.arrayBuffer())
                );
                const { css, metadata: { height, width } } = await getPlaiceholder(buffer);
                return {
                    title,
                    desc,
                    releaseDate,
                    link,
                    image: { src: previewImage.fields.file.url, height, width },
                    imageAlt: previewImage.fields.description,
                    css,
                };
            }
            return { title, desc, releaseDate, link, image: null, imageAlt: null, css: '' };
        }
    );
    const projects = await Promise.all(formattedData);
    console.log(projects)
    return projects
}


async function getAllBlogs() {
    const { items } = await contentfulClient.getEntries({
        content_type: 'blog',
        order: ['-sys.createdAt'],
        select: ['fields.title', 'fields.description', 'fields.tag', 'sys.createdAt']
    });
    return items?.map(blogModel => blogModel.fields)
}

async function getSingleBlog(slug: string) {
    const { items } = await contentfulClient.getEntries<TypeBlogSkeleton>({
        content_type: 'blog',
        limit: 1,
        'fields.slug': slug,
        select: ['fields.title', 'fields.description', 'fields.tag', 'fields.slug', 'fields.blogBody', 'fields.openGraphImage', 'sys.createdAt']
    });
    return items[0].fields
}

async function getPage(title: string) {
    const { items } = await contentfulClient.getEntries<TypePageSkeleton>({
        content_type: 'page',
        limit: 1,
        'fields.title': title,
        select: ['fields.title', 'fields.roles', 'fields.links', 'fields.description', 'fields.seoMetadata']
    });
    return items[0].fields
}

export const client = { getProjects, getAllBlogs, getSingleBlog, getPage }
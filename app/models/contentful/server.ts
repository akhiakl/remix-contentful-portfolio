import { createClient } from "contentful"
import type { TypeBlogSkeleton, TypePageSkeleton, TypeProjectSkeleton } from "./types";

const contentfulClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? '',
    environment: process.env.CONTENTFUL_ENVIRONMENT ?? 'master'
})


async function getProjects() {
    const { items } = await contentfulClient.getEntries<TypeProjectSkeleton>({
        content_type: 'project',
        order: ['-sys.createdAt'],
        select: ['fields.title', 'fields.description', 'fields.githubUrl', 'fields.url', 'fields.image', 'fields.techStack', 'sys.createdAt']
    });
    const formattedData = items.map(
        async (project) => {
            const { title, image, description, githubUrl, techStack, url } = project.fields;
            return {
                title,
                description,
                siteUrl: url,
                githubUrl,
                techStack,
                imageUrl: ('fields' in image && image?.fields?.file?.url) && image.fields.file.url,
            };
        }
    );
    const projects = await Promise.all(formattedData);
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
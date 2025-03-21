import { getClient } from "lib/contentful/client";
import type { TypeBlogSkeleton, TypePageSkeleton, TypeProjectSkeleton } from "./types";


async function getProjects() {
    const { items } = await getClient().getEntries<TypeProjectSkeleton>({
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
    const { items } = await getClient().getEntries({
        content_type: 'blog',
        order: ['-sys.createdAt'],
        select: ['fields.title', 'fields.description', 'fields.tag', 'sys.createdAt']
    });
    return items?.map(blogModel => blogModel.fields)
}

async function getSingleBlog(slug: string) {
    const { items } = await getClient().getEntries<TypeBlogSkeleton>({
        content_type: 'blog',
        limit: 1,
        'fields.slug': slug,
        select: ['fields.title', 'fields.description', 'fields.tag', 'fields.slug', 'fields.blogBody', 'fields.openGraphImage', 'sys.createdAt']
    });
    return items[0].fields
}

async function getPage(title: string) {
    const { items } = await getClient().getEntries<TypePageSkeleton>({
        content_type: 'page',
        limit: 1,
        'fields.title': title,
        select: ['fields.title', 'fields.roles', 'fields.links', 'fields.description', 'fields.seoMetadata']
    });
    return items[0].fields
}

export const client = { getProjects, getAllBlogs, getSingleBlog, getPage }
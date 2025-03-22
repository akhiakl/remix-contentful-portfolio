import { getClient } from "lib/contentful/client";
import type { TypeProjectSkeleton } from "./types";


async function getProjects(preview?: boolean) {
    const { items } = await getClient(preview).withoutUnresolvableLinks.getEntries<TypeProjectSkeleton>({
        content_type: 'project',
        order: ['-sys.createdAt'],
        select: ['fields.title', 'fields.description', 'fields.githubUrl', 'fields.url', 'fields.image', 'fields.techStack', 'sys.createdAt']
    });

    return items
}

export const client = { getProjects }
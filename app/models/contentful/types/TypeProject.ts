import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeProject'
 * @name TypeProjectFields
 * @type {TypeProjectFields}
 * @memberof TypeProject
 */
export interface TypeProjectFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'description' (Description)
     * @name Description
     * @localized false
     */
    description?: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'image' (Image)
     * @name Image
     * @localized false
     */
    image: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'url' (URL)
     * @name URL
     * @localized false
     */
    url?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'githubUrl' (Github URL)
     * @name Github URL
     * @localized false
     */
    githubUrl?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'techStack' (Tech Stack)
     * @name Tech Stack
     * @localized false
     */
    techStack?: EntryFieldTypes.Array<EntryFieldTypes.Symbol<"Alokai" | "Alpine" | "Angular" | "Bootstrap" | "CSS" | "Express" | "Html" | "Jest" | "Mongodb" | "MySQL" | "Nest" | "Next" | "Node" | "Postgres" | "React" | "Sass" | "Tailwind" | "Typescript">>;
}

/**
 * Entry skeleton type definition for content type 'project' (Project)
 * @name TypeProjectSkeleton
 * @type {TypeProjectSkeleton}
 * @author 2cbOO34WfrCLVZ2BiLBSGd
 * @since 2025-03-05T05:39:31.657Z
 * @version 1
 */
export type TypeProjectSkeleton = EntrySkeletonType<TypeProjectFields, "project">;
/**
 * Entry type definition for content type 'project' (Project)
 * @name TypeProject
 * @type {TypeProject}
 * @author Akhil K<akhilthedevz@gmail.com>
 * @since 2025-03-05T05:39:31.657Z
 * @version 1
 * @link https://app.contentful.com/spaces/ega1952vfda2/environments/dev/content_types/project
 */
export type TypeProject<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProjectSkeleton, Modifiers, Locales>;

export function isTypeProject<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeProject<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'project'
}

export type TypeProjectWithoutLinkResolutionResponse = TypeProject<"WITHOUT_LINK_RESOLUTION">;
export type TypeProjectWithoutUnresolvableLinksResponse = TypeProject<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeProjectWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeProject<"WITH_ALL_LOCALES", Locales>;
export type TypeProjectWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeProject<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeProjectWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeProject<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;

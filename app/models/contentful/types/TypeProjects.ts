import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeProjects'
 * @name TypeProjectsFields
 * @type {TypeProjectsFields}
 * @memberof TypeProjects
 */
export interface TypeProjectsFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'desc' (Description)
     * @name Description
     * @localized false
     */
    desc?: EntryFieldTypes.RichText;
    /**
     * Field type definition for field 'previewImage' (Preview Image)
     * @name Preview Image
     * @localized false
     */
    previewImage: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'link' (Link)
     * @name Link
     * @localized false
     */
    link?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'releaseDate' (Release Date)
     * @name Release Date
     * @localized false
     */
    releaseDate?: EntryFieldTypes.Date;
}

/**
 * Entry skeleton type definition for content type 'projects' (Projects)
 * @name TypeProjectsSkeleton
 * @type {TypeProjectsSkeleton}
 * @author 2cbOO34WfrCLVZ2BiLBSGd
 * @since 2025-02-25T19:49:04.935Z
 * @version 1
 */
export type TypeProjectsSkeleton = EntrySkeletonType<TypeProjectsFields, "projects">;
/**
 * Entry type definition for content type 'projects' (Projects)
 * @name TypeProjects
 * @type {TypeProjects}
 * @author Akhil K<akhilthedevz@gmail.com>
 * @since 2025-02-25T19:49:04.935Z
 * @version 1
 * @link https://app.contentful.com/spaces/ega1952vfda2/environments/dev/content_types/projects
 */
export type TypeProjects<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProjectsSkeleton, Modifiers, Locales>;
export type TypeProjectsWithoutLinkResolutionResponse = TypeProjects<"WITHOUT_LINK_RESOLUTION">;
export type TypeProjectsWithoutUnresolvableLinksResponse = TypeProjects<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeProjectsWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeProjects<"WITH_ALL_LOCALES", Locales>;
export type TypeProjectsWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeProjects<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeProjectsWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeProjects<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;

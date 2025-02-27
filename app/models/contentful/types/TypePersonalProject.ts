import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypePersonalProject'
 * @name TypePersonalProjectFields
 * @type {TypePersonalProjectFields}
 * @memberof TypePersonalProject
 */
export interface TypePersonalProjectFields {
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
     * Field type definition for field 'techStack' (Tech Stack)
     * @name Tech Stack
     * @localized false
     */
    techStack?: EntryFieldTypes.Array<EntryFieldTypes.Symbol<"Angular" | "Bootstrap" | "CSS" | "Html" | "React" | "Sass" | "Typescript" | "Wordpress">>;
}

/**
 * Entry skeleton type definition for content type 'personalProject' (Personal Project)
 * @name TypePersonalProjectSkeleton
 * @type {TypePersonalProjectSkeleton}
 * @author 2cbOO34WfrCLVZ2BiLBSGd
 * @since 2023-12-17T08:03:44.162Z
 * @version 1
 */
export type TypePersonalProjectSkeleton = EntrySkeletonType<TypePersonalProjectFields, "personalProject">;
/**
 * Entry type definition for content type 'personalProject' (Personal Project)
 * @name TypePersonalProject
 * @type {TypePersonalProject}
 * @author Akhil K<akhilthedevz@gmail.com>
 * @since 2023-12-17T08:03:44.162Z
 * @version 1
 * @link https://app.contentful.com/spaces/ega1952vfda2/environments/dev/content_types/personalProject
 */
export type TypePersonalProject<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePersonalProjectSkeleton, Modifiers, Locales>;
export type TypePersonalProjectWithoutLinkResolutionResponse = TypePersonalProject<"WITHOUT_LINK_RESOLUTION">;
export type TypePersonalProjectWithoutUnresolvableLinksResponse = TypePersonalProject<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypePersonalProjectWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypePersonalProject<"WITH_ALL_LOCALES", Locales>;
export type TypePersonalProjectWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypePersonalProject<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypePersonalProjectWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypePersonalProject<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;

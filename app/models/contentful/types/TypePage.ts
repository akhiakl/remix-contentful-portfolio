import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeRoleSkeleton } from "./TypeRole";
import type { TypeSeoMetaDataSkeleton } from "./TypeSeoMetaData";
import type { TypeSocialLinkSkeleton } from "./TypeSocialLink";

/**
 * Fields type definition for content type 'TypePage'
 * @name TypePageFields
 * @type {TypePageFields}
 * @memberof TypePage
 */
export interface TypePageFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'roles' (Roles)
     * @name Roles
     * @localized false
     */
    roles?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeRoleSkeleton>>;
    /**
     * Field type definition for field 'links' (Links)
     * @name Links
     * @localized false
     */
    links?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSocialLinkSkeleton>>;
    /**
     * Field type definition for field 'description' (Description)
     * @name Description
     * @localized false
     */
    description?: EntryFieldTypes.RichText;
    /**
     * Field type definition for field 'seoMetadata' (SEO Metadata)
     * @name SEO Metadata
     * @localized false
     */
    seoMetadata?: EntryFieldTypes.EntryLink<TypeSeoMetaDataSkeleton>;
}

/**
 * Entry skeleton type definition for content type 'page' (Page)
 * @name TypePageSkeleton
 * @type {TypePageSkeleton}
 * @author 2cbOO34WfrCLVZ2BiLBSGd
 * @since 2025-02-25T19:49:07.570Z
 * @version 1
 */
export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
/**
 * Entry type definition for content type 'page' (Page)
 * @name TypePage
 * @type {TypePage}
 * @author Akhil K<akhilthedevz@gmail.com>
 * @since 2025-02-25T19:49:07.570Z
 * @version 1
 * @link https://app.contentful.com/spaces/ega1952vfda2/environments/dev/content_types/page
 */
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageSkeleton, Modifiers, Locales>;
export type TypePageWithoutLinkResolutionResponse = TypePage<"WITHOUT_LINK_RESOLUTION">;
export type TypePageWithoutUnresolvableLinksResponse = TypePage<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypePageWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypePage<"WITH_ALL_LOCALES", Locales>;
export type TypePageWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypePage<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypePageWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypePage<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;

import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeSeoMetaData'
 * @name TypeSeoMetaDataFields
 * @type {TypeSeoMetaDataFields}
 * @memberof TypeSeoMetaData
 */
export interface TypeSeoMetaDataFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'ogImage' (OG Image)
     * @name OG Image
     * @localized false
     */
    ogImage?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'description' (Description)
     * @name Description
     * @localized false
     */
    description?: EntryFieldTypes.Text;
}

/**
 * Entry skeleton type definition for content type 'seoMetaData' (SEO MetaData)
 * @name TypeSeoMetaDataSkeleton
 * @type {TypeSeoMetaDataSkeleton}
 * @author 2cbOO34WfrCLVZ2BiLBSGd
 * @since 2025-02-25T19:49:08.945Z
 * @version 1
 */
export type TypeSeoMetaDataSkeleton = EntrySkeletonType<TypeSeoMetaDataFields, "seoMetaData">;
/**
 * Entry type definition for content type 'seoMetaData' (SEO MetaData)
 * @name TypeSeoMetaData
 * @type {TypeSeoMetaData}
 * @author Akhil K<akhilthedevz@gmail.com>
 * @since 2025-02-25T19:49:08.945Z
 * @version 1
 * @link https://app.contentful.com/spaces/ega1952vfda2/environments/dev/content_types/seoMetaData
 */
export type TypeSeoMetaData<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSeoMetaDataSkeleton, Modifiers, Locales>;

export function isTypeSeoMetaData<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeSeoMetaData<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'seoMetaData'
}

export type TypeSeoMetaDataWithoutLinkResolutionResponse = TypeSeoMetaData<"WITHOUT_LINK_RESOLUTION">;
export type TypeSeoMetaDataWithoutUnresolvableLinksResponse = TypeSeoMetaData<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeSeoMetaDataWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeSeoMetaData<"WITH_ALL_LOCALES", Locales>;
export type TypeSeoMetaDataWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeSeoMetaData<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeSeoMetaDataWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeSeoMetaData<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;

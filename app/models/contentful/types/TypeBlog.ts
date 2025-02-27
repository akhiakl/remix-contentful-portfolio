import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeBlog'
 * @name TypeBlogFields
 * @type {TypeBlogFields}
 * @memberof TypeBlog
 */
export interface TypeBlogFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'description' (Description)
     * @name Description
     * @localized false
     */
    description?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'blogBody' (Blog Body)
     * @name Blog Body
     * @localized false
     */
    blogBody?: EntryFieldTypes.RichText;
    /**
     * Field type definition for field 'publishDate' (Publish Date)
     * @name Publish Date
     * @localized false
     */
    publishDate?: EntryFieldTypes.Date;
    /**
     * Field type definition for field 'slug' (slug)
     * @name slug
     * @localized false
     */
    slug?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'tag' (Tags)
     * @name Tags
     * @localized false
     */
    tag?: EntryFieldTypes.Array<EntryFieldTypes.Symbol<"Contentful" | "GraphQL" | "JavaScript" | "React">>;
    /**
     * Field type definition for field 'canonicalUrl' (Canonical URL)
     * @name Canonical URL
     * @localized false
     */
    canonicalUrl?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'openGraphImage' (Open Graph Image)
     * @name Open Graph Image
     * @localized false
     */
    openGraphImage?: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'blog' (Blog)
 * @name TypeBlogSkeleton
 * @type {TypeBlogSkeleton}
 * @author 2cbOO34WfrCLVZ2BiLBSGd
 * @since 2025-02-25T19:49:05.615Z
 * @version 1
 */
export type TypeBlogSkeleton = EntrySkeletonType<TypeBlogFields, "blog">;
/**
 * Entry type definition for content type 'blog' (Blog)
 * @name TypeBlog
 * @type {TypeBlog}
 * @author Akhil K<akhilthedevz@gmail.com>
 * @since 2025-02-25T19:49:05.615Z
 * @version 1
 * @link https://app.contentful.com/spaces/ega1952vfda2/environments/dev/content_types/blog
 */
export type TypeBlog<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeBlogSkeleton, Modifiers, Locales>;
export type TypeBlogWithoutLinkResolutionResponse = TypeBlog<"WITHOUT_LINK_RESOLUTION">;
export type TypeBlogWithoutUnresolvableLinksResponse = TypeBlog<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeBlogWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeBlog<"WITH_ALL_LOCALES", Locales>;
export type TypeBlogWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeBlog<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeBlogWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeBlog<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;

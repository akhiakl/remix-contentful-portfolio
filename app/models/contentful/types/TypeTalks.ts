import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeTalks'
 * @name TypeTalksFields
 * @type {TypeTalksFields}
 * @memberof TypeTalks
 */
export interface TypeTalksFields {
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
    description?: EntryFieldTypes.RichText;
    /**
     * Field type definition for field 'link' (link)
     * @name link
     * @localized false
     */
    link: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'type' (Type)
     * @name Type
     * @localized false
     */
    type?: EntryFieldTypes.Symbol<"Conference" | "Live Stream" | "Meetup">;
    /**
     * Field type definition for field 'previewImage' (Preview Image)
     * @name Preview Image
     * @localized false
     */
    previewImage?: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'talks' (Talks)
 * @name TypeTalksSkeleton
 * @type {TypeTalksSkeleton}
 * @author 2cbOO34WfrCLVZ2BiLBSGd
 * @since 2025-02-25T19:49:08.241Z
 * @version 1
 */
export type TypeTalksSkeleton = EntrySkeletonType<TypeTalksFields, "talks">;
/**
 * Entry type definition for content type 'talks' (Talks)
 * @name TypeTalks
 * @type {TypeTalks}
 * @author Akhil K<akhilthedevz@gmail.com>
 * @since 2025-02-25T19:49:08.241Z
 * @version 1
 * @link https://app.contentful.com/spaces/ega1952vfda2/environments/dev/content_types/talks
 */
export type TypeTalks<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeTalksSkeleton, Modifiers, Locales>;
export type TypeTalksWithoutLinkResolutionResponse = TypeTalks<"WITHOUT_LINK_RESOLUTION">;
export type TypeTalksWithoutUnresolvableLinksResponse = TypeTalks<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeTalksWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeTalks<"WITH_ALL_LOCALES", Locales>;
export type TypeTalksWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeTalks<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeTalksWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeTalks<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;

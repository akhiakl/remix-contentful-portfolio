import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeSocialLink'
 * @name TypeSocialLinkFields
 * @type {TypeSocialLinkFields}
 * @memberof TypeSocialLink
 */
export interface TypeSocialLinkFields {
    /**
     * Field type definition for field 'name' (Name)
     * @name Name
     * @localized false
     */
    name?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'url' (URL)
     * @name URL
     * @localized false
     */
    url?: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'socialLink' (Social Link)
 * @name TypeSocialLinkSkeleton
 * @type {TypeSocialLinkSkeleton}
 * @author 2cbOO34WfrCLVZ2BiLBSGd
 * @since 2025-02-25T19:49:06.894Z
 * @version 1
 */
export type TypeSocialLinkSkeleton = EntrySkeletonType<TypeSocialLinkFields, "socialLink">;
/**
 * Entry type definition for content type 'socialLink' (Social Link)
 * @name TypeSocialLink
 * @type {TypeSocialLink}
 * @author Akhil K<akhilthedevz@gmail.com>
 * @since 2025-02-25T19:49:06.894Z
 * @version 1
 * @link https://app.contentful.com/spaces/ega1952vfda2/environments/dev/content_types/socialLink
 */
export type TypeSocialLink<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSocialLinkSkeleton, Modifiers, Locales>;

export function isTypeSocialLink<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeSocialLink<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'socialLink'
}

export type TypeSocialLinkWithoutLinkResolutionResponse = TypeSocialLink<"WITHOUT_LINK_RESOLUTION">;
export type TypeSocialLinkWithoutUnresolvableLinksResponse = TypeSocialLink<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeSocialLinkWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeSocialLink<"WITH_ALL_LOCALES", Locales>;
export type TypeSocialLinkWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeSocialLink<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeSocialLinkWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeSocialLink<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;

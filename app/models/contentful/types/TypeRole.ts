import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeRole'
 * @name TypeRoleFields
 * @type {TypeRoleFields}
 * @memberof TypeRole
 */
export interface TypeRoleFields {
    /**
     * Field type definition for field 'roleTitle' (Role Title)
     * @name Role Title
     * @localized false
     */
    roleTitle?: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'role' (Role)
 * @name TypeRoleSkeleton
 * @type {TypeRoleSkeleton}
 * @author 2cbOO34WfrCLVZ2BiLBSGd
 * @since 2025-02-25T19:49:04.357Z
 * @version 1
 */
export type TypeRoleSkeleton = EntrySkeletonType<TypeRoleFields, "role">;
/**
 * Entry type definition for content type 'role' (Role)
 * @name TypeRole
 * @type {TypeRole}
 * @author Akhil K<akhilthedevz@gmail.com>
 * @since 2025-02-25T19:49:04.357Z
 * @version 1
 * @link https://app.contentful.com/spaces/ega1952vfda2/environments/dev/content_types/role
 */
export type TypeRole<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeRoleSkeleton, Modifiers, Locales>;

export function isTypeRole<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeRole<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'role'
}

export type TypeRoleWithoutLinkResolutionResponse = TypeRole<"WITHOUT_LINK_RESOLUTION">;
export type TypeRoleWithoutUnresolvableLinksResponse = TypeRole<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeRoleWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeRole<"WITH_ALL_LOCALES", Locales>;
export type TypeRoleWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeRole<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeRoleWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeRole<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;

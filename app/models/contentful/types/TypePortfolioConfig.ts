import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypePortfolioConfig'
 * @name TypePortfolioConfigFields
 * @type {TypePortfolioConfigFields}
 * @memberof TypePortfolioConfig
 */
export interface TypePortfolioConfigFields {
    /**
     * Field type definition for field 'firstName' (First name)
     * @name First name
     * @localized false
     */
    firstName: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'lastName' (Last name)
     * @name Last name
     * @localized false
     */
    lastName: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'summary' (Summary)
     * @name Summary
     * @localized false
     */
    summary: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'address' (Address)
     * @name Address
     * @localized false
     */
    address?: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'email' (Email)
     * @name Email
     * @localized false
     */
    email?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'phone' (Phone)
     * @name Phone
     * @localized false
     */
    phone: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'linkedin' (LinkedIn)
     * @name LinkedIn
     * @localized false
     */
    linkedin?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'stackoverflow' (Stack Overflow)
     * @name Stack Overflow
     * @localized false
     */
    stackoverflow?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'github' (GitHub)
     * @name GitHub
     * @localized false
     */
    github?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'twitter' (Twitter)
     * @name Twitter
     * @localized false
     */
    twitter?: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'portfolioConfig' (Portfolio config)
 * @name TypePortfolioConfigSkeleton
 * @type {TypePortfolioConfigSkeleton}
 * @author 2cbOO34WfrCLVZ2BiLBSGd
 * @since 2024-02-17T18:11:50.121Z
 * @version 1
 */
export type TypePortfolioConfigSkeleton = EntrySkeletonType<TypePortfolioConfigFields, "portfolioConfig">;
/**
 * Entry type definition for content type 'portfolioConfig' (Portfolio config)
 * @name TypePortfolioConfig
 * @type {TypePortfolioConfig}
 * @author Akhil K<akhilthedevz@gmail.com>
 * @since 2024-02-17T18:11:50.121Z
 * @version 1
 * @link https://app.contentful.com/spaces/ega1952vfda2/environments/dev/content_types/portfolioConfig
 */
export type TypePortfolioConfig<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePortfolioConfigSkeleton, Modifiers, Locales>;
export type TypePortfolioConfigWithoutLinkResolutionResponse = TypePortfolioConfig<"WITHOUT_LINK_RESOLUTION">;
export type TypePortfolioConfigWithoutUnresolvableLinksResponse = TypePortfolioConfig<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypePortfolioConfigWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypePortfolioConfig<"WITH_ALL_LOCALES", Locales>;
export type TypePortfolioConfigWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypePortfolioConfig<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypePortfolioConfigWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypePortfolioConfig<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;

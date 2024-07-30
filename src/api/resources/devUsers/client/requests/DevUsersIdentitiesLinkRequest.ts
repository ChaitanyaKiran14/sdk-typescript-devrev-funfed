/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         devUser: "dev_user",
 *         id: "id",
 *         issuer: "issuer"
 *     }
 */
export interface DevUsersIdentitiesLinkRequest {
    /** The ID of the Dev user to link the external identity to. */
    devUser: string;
    /** Display name of the Dev user in the external source. */
    displayName?: string;
    /** Unique ID of the Dev user in the external source. */
    id: string;
    /** Issuer of the external identity of the Dev user. */
    issuer: string;
}

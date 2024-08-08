/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         code: "code",
 *         state: "state"
 *     }
 */
export interface KeyringsCreateCallbackRequest {
    /** Code to exchange for an access token. */
    code: string;
    /** State value given to the authorization request. */
    state: string;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../../../../index";

/**
 * @example
 *     {}
 */
export interface RevUsersCreateRequest {
    /**
     * The ID of the account to which the created Rev user is associated.
     *
     */
    account?: string;
    /** The IDs of the artifacts to associate with the Rev user. */
    artifacts?: string[];
    /** Application-defined custom fields. */
    customFields?: Record<string, unknown>;
    /** The schema fragment IDs associated with the Rev user. */
    customSchemaFragments?: string[];
    /** Description of the Rev user. */
    description?: string;
    /**
     * The user's display name. The name is non-unique and mutable.
     *
     */
    displayName?: string;
    /** Email address of the Rev user. */
    email?: string;
    /**
     * External ref is a mutable unique identifier for a user within the
     * Dev organization from your primary customer record. If none is
     * available, a good alternative is the email address/phone number
     * which could uniquely identify the user. If none is specified, a
     * system-generated identifier will be assigned to the user.
     *
     */
    externalRef?: string;
    /** Phone numbers, in E.164 format, of the Rev user. */
    phoneNumbers?: string[];
    /**
     * The ID of the Rev organization to which the created Rev user is
     * associated.
     *
     */
    revOrg?: string;
    /** Tags associated with the Rev user. */
    tags?: DevRev.SetTagWithValue[];
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../../../../index";

/**
 * @example
 *     {
 *         id: "REV-AbCdEfGh"
 *     }
 */
export interface RevOrgsUpdateRequest {
    /** New account ID to associate with this Rev organization. */
    account?: string;
    artifacts?: DevRev.RevOrgsUpdateRequestArtifacts;
    /**
     * Schema fragment IDs associated with this Rev organization.
     *
     */
    customSchemaFragments?: string[];
    /** Description of the Rev organization. */
    description?: string;
    /** Customer chosen name for the Rev organization. */
    displayName?: string;
    /** Company's domain name. Example - 'devrev.ai'. */
    domain?: string;
    environment?: DevRev.OrgEnvironment;
    /**
     * External ref is a custom unique identifier which is a reference to
     * an unique id for this organization's data in some system of
     * records.
     *
     */
    externalRef?: string;
    /** The ID of Rev organization to update. */
    id: string;
    /** Tags associated with the Rev organization. */
    tags?: DevRev.SetTagWithValue[];
    /** The tier of the RevOrg. */
    tier?: string;
}

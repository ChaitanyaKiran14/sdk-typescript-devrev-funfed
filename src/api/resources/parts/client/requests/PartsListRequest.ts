/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../../../../index";

/**
 * @example
 *     {}
 */
export interface PartsListRequest {
    /** Filters for parts of the provided type(s). */
    type?: DevRev.PartType[];
    /** Filters for parts created by any of these users. */
    createdBy?: string[];
    /**
     * The cursor to resume iteration from. If not provided, then
     * iteration starts from the beginning.
     *
     */
    cursor?: string;
    /**
     * The maximum number of parts to return. The default is '50'.
     *
     */
    limit?: number;
    mode?: DevRev.ListMode;
    /** Filters for parts of the provided name(s). */
    name?: string[];
    /** Filters for parts owned by any of these users. */
    ownedBy?: string[];
    parentPart?: DevRev.ParentPartFilter;
}

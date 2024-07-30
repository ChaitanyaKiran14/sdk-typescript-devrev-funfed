/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface UomsListResponse {
    /**
     * The cursor used to iterate subsequent results in accordance to the
     * sort order. If not set, then no later elements exist.
     */
    nextCursor?: string;
    /**
     * The cursor used to iterate preceding results in accordance to the
     * sort order. If not set, then no prior elements exist.
     */
    prevCursor?: string;
    /** The list of Unit of Measurement (UOM) objects. */
    uoms: DevRev.Uom[];
}

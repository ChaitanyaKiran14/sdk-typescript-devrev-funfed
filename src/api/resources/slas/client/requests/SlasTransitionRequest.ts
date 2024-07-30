/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../../../../index";

/**
 * @example
 *     {
 *         id: "id",
 *         status: DevRev.SlaStatus.Archived
 *     }
 */
export interface SlasTransitionRequest {
    /** The updated SLA. */
    id: string;
    status: DevRev.SlaStatus;
}

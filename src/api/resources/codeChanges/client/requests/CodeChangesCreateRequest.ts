/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../../../../index";

/**
 * @example
 *     {}
 */
export interface CodeChangesCreateRequest {
    /** Application-defined custom fields. */
    customFields?: Record<string, unknown>;
    customSchemaSpec?: DevRev.CustomSchemaSpec;
}

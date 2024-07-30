/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface CustomSchemaFragmentsSetRequestCustomTypeFragment {
    /**
     * Path components used to display available custom types in tree
     * form.
     */
    path?: DevRev.CustomTypePathComponent[];
    /** The ID of the associated custom stage diagram. */
    stageDiagram?: string;
    /** List of Per-DevOrg stock field overrides. */
    stockFieldOverrides?: DevRev.StockFieldOverride[];
    /** The string used to populate the subtype in the leaf type. */
    subtype: string;
    /** The display name of the subtype. */
    subtypeDisplayName?: string;
}

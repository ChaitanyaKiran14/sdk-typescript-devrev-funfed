/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface ErrorBadRequestMissingDependency {
    /** The dependent fields. */
    dependencies?: DevRev.ErrorBadRequestMissingDependencyDependency[];
    /** The field on which the value depends. */
    dependentFieldName?: string;
    /** The value which needs to be set of the dependent field. */
    dependentFieldValue?: string;
    /** The field whose value was received. */
    providedFieldName?: string;
    /** The value that was received. */
    providedFieldValue?: string;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const ErrorBadRequestMergeWorksErrorErrorSubtype: core.serialization.Schema<
    serializers.ErrorBadRequestMergeWorksErrorErrorSubtype.Raw,
    DevRev.ErrorBadRequestMergeWorksErrorErrorSubtype
> = core.serialization.enum_(["already_merged", "closed", "different_workspace", "invalid_stage_transition"]);

export declare namespace ErrorBadRequestMergeWorksErrorErrorSubtype {
    type Raw = "already_merged" | "closed" | "different_workspace" | "invalid_stage_transition";
}

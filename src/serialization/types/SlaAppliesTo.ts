/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const SlaAppliesTo: core.serialization.Schema<serializers.SlaAppliesTo.Raw, DevRev.SlaAppliesTo> =
    core.serialization.enum_(["conversation", "issue", "ticket"]);

export declare namespace SlaAppliesTo {
    type Raw = "conversation" | "issue" | "ticket";
}

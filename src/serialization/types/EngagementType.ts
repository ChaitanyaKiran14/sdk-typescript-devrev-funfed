/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const EngagementType: core.serialization.Schema<serializers.EngagementType.Raw, DevRev.EngagementType> =
    core.serialization.enum_(["call", "default", "email", "linked_in", "meeting", "offline", "survey"]);

export declare namespace EngagementType {
    type Raw = "call" | "default" | "email" | "linked_in" | "meeting" | "offline" | "survey";
}

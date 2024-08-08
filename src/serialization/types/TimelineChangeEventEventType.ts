/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const TimelineChangeEventEventType: core.serialization.Schema<
    serializers.TimelineChangeEventEventType.Raw,
    DevRev.TimelineChangeEventEventType
> = core.serialization.enum_(["annotated", "created", "deleted", "linked", "updated"]);

export declare namespace TimelineChangeEventEventType {
    type Raw = "annotated" | "created" | "deleted" | "linked" | "updated";
}

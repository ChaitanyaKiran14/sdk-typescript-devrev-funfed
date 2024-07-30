/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const TimelineEntriesCreateRequestType: core.serialization.Schema<
    serializers.TimelineEntriesCreateRequestType.Raw,
    DevRev.TimelineEntriesCreateRequestType
> = core.serialization.stringLiteral("timeline_comment");

export declare namespace TimelineEntriesCreateRequestType {
    type Raw = "timeline_comment";
}

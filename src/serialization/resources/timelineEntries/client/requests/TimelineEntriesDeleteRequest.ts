/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";

export const TimelineEntriesDeleteRequest: core.serialization.Schema<
    serializers.TimelineEntriesDeleteRequest.Raw,
    DevRev.TimelineEntriesDeleteRequest
> = core.serialization.object({
    id: core.serialization.string(),
});

export declare namespace TimelineEntriesDeleteRequest {
    interface Raw {
        id: string;
    }
}

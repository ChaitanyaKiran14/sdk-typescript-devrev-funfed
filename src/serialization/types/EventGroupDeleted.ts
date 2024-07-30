/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const EventGroupDeleted: core.serialization.ObjectSchema<
    serializers.EventGroupDeleted.Raw,
    DevRev.EventGroupDeleted
> = core.serialization.object({
    id: core.serialization.string(),
});

export declare namespace EventGroupDeleted {
    interface Raw {
        id: string;
    }
}

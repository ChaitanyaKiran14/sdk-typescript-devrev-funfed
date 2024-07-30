/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const EventConversationDeleted: core.serialization.ObjectSchema<
    serializers.EventConversationDeleted.Raw,
    DevRev.EventConversationDeleted
> = core.serialization.object({
    id: core.serialization.string(),
});

export declare namespace EventConversationDeleted {
    interface Raw {
        id: string;
    }
}

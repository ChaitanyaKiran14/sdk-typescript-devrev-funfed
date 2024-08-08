/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { SendNotificationGenericNotificationEntryNotificationAction } from "./SendNotificationGenericNotificationEntryNotificationAction";

export const SendNotificationGenericNotificationEntryMetadata: core.serialization.ObjectSchema<
    serializers.SendNotificationGenericNotificationEntryMetadata.Raw,
    DevRev.SendNotificationGenericNotificationEntryMetadata
> = core.serialization.object({
    action: SendNotificationGenericNotificationEntryNotificationAction.optional(),
    contentTemplate: core.serialization.property("content_template", core.serialization.string()),
    inputs: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace SendNotificationGenericNotificationEntryMetadata {
    interface Raw {
        action?: SendNotificationGenericNotificationEntryNotificationAction.Raw | null;
        content_template: string;
        inputs?: Record<string, unknown> | null;
    }
}

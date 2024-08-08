/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const SendNotificationGenericNotificationEntryNotificationActionClickableActionType: core.serialization.Schema<
    serializers.SendNotificationGenericNotificationEntryNotificationActionClickableActionType.Raw,
    DevRev.SendNotificationGenericNotificationEntryNotificationActionClickableActionType
> = core.serialization.enum_(["object", "url"]);

export declare namespace SendNotificationGenericNotificationEntryNotificationActionClickableActionType {
    type Raw = "object" | "url";
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const GenericNotificationEventType: core.serialization.Schema<
    serializers.GenericNotificationEventType.Raw,
    DevRev.GenericNotificationEventType
> = core.serialization.enum_(["alert", "assignment", "mention", "reminder", "update"]);

export declare namespace GenericNotificationEventType {
    type Raw = "alert" | "assignment" | "mention" | "reminder" | "update";
}

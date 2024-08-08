/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { WebhookEventType } from "./WebhookEventType";
import { WebhookHeader } from "./WebhookHeader";
import { WebhookStatus } from "./WebhookStatus";
import { AtomBase } from "./AtomBase";

export const Webhook: core.serialization.ObjectSchema<serializers.Webhook.Raw, DevRev.Webhook> = core.serialization
    .object({
        eventTypes: core.serialization.property("event_types", core.serialization.list(WebhookEventType).optional()),
        headers: core.serialization.list(WebhookHeader).optional(),
        secret: core.serialization.string(),
        status: WebhookStatus,
        url: core.serialization.string(),
    })
    .extend(AtomBase);

export declare namespace Webhook {
    interface Raw extends AtomBase.Raw {
        event_types?: WebhookEventType.Raw[] | null;
        headers?: WebhookHeader.Raw[] | null;
        secret: string;
        status: WebhookStatus.Raw;
        url: string;
    }
}

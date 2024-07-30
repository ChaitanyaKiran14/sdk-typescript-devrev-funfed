/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";
import { ConversationsCreateRequestMessage } from "../../../../types/ConversationsCreateRequestMessage";
import { ConversationsCreateRequestMetadata } from "../../../../types/ConversationsCreateRequestMetadata";
import { StageInit } from "../../../../types/StageInit";
import { SetTagWithValue } from "../../../../types/SetTagWithValue";

export const ConversationsCreateRequest: core.serialization.Schema<
    serializers.ConversationsCreateRequest.Raw,
    DevRev.ConversationsCreateRequest
> = core.serialization.object({
    description: core.serialization.string().optional(),
    group: core.serialization.string().optional(),
    isSpam: core.serialization.property("is_spam", core.serialization.boolean().optional()),
    members: core.serialization.list(core.serialization.string()).optional(),
    messages: core.serialization.list(ConversationsCreateRequestMessage).optional(),
    metadata: ConversationsCreateRequestMetadata.optional(),
    sourceChannel: core.serialization.property("source_channel", core.serialization.string().optional()),
    stage: StageInit.optional(),
    tags: core.serialization.list(SetTagWithValue).optional(),
    title: core.serialization.string().optional(),
    userSessions: core.serialization.property(
        "user_sessions",
        core.serialization.list(core.serialization.string()).optional()
    ),
});

export declare namespace ConversationsCreateRequest {
    interface Raw {
        description?: string | null;
        group?: string | null;
        is_spam?: boolean | null;
        members?: string[] | null;
        messages?: ConversationsCreateRequestMessage.Raw[] | null;
        metadata?: ConversationsCreateRequestMetadata.Raw | null;
        source_channel?: string | null;
        stage?: StageInit.Raw | null;
        tags?: SetTagWithValue.Raw[] | null;
        title?: string | null;
        user_sessions?: string[] | null;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { EmailInfo } from "./EmailInfo";
import { EmailInlineAttachment } from "./EmailInlineAttachment";
import { ArtifactSummary } from "./ArtifactSummary";
import { SnapWidgetBase } from "./SnapWidgetBase";

export const EmailPreviewWidget: core.serialization.ObjectSchema<
    serializers.EmailPreviewWidget.Raw,
    DevRev.EmailPreviewWidget
> = core.serialization
    .object({
        bcc: core.serialization.list(EmailInfo),
        cc: core.serialization.list(EmailInfo),
        from: core.serialization.list(EmailInfo),
        htmlBody: core.serialization.property("html_body", core.serialization.string().optional()),
        inReplyTo: core.serialization.property("in_reply_to", core.serialization.string().optional()),
        inlines: core.serialization.list(EmailInlineAttachment),
        isSpam: core.serialization.property("is_spam", core.serialization.boolean().optional()),
        messageId: core.serialization.property("message_id", core.serialization.string().optional()),
        rawEmailArtifact: core.serialization.property("raw_email_artifact", ArtifactSummary.optional()),
        references: core.serialization.list(core.serialization.string()),
        replyTo: core.serialization.property("reply_to", core.serialization.list(EmailInfo)),
        sentTimestamp: core.serialization.property("sent_timestamp", core.serialization.date().optional()),
        subject: core.serialization.string().optional(),
        textBody: core.serialization.property("text_body", core.serialization.string().optional()),
        to: core.serialization.list(EmailInfo),
    })
    .extend(SnapWidgetBase);

export declare namespace EmailPreviewWidget {
    interface Raw extends SnapWidgetBase.Raw {
        bcc: EmailInfo.Raw[];
        cc: EmailInfo.Raw[];
        from: EmailInfo.Raw[];
        html_body?: string | null;
        in_reply_to?: string | null;
        inlines: EmailInlineAttachment.Raw[];
        is_spam?: boolean | null;
        message_id?: string | null;
        raw_email_artifact?: ArtifactSummary.Raw | null;
        references: string[];
        reply_to: EmailInfo.Raw[];
        sent_timestamp?: string | null;
        subject?: string | null;
        text_body?: string | null;
        to: EmailInfo.Raw[];
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { WorksUpdateRequestTicketChannels } from "./WorksUpdateRequestTicketChannels";
import { TicketSeverity } from "./TicketSeverity";

export const WorksUpdateRequestTicket: core.serialization.ObjectSchema<
    serializers.WorksUpdateRequestTicket.Raw,
    DevRev.WorksUpdateRequestTicket
> = core.serialization.object({
    channels: WorksUpdateRequestTicketChannels.optional(),
    group: core.serialization.string().optional(),
    isSpam: core.serialization.property("is_spam", core.serialization.boolean().optional()),
    needsResponse: core.serialization.property("needs_response", core.serialization.boolean().optional()),
    revOrg: core.serialization.property("rev_org", core.serialization.string().optional()),
    severity: TicketSeverity.optional(),
});

export declare namespace WorksUpdateRequestTicket {
    interface Raw {
        channels?: WorksUpdateRequestTicketChannels.Raw | null;
        group?: string | null;
        is_spam?: boolean | null;
        needs_response?: boolean | null;
        rev_org?: string | null;
        severity?: TicketSeverity.Raw | null;
    }
}

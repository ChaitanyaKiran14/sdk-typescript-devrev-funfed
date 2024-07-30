/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { DateFilter } from "./DateFilter";
import { IssuePriority } from "./IssuePriority";
import { SlaSummaryFilter } from "./SlaSummaryFilter";

export const WorksFilterIssue: core.serialization.ObjectSchema<
    serializers.WorksFilterIssue.Raw,
    DevRev.WorksFilterIssue
> = core.serialization.object({
    accounts: core.serialization.list(core.serialization.string()).optional(),
    actualStartDate: core.serialization.property("actual_start_date", DateFilter.optional()),
    priority: core.serialization.list(IssuePriority).optional(),
    priorityV2: core.serialization.property(
        "priority_v2",
        core.serialization.list(core.serialization.number()).optional()
    ),
    revOrgs: core.serialization.property("rev_orgs", core.serialization.list(core.serialization.string()).optional()),
    slaSummary: core.serialization.property("sla_summary", SlaSummaryFilter.optional()),
    sprint: core.serialization.list(core.serialization.string()).optional(),
    subtype: core.serialization.list(core.serialization.string()).optional(),
    targetStartDate: core.serialization.property("target_start_date", DateFilter.optional()),
});

export declare namespace WorksFilterIssue {
    interface Raw {
        accounts?: string[] | null;
        actual_start_date?: DateFilter.Raw | null;
        priority?: IssuePriority.Raw[] | null;
        priority_v2?: number[] | null;
        rev_orgs?: string[] | null;
        sla_summary?: SlaSummaryFilter.Raw | null;
        sprint?: string[] | null;
        subtype?: string[] | null;
        target_start_date?: DateFilter.Raw | null;
    }
}

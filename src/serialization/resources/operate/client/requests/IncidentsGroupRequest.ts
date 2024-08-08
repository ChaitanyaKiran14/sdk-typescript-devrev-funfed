/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";
import { DateFilter } from "../../../../types/DateFilter";
import { ListMode } from "../../../../types/ListMode";

export const IncidentsGroupRequest: core.serialization.Schema<
    serializers.IncidentsGroupRequest.Raw,
    DevRev.IncidentsGroupRequest
> = core.serialization.object({
    appliesToParts: core.serialization.property(
        "applies_to_parts",
        core.serialization.list(core.serialization.string()).optional()
    ),
    createdBy: core.serialization.property(
        "created_by",
        core.serialization.list(core.serialization.string()).optional()
    ),
    createdDate: core.serialization.property("created_date", DateFilter.optional()),
    cursor: core.serialization.string().optional(),
    groupBy: core.serialization.property("group_by", core.serialization.string()),
    limit: core.serialization.number().optional(),
    limitPerGroup: core.serialization.property("limit_per_group", core.serialization.number().optional()),
    mode: ListMode.optional(),
    modifiedDate: core.serialization.property("modified_date", DateFilter.optional()),
    ownedBy: core.serialization.property("owned_by", core.serialization.list(core.serialization.string()).optional()),
    severity: core.serialization.list(core.serialization.number()).optional(),
    sortBy: core.serialization.property("sort_by", core.serialization.list(core.serialization.string()).optional()),
    stage: core.serialization.list(core.serialization.string()).optional(),
    title: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace IncidentsGroupRequest {
    interface Raw {
        applies_to_parts?: string[] | null;
        created_by?: string[] | null;
        created_date?: DateFilter.Raw | null;
        cursor?: string | null;
        group_by: string;
        limit?: number | null;
        limit_per_group?: number | null;
        mode?: ListMode.Raw | null;
        modified_date?: DateFilter.Raw | null;
        owned_by?: string[] | null;
        severity?: number[] | null;
        sort_by?: string[] | null;
        stage?: string[] | null;
        title?: string[] | null;
    }
}

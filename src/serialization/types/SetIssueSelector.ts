/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const SetIssueSelector: core.serialization.ObjectSchema<
    serializers.SetIssueSelector.Raw,
    DevRev.SetIssueSelector
> = core.serialization.object({
    customFields: core.serialization.property(
        "custom_fields",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    parts: core.serialization.list(core.serialization.string()).optional(),
    revOrgs: core.serialization.property("rev_orgs", core.serialization.list(core.serialization.string()).optional()),
    stageName: core.serialization.property(
        "stage_name",
        core.serialization.list(core.serialization.string()).optional()
    ),
    subtype: core.serialization.list(core.serialization.string()).optional(),
    tags: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace SetIssueSelector {
    interface Raw {
        custom_fields?: Record<string, unknown> | null;
        parts?: string[] | null;
        rev_orgs?: string[] | null;
        stage_name?: string[] | null;
        subtype?: string[] | null;
        tags?: string[] | null;
    }
}

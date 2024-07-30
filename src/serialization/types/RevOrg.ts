/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { AccountSummary } from "./AccountSummary";
import { ArtifactSummary } from "./ArtifactSummary";
import { TagWithValue } from "./TagWithValue";
import { OrgBase } from "./OrgBase";

export const RevOrg: core.serialization.ObjectSchema<serializers.RevOrg.Raw, DevRev.RevOrg> = core.serialization
    .object({
        account: AccountSummary.optional(),
        artifacts: core.serialization.list(ArtifactSummary).optional(),
        customFields: core.serialization.property(
            "custom_fields",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
        ),
        customSchemaFragments: core.serialization.property(
            "custom_schema_fragments",
            core.serialization.list(core.serialization.string()).optional()
        ),
        description: core.serialization.string().optional(),
        domain: core.serialization.string().optional(),
        externalRef: core.serialization.property("external_ref", core.serialization.string().optional()),
        stockSchemaFragment: core.serialization.property(
            "stock_schema_fragment",
            core.serialization.string().optional()
        ),
        subtype: core.serialization.string().optional(),
        tags: core.serialization.list(TagWithValue).optional(),
    })
    .extend(OrgBase);

export declare namespace RevOrg {
    interface Raw extends OrgBase.Raw {
        account?: AccountSummary.Raw | null;
        artifacts?: ArtifactSummary.Raw[] | null;
        custom_fields?: Record<string, unknown> | null;
        custom_schema_fragments?: string[] | null;
        description?: string | null;
        domain?: string | null;
        external_ref?: string | null;
        stock_schema_fragment?: string | null;
        subtype?: string | null;
        tags?: TagWithValue.Raw[] | null;
    }
}

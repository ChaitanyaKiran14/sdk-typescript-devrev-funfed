/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";
import { MetricDefinitionMetricType } from "../../../../types/MetricDefinitionMetricType";
import { MetricDefinitionAppliesTo } from "../../../../types/MetricDefinitionAppliesTo";
import { ListMode } from "../../../../types/ListMode";
import { MetricDefinitionStatus } from "../../../../types/MetricDefinitionStatus";

export const MetricDefinitionsListRequest: core.serialization.Schema<
    serializers.MetricDefinitionsListRequest.Raw,
    DevRev.MetricDefinitionsListRequest
> = core.serialization.object({
    type: core.serialization.list(MetricDefinitionMetricType).optional(),
    appliesToType: core.serialization.property(
        "applies_to_type",
        core.serialization.list(MetricDefinitionAppliesTo).optional()
    ),
    cursor: core.serialization.string().optional(),
    includeCustomMetrics: core.serialization.property(
        "include_custom_metrics",
        core.serialization.boolean().optional()
    ),
    limit: core.serialization.number().optional(),
    mode: ListMode.optional(),
    status: core.serialization.list(MetricDefinitionStatus).optional(),
});

export declare namespace MetricDefinitionsListRequest {
    interface Raw {
        type?: MetricDefinitionMetricType.Raw[] | null;
        applies_to_type?: MetricDefinitionAppliesTo.Raw[] | null;
        cursor?: string | null;
        include_custom_metrics?: boolean | null;
        limit?: number | null;
        mode?: ListMode.Raw | null;
        status?: MetricDefinitionStatus.Raw[] | null;
    }
}

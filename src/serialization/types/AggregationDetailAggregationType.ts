/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const AggregationDetailAggregationType: core.serialization.Schema<
    serializers.AggregationDetailAggregationType.Raw,
    DevRev.AggregationDetailAggregationType
> = core.serialization.enum_([
    "duration",
    "latest",
    "maximum",
    "minimum",
    "oldest",
    "running_total",
    "sum",
    "unique_count",
]);

export declare namespace AggregationDetailAggregationType {
    type Raw = "duration" | "latest" | "maximum" | "minimum" | "oldest" | "running_total" | "sum" | "unique_count";
}

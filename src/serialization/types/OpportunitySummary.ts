/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { WorkBaseSummary } from "./WorkBaseSummary";

export const OpportunitySummary: core.serialization.ObjectSchema<
    serializers.OpportunitySummary.Raw,
    DevRev.OpportunitySummary
> = WorkBaseSummary;

export declare namespace OpportunitySummary {
    type Raw = WorkBaseSummary.Raw;
}

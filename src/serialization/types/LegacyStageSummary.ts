/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { CustomStageSummary } from "./CustomStageSummary";

export const LegacyStageSummary: core.serialization.ObjectSchema<
    serializers.LegacyStageSummary.Raw,
    DevRev.LegacyStageSummary
> = core.serialization.object({
    name: core.serialization.string(),
    stage: CustomStageSummary.optional(),
});

export declare namespace LegacyStageSummary {
    interface Raw {
        name: string;
        stage?: CustomStageSummary.Raw | null;
    }
}

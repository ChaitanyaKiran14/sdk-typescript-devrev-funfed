/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";
import { AccountsFilters } from "../../../../types/AccountsFilters";
import { SlaEvaluationPeriod } from "../../../../types/SlaEvaluationPeriod";
import { SetSlaPolicy } from "../../../../types/SetSlaPolicy";

export const SlasUpdateRequest: core.serialization.Schema<serializers.SlasUpdateRequest.Raw, DevRev.SlasUpdateRequest> =
    core.serialization.object({
        accountSelector: core.serialization.property("account_selector", AccountsFilters.optional()),
        description: core.serialization.string().optional(),
        evaluationPeriod: core.serialization.property("evaluation_period", SlaEvaluationPeriod.optional()),
        id: core.serialization.string(),
        name: core.serialization.string().optional(),
        policies: core.serialization.list(SetSlaPolicy).optional(),
    });

export declare namespace SlasUpdateRequest {
    interface Raw {
        account_selector?: AccountsFilters.Raw | null;
        description?: string | null;
        evaluation_period?: SlaEvaluationPeriod.Raw | null;
        id: string;
        name?: string | null;
        policies?: SetSlaPolicy.Raw[] | null;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";
import { SlaAppliesTo } from "../../../../types/SlaAppliesTo";
import { SlasFilterAppliesToOperatorType } from "../../../../types/SlasFilterAppliesToOperatorType";
import { ListMode } from "../../../../types/ListMode";
import { SlaType } from "../../../../types/SlaType";
import { SlaStatus } from "../../../../types/SlaStatus";

export const SlasListRequest: core.serialization.Schema<serializers.SlasListRequest.Raw, DevRev.SlasListRequest> =
    core.serialization.object({
        appliesTo: core.serialization.property("applies_to", core.serialization.list(SlaAppliesTo).optional()),
        appliesToOp: core.serialization.property("applies_to_op", SlasFilterAppliesToOperatorType.optional()),
        cursor: core.serialization.string().optional(),
        limit: core.serialization.number().optional(),
        mode: ListMode.optional(),
        slaType: core.serialization.property("sla_type", core.serialization.list(SlaType).optional()),
        status: core.serialization.list(SlaStatus).optional(),
    });

export declare namespace SlasListRequest {
    interface Raw {
        applies_to?: SlaAppliesTo.Raw[] | null;
        applies_to_op?: SlasFilterAppliesToOperatorType.Raw | null;
        cursor?: string | null;
        limit?: number | null;
        mode?: ListMode.Raw | null;
        sla_type?: SlaType.Raw[] | null;
        status?: SlaStatus.Raw[] | null;
    }
}

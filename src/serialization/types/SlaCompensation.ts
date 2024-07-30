/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const SlaCompensation: core.serialization.Schema<serializers.SlaCompensation.Raw, DevRev.SlaCompensation> =
    core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace SlaCompensation {
    type Raw = Record<string, unknown>;
}

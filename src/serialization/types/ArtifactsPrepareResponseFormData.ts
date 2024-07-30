/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const ArtifactsPrepareResponseFormData: core.serialization.ObjectSchema<
    serializers.ArtifactsPrepareResponseFormData.Raw,
    DevRev.ArtifactsPrepareResponseFormData
> = core.serialization.object({
    key: core.serialization.string(),
    value: core.serialization.string(),
});

export declare namespace ArtifactsPrepareResponseFormData {
    interface Raw {
        key: string;
        value: string;
    }
}

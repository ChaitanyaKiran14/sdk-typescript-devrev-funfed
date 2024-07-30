/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const ErrorBadRequestMergeWorksErrorErrorClosed: core.serialization.Schema<
    serializers.ErrorBadRequestMergeWorksErrorErrorClosed.Raw,
    DevRev.ErrorBadRequestMergeWorksErrorErrorClosed
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace ErrorBadRequestMergeWorksErrorErrorClosed {
    type Raw = Record<string, unknown>;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";

export const AuthTokensUpdateRequest: core.serialization.Schema<
    serializers.AuthTokensUpdateRequest.Raw,
    DevRev.AuthTokensUpdateRequest
> = core.serialization.object({
    tokenHint: core.serialization.property("token_hint", core.serialization.string()),
    tokenId: core.serialization.property("token_id", core.serialization.string()),
});

export declare namespace AuthTokensUpdateRequest {
    interface Raw {
        token_hint: string;
        token_id: string;
    }
}

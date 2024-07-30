/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";

export const LinksGetRequest: core.serialization.Schema<serializers.LinksGetRequest.Raw, DevRev.LinksGetRequest> =
    core.serialization.object({
        id: core.serialization.string(),
    });

export declare namespace LinksGetRequest {
    interface Raw {
        id: string;
    }
}

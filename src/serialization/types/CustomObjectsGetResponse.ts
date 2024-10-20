/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { CustomObject } from "./CustomObject";

export const CustomObjectsGetResponse: core.serialization.ObjectSchema<
    serializers.CustomObjectsGetResponse.Raw,
    DevRev.CustomObjectsGetResponse
> = core.serialization.object({
    customObject: core.serialization.property("custom_object", CustomObject),
});

export declare namespace CustomObjectsGetResponse {
    interface Raw {
        custom_object: CustomObject.Raw;
    }
}

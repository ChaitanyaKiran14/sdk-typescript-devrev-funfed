/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { DevUser } from "./DevUser";

export const EventDevUserCreated: core.serialization.ObjectSchema<
    serializers.EventDevUserCreated.Raw,
    DevRev.EventDevUserCreated
> = core.serialization.object({
    devUser: core.serialization.property("dev_user", DevUser),
});

export declare namespace EventDevUserCreated {
    interface Raw {
        dev_user: DevUser.Raw;
    }
}

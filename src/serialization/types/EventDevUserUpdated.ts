/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { DevUser } from "./DevUser";

export const EventDevUserUpdated: core.serialization.ObjectSchema<
    serializers.EventDevUserUpdated.Raw,
    DevRev.EventDevUserUpdated
> = core.serialization.object({
    devUser: core.serialization.property("dev_user", DevUser),
    oldDevUser: core.serialization.property("old_dev_user", DevUser.optional()),
});

export declare namespace EventDevUserUpdated {
    interface Raw {
        dev_user: DevUser.Raw;
        old_dev_user?: DevUser.Raw | null;
    }
}

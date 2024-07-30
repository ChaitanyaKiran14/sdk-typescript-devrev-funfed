/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { RevUser } from "./RevUser";

export const RevUsersUpdateResponse: core.serialization.ObjectSchema<
    serializers.RevUsersUpdateResponse.Raw,
    DevRev.RevUsersUpdateResponse
> = core.serialization.object({
    revUser: core.serialization.property("rev_user", RevUser),
});

export declare namespace RevUsersUpdateResponse {
    interface Raw {
        rev_user: RevUser.Raw;
    }
}

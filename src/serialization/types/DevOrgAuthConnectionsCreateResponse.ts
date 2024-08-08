/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { AuthConnection } from "./AuthConnection";

export const DevOrgAuthConnectionsCreateResponse: core.serialization.ObjectSchema<
    serializers.DevOrgAuthConnectionsCreateResponse.Raw,
    DevRev.DevOrgAuthConnectionsCreateResponse
> = core.serialization.object({
    authConnection: core.serialization.property("auth_connection", AuthConnection),
});

export declare namespace DevOrgAuthConnectionsCreateResponse {
    interface Raw {
        auth_connection: AuthConnection.Raw;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { AuthTokensAccountTraits } from "./AuthTokensAccountTraits";
import { AuthTokensOrgTraits } from "./AuthTokensOrgTraits";
import { AuthTokensUserTraits } from "./AuthTokensUserTraits";

export const AuthTokensRevInfo: core.serialization.ObjectSchema<
    serializers.AuthTokensRevInfo.Raw,
    DevRev.AuthTokensRevInfo
> = core.serialization.object({
    accountRef: core.serialization.property("account_ref", core.serialization.string().optional()),
    accountTraits: core.serialization.property("account_traits", AuthTokensAccountTraits.optional()),
    orgRef: core.serialization.property("org_ref", core.serialization.string().optional()),
    orgTraits: core.serialization.property("org_traits", AuthTokensOrgTraits.optional()),
    userId: core.serialization.property("user_id", core.serialization.string().optional()),
    userRef: core.serialization.property("user_ref", core.serialization.string().optional()),
    userTraits: core.serialization.property("user_traits", AuthTokensUserTraits.optional()),
    workspaceRef: core.serialization.property("workspace_ref", core.serialization.string().optional()),
    workspaceTraits: core.serialization.property("workspace_traits", AuthTokensOrgTraits.optional()),
});

export declare namespace AuthTokensRevInfo {
    interface Raw {
        account_ref?: string | null;
        account_traits?: AuthTokensAccountTraits.Raw | null;
        org_ref?: string | null;
        org_traits?: AuthTokensOrgTraits.Raw | null;
        user_id?: string | null;
        user_ref?: string | null;
        user_traits?: AuthTokensUserTraits.Raw | null;
        workspace_ref?: string | null;
        workspace_traits?: AuthTokensOrgTraits.Raw | null;
    }
}

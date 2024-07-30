/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { Account } from "./Account";
import { RevOrg } from "./RevOrg";

export const AccountsCreateResponse: core.serialization.ObjectSchema<
    serializers.AccountsCreateResponse.Raw,
    DevRev.AccountsCreateResponse
> = core.serialization.object({
    account: Account,
    defaultRevOrg: core.serialization.property("default_rev_org", RevOrg),
});

export declare namespace AccountsCreateResponse {
    interface Raw {
        account: Account.Raw;
        default_rev_org: RevOrg.Raw;
    }
}

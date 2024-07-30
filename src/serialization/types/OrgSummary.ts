/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { OrgBaseSummary } from "./OrgBaseSummary";

export const OrgSummary: core.serialization.Schema<serializers.OrgSummary.Raw, DevRev.OrgSummary> = core.serialization
    .union("type", {
        account: OrgBaseSummary,
        rev_org: OrgBaseSummary,
    })
    .transform<DevRev.OrgSummary>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace OrgSummary {
    type Raw = OrgSummary.Account | OrgSummary.RevOrg;

    interface Account extends OrgBaseSummary.Raw {
        type: "account";
    }

    interface RevOrg extends OrgBaseSummary.Raw {
        type: "rev_org";
    }
}

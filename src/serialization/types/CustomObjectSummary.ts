/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { AtomBaseSummary } from "./AtomBaseSummary";

export const CustomObjectSummary: core.serialization.ObjectSchema<
    serializers.CustomObjectSummary.Raw,
    DevRev.CustomObjectSummary
> = AtomBaseSummary;

export declare namespace CustomObjectSummary {
    type Raw = AtomBaseSummary.Raw;
}

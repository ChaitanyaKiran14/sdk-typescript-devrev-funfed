/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const LinkType: core.serialization.Schema<serializers.LinkType.Raw, DevRev.LinkType> = core.serialization.enum_([
    "custom_link",
    "developed_with",
    "imports",
    "is_analyzed_by",
    "is_converted_to",
    "is_dependent_on",
    "is_duplicate_of",
    "is_follow_up_of",
    "is_merged_into",
    "is_parent_of",
    "is_part_of",
    "is_related_to",
    "serves",
]);

export declare namespace LinkType {
    type Raw =
        | "custom_link"
        | "developed_with"
        | "imports"
        | "is_analyzed_by"
        | "is_converted_to"
        | "is_dependent_on"
        | "is_duplicate_of"
        | "is_follow_up_of"
        | "is_merged_into"
        | "is_parent_of"
        | "is_part_of"
        | "is_related_to"
        | "serves";
}

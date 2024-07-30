/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const LinkEndpointType: core.serialization.Schema<serializers.LinkEndpointType.Raw, DevRev.LinkEndpointType> =
    core.serialization.enum_([
        "capability",
        "conversation",
        "enhancement",
        "feature",
        "issue",
        "opportunity",
        "product",
        "task",
        "ticket",
    ]);

export declare namespace LinkEndpointType {
    type Raw =
        | "capability"
        | "conversation"
        | "enhancement"
        | "feature"
        | "issue"
        | "opportunity"
        | "product"
        | "task"
        | "ticket";
}

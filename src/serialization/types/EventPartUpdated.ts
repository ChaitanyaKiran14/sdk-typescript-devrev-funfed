/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { Part } from "./Part";

export const EventPartUpdated: core.serialization.ObjectSchema<
    serializers.EventPartUpdated.Raw,
    DevRev.EventPartUpdated
> = core.serialization.object({
    oldPart: core.serialization.property("old_part", Part.optional()),
    part: Part,
});

export declare namespace EventPartUpdated {
    interface Raw {
        old_part?: Part.Raw | null;
        part: Part.Raw;
    }
}

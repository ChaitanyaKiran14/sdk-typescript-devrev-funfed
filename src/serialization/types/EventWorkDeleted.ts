/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { Work } from "./Work";

export const EventWorkDeleted: core.serialization.ObjectSchema<
    serializers.EventWorkDeleted.Raw,
    DevRev.EventWorkDeleted
> = core.serialization.object({
    id: core.serialization.string(),
    oldWork: core.serialization.property("old_work", Work.optional()),
});

export declare namespace EventWorkDeleted {
    interface Raw {
        id: string;
        old_work?: Work.Raw | null;
    }
}

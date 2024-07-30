/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { ArtifactSummary } from "./ArtifactSummary";
import { UserState } from "./UserState";
import { AtomBaseSummary } from "./AtomBaseSummary";

export const UserBaseSummary: core.serialization.ObjectSchema<serializers.UserBaseSummary.Raw, DevRev.UserBaseSummary> =
    core.serialization
        .object({
            displayName: core.serialization.property("display_name", core.serialization.string().optional()),
            displayPicture: core.serialization.property("display_picture", ArtifactSummary.optional()),
            email: core.serialization.string().optional(),
            fullName: core.serialization.property("full_name", core.serialization.string().optional()),
            state: UserState.optional(),
        })
        .extend(AtomBaseSummary);

export declare namespace UserBaseSummary {
    interface Raw extends AtomBaseSummary.Raw {
        display_name?: string | null;
        display_picture?: ArtifactSummary.Raw | null;
        email?: string | null;
        full_name?: string | null;
        state?: UserState.Raw | null;
    }
}

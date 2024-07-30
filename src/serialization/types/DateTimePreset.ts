/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { DateTimePresetLastNDays } from "./DateTimePresetLastNDays";
import { DateTimePresetNextNDays } from "./DateTimePresetNextNDays";

export const DateTimePreset: core.serialization.Schema<serializers.DateTimePreset.Raw, DevRev.DateTimePreset> =
    core.serialization
        .union(core.serialization.discriminant("presetType", "preset_type"), {
            last_n_days: DateTimePresetLastNDays,
            next_n_days: DateTimePresetNextNDays,
        })
        .transform<DevRev.DateTimePreset>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace DateTimePreset {
    type Raw = DateTimePreset.LastNDays | DateTimePreset.NextNDays;

    interface LastNDays extends DateTimePresetLastNDays.Raw {
        preset_type: "last_n_days";
    }

    interface NextNDays extends DateTimePresetNextNDays.Raw {
        preset_type: "next_n_days";
    }
}

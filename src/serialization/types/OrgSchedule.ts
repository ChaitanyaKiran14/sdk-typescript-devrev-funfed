/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { WeeklyOrgSchedule } from "./WeeklyOrgSchedule";
import { OrgScheduleFragmentOverview } from "./OrgScheduleFragmentOverview";
import { OrgScheduleStatus } from "./OrgScheduleStatus";
import { AtomBase } from "./AtomBase";

export const OrgSchedule: core.serialization.ObjectSchema<serializers.OrgSchedule.Raw, DevRev.OrgSchedule> =
    core.serialization
        .object({
            defaultWeeklyOrgSchedule: core.serialization.property(
                "default_weekly_org_schedule",
                WeeklyOrgSchedule.optional()
            ),
            minValidDays: core.serialization.property("min_valid_days", core.serialization.number().optional()),
            name: core.serialization.string().optional(),
            orgScheduleFragments: core.serialization.property(
                "org_schedule_fragments",
                core.serialization.list(OrgScheduleFragmentOverview).optional()
            ),
            status: OrgScheduleStatus,
            timezone: core.serialization.string().optional(),
            validUntil: core.serialization.property("valid_until", core.serialization.date().optional()),
            weeklyOrgSchedules: core.serialization.property(
                "weekly_org_schedules",
                core.serialization.list(WeeklyOrgSchedule).optional()
            ),
        })
        .extend(AtomBase);

export declare namespace OrgSchedule {
    interface Raw extends AtomBase.Raw {
        default_weekly_org_schedule?: WeeklyOrgSchedule.Raw | null;
        min_valid_days?: number | null;
        name?: string | null;
        org_schedule_fragments?: OrgScheduleFragmentOverview.Raw[] | null;
        status: OrgScheduleStatus.Raw;
        timezone?: string | null;
        valid_until?: string | null;
        weekly_org_schedules?: WeeklyOrgSchedule.Raw[] | null;
    }
}

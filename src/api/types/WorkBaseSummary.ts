/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface WorkBaseSummary extends DevRev.AtomBaseSummary {
    /** The users that own the work. */
    ownedBy: DevRev.UserSummary[];
    stage?: DevRev.LegacyStageSummary;
    /** Title of the work object. */
    title: string;
}

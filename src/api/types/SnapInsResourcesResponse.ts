/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface SnapInsResourcesResponse {
    /** The event sources for the snap-in. */
    eventSources?: Record<string, string>;
    /** The inputs for the snap-in. */
    inputs?: Record<string, unknown>;
    /** Map of keyring names and its data. */
    keyrings?: Record<string, DevRev.SnapInsResourcesResponseKeyringData>;
    snapInVersion: DevRev.SnapInVersionSummary;
}

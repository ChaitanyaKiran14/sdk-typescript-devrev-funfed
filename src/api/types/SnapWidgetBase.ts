/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface SnapWidgetBase extends DevRev.AtomBase {
    /** A human readable name for the snap widget. */
    name: string;
    namespace?: DevRev.SnapWidgetNamespace;
    status: DevRev.SnapWidgetStatus;
}

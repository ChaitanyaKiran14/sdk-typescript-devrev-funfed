/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface TrackEvent {
    clientContext?: DevRev.ClientContext;
    /** Unique ID for the event. */
    eventId?: string;
    /** The timestamp at which the event occurred. */
    eventTime?: Date;
    /** Name of the event. */
    name: string;
    /** Payload of the event */
    payload: Record<string, unknown>;
}

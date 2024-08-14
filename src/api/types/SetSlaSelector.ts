/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface SetSlaSelector {
    appliesTo: DevRev.SlaSelectorAppliesTo;
    /**
     * Custom fields with their fully qualified names and associated with
     * their exact allowed values. The SLA policy applies to records where
     * all named custom fields have exactly the specified values. If the
     * value is null, the field must have null value or not be present.
     */
    customFields?: Record<string, unknown>;
    /**
     * The SLA policy applies to the tickets or conversations of these
     * groups.
     */
    groups?: string[];
    issueSelector?: DevRev.SetIssueSelector;
    /**
     * The SLA policy applies to the tickets or conversations of these
     * owners.
     */
    owners?: string[];
    /** The SLA policy applies to the tickets of these parts. */
    parts?: string[];
    /** The SLA policy applies to conversations with these priorities. */
    priority?: DevRev.SlaSelectorPriority[];
    /** The SLA policy applies to tickets with these severities. */
    severity?: DevRev.SlaSelectorSeverity[];
    /** The SLA policy applies to conversations with these sources. */
    sourceChannel?: string[];
    /** The SLA policy applies to tickets with these subtypes. */
    subtype?: string[];
    /** The SLA policy applies to items with these tags. */
    tags?: string[];
    /** The SLA policy applies to tickets with these source channels. */
    ticketSourceChannel?: string[];
}

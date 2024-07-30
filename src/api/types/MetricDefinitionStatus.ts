/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The status of the metric. 'active' metrics can be used to create new
 * SLAs, while 'inactive' metrics can not be used in new SLAs. Metrics can
 * be updated between 'active' and 'inactive' states.
 */
export type MetricDefinitionStatus = "active" | "inactive";

export const MetricDefinitionStatus = {
    Active: "active",
    Inactive: "inactive",
} as const;

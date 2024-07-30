/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface MetricDataPoint {
    /** Key-value pairs for specifying additional attributes. */
    dimensions?: DevRev.MetricDataPointDimension[];
    /**
     * An ID that uniquely identifies the metric data point. This ID will
     * be used for deduplication. Clients can generate its own ID and send
     * it in the request. If not provided, DevRev will perform
     * content-based deduplication.
     */
    id?: string;
    /** Timestamp when metric value is captured. */
    timestamp: Date;
    /**
     * The value corresponding to the metric. For simply recording
     * occurrence of an event, this value should be 1.0.
     */
    value: number;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export interface Directory extends DevRev.AtomBase {
    body?: DevRev.ArtifactSummary;
    /** Description of the directory. */
    description?: string;
    /** Icon of the directory. */
    icon?: string;
    parent?: DevRev.DirectorySummary;
    /** Whether the directory is published. */
    published?: boolean;
    /** Rank of the directory. */
    rank?: string;
    /** Tags associated with the directory. */
    tags?: DevRev.TagWithValue[];
    thumbnail?: DevRev.ArtifactSummary;
    /** Title of the directory. */
    title?: string;
}

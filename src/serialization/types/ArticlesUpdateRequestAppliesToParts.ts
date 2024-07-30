/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";

export const ArticlesUpdateRequestAppliesToParts: core.serialization.ObjectSchema<
    serializers.ArticlesUpdateRequestAppliesToParts.Raw,
    DevRev.ArticlesUpdateRequestAppliesToParts
> = core.serialization.object({
    set: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace ArticlesUpdateRequestAppliesToParts {
    interface Raw {
        set?: string[] | null;
    }
}

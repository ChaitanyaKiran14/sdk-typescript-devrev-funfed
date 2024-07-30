/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";
import { GroupsUpdateRequestDynamicGroupInfo } from "../../../../types/GroupsUpdateRequestDynamicGroupInfo";

export const GroupsUpdateRequest: core.serialization.Schema<
    serializers.GroupsUpdateRequest.Raw,
    DevRev.GroupsUpdateRequest
> = core.serialization.object({
    description: core.serialization.string().optional(),
    dynamicGroupInfo: core.serialization.property("dynamic_group_info", GroupsUpdateRequestDynamicGroupInfo.optional()),
    id: core.serialization.string(),
    name: core.serialization.string().optional(),
    owner: core.serialization.string().optional(),
});

export declare namespace GroupsUpdateRequest {
    interface Raw {
        description?: string | null;
        dynamic_group_info?: GroupsUpdateRequestDynamicGroupInfo.Raw | null;
        id: string;
        name?: string | null;
        owner?: string | null;
    }
}

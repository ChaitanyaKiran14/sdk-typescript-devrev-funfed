/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";
import { GroupType } from "../../../../types/GroupType";
import { DynamicGroupInfo } from "../../../../types/DynamicGroupInfo";
import { GroupMemberType } from "../../../../types/GroupMemberType";

export const GroupsCreateRequest: core.serialization.Schema<
    serializers.GroupsCreateRequest.Raw,
    DevRev.GroupsCreateRequest
> = core.serialization.object({
    type: GroupType.optional(),
    description: core.serialization.string(),
    dynamicGroupInfo: core.serialization.property("dynamic_group_info", DynamicGroupInfo.optional()),
    memberType: core.serialization.property("member_type", GroupMemberType.optional()),
    name: core.serialization.string(),
    owner: core.serialization.string().optional(),
});

export declare namespace GroupsCreateRequest {
    interface Raw {
        type?: GroupType.Raw | null;
        description: string;
        dynamic_group_info?: DynamicGroupInfo.Raw | null;
        member_type?: GroupMemberType.Raw | null;
        name: string;
        owner?: string | null;
    }
}

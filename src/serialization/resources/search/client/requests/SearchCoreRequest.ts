/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as DevRev from "../../../../../api/index";
import * as core from "../../../../../core";
import { SearchNamespace } from "../../../../types/SearchNamespace";
import { SearchSortByParam } from "../../../../types/SearchSortByParam";
import { SearchSortOrderParam } from "../../../../types/SearchSortOrderParam";

export const SearchCoreRequest: core.serialization.Schema<serializers.SearchCoreRequest.Raw, DevRev.SearchCoreRequest> =
    core.serialization.object({
        cursor: core.serialization.string().optional(),
        limit: core.serialization.number().optional(),
        namespaces: core.serialization.list(SearchNamespace).optional(),
        query: core.serialization.string(),
        sortBy: core.serialization.property("sort_by", SearchSortByParam.optional()),
        sortOrder: core.serialization.property("sort_order", SearchSortOrderParam.optional()),
    });

export declare namespace SearchCoreRequest {
    interface Raw {
        cursor?: string | null;
        limit?: number | null;
        namespaces?: SearchNamespace.Raw[] | null;
        query: string;
        sort_by?: SearchSortByParam.Raw | null;
        sort_order?: SearchSortOrderParam.Raw | null;
    }
}

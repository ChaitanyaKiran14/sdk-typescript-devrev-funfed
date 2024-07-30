/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../../../../index";

/**
 * @example
 *     {
 *         query: "query"
 *     }
 */
export interface SearchCoreRequest {
    /**
     * The cursor from where to begin iteration. Start from beginning if
     * not provided.
     *
     */
    cursor?: string;
    /**
     * The maximum number of items to return in a page. The default is
     * '10'.
     *
     */
    limit?: number;
    /** The namespaces to search in. */
    namespaces?: DevRev.SearchNamespace[];
    /**
     * The query string. Search query language:
     * https://docs.devrev.ai/product/search#fields
     *
     */
    query: string;
    sortBy?: DevRev.SearchSortByParam;
    sortOrder?: DevRev.SearchSortOrderParam;
}

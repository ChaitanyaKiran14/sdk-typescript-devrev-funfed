/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The direction of link, which can either be outbound such that the
 * object is the source of the link, otherwise inbound where the object is
 * the target of the link.
 */
export type LinksDirection = "is_source" | "is_target";

export const LinksDirection = {
    IsSource: "is_source",
    IsTarget: "is_target",
} as const;

/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Status of the question answer.
 */
export type QuestionAnswerStatus = "archived" | "discarded" | "draft" | "published" | "review_needed";

export const QuestionAnswerStatus = {
    Archived: "archived",
    Discarded: "discarded",
    Draft: "draft",
    Published: "published",
    ReviewNeeded: "review_needed",
} as const;

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../index";

export type Work = DevRev.Work.Issue | DevRev.Work.Opportunity | DevRev.Work.Task | DevRev.Work.Ticket;

export declare namespace Work {
    interface Issue extends DevRev.Issue {
        type: "issue";
    }

    interface Opportunity extends DevRev.WorkBase {
        type: "opportunity";
    }

    interface Task extends DevRev.WorkBase {
        type: "task";
    }

    interface Ticket extends DevRev.Ticket {
        type: "ticket";
    }
}

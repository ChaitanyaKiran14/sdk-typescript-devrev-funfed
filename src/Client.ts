/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Accounts } from "./api/resources/accounts/client/Client";
import { Articles } from "./api/resources/articles/client/Client";
import { Artifacts } from "./api/resources/artifacts/client/Client";
import { AuthTokens } from "./api/resources/authTokens/client/Client";
import { CodeChanges } from "./api/resources/codeChanges/client/Client";
import { Conversations } from "./api/resources/conversations/client/Client";
import { AuthConnection } from "./api/resources/authConnection/client/Client";
import { DevUsers } from "./api/resources/devUsers/client/Client";
import { Engagements } from "./api/resources/engagements/client/Client";
import { EventSource } from "./api/resources/eventSource/client/Client";
import { Groups } from "./api/resources/groups/client/Client";
import { Operate } from "./api/resources/operate/client/Client";
import { Keyring } from "./api/resources/keyring/client/Client";
import { Links } from "./api/resources/links/client/Client";
import { Slas } from "./api/resources/slas/client/Client";
import { ProductUsage } from "./api/resources/productUsage/client/Client";
import { Notifications } from "./api/resources/notifications/client/Client";
import { Schedules } from "./api/resources/schedules/client/Client";
import { Parts } from "./api/resources/parts/client/Client";
import { QuestionAnswers } from "./api/resources/questionAnswers/client/Client";
import { RevOrgs } from "./api/resources/revOrgs/client/Client";
import { RevUsers } from "./api/resources/revUsers/client/Client";
import { Customization } from "./api/resources/customization/client/Client";
import { Search } from "./api/resources/search/client/Client";
import { ServiceAccounts } from "./api/resources/serviceAccounts/client/Client";
import { SnapIns } from "./api/resources/snapIns/client/Client";
import { SnapWidgets } from "./api/resources/snapWidgets/client/Client";
import { Surveys } from "./api/resources/surveys/client/Client";
import { SysUsers } from "./api/resources/sysUsers/client/Client";
import { Tags } from "./api/resources/tags/client/Client";
import { TimelineEntries } from "./api/resources/timelineEntries/client/Client";
import { Webhooks } from "./api/resources/webhooks/client/Client";
import { Works } from "./api/resources/works/client/Client";

export declare namespace DevRevClient {
    interface Options {
        environment?: core.Supplier<environments.DevRevEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        /** Override the X-DevRev-Version header */
        xDevRevVersion?: "2024-01-24";
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the X-DevRev-Version header */
        xDevRevVersion?: "2024-01-24";
    }
}

export class DevRevClient {
    constructor(protected readonly _options: DevRevClient.Options = {}) {}

    protected _accounts: Accounts | undefined;

    public get accounts(): Accounts {
        return (this._accounts ??= new Accounts(this._options));
    }

    protected _articles: Articles | undefined;

    public get articles(): Articles {
        return (this._articles ??= new Articles(this._options));
    }

    protected _artifacts: Artifacts | undefined;

    public get artifacts(): Artifacts {
        return (this._artifacts ??= new Artifacts(this._options));
    }

    protected _authTokens: AuthTokens | undefined;

    public get authTokens(): AuthTokens {
        return (this._authTokens ??= new AuthTokens(this._options));
    }

    protected _codeChanges: CodeChanges | undefined;

    public get codeChanges(): CodeChanges {
        return (this._codeChanges ??= new CodeChanges(this._options));
    }

    protected _conversations: Conversations | undefined;

    public get conversations(): Conversations {
        return (this._conversations ??= new Conversations(this._options));
    }

    protected _authConnection: AuthConnection | undefined;

    public get authConnection(): AuthConnection {
        return (this._authConnection ??= new AuthConnection(this._options));
    }

    protected _devUsers: DevUsers | undefined;

    public get devUsers(): DevUsers {
        return (this._devUsers ??= new DevUsers(this._options));
    }

    protected _engagements: Engagements | undefined;

    public get engagements(): Engagements {
        return (this._engagements ??= new Engagements(this._options));
    }

    protected _eventSource: EventSource | undefined;

    public get eventSource(): EventSource {
        return (this._eventSource ??= new EventSource(this._options));
    }

    protected _groups: Groups | undefined;

    public get groups(): Groups {
        return (this._groups ??= new Groups(this._options));
    }

    protected _operate: Operate | undefined;

    public get operate(): Operate {
        return (this._operate ??= new Operate(this._options));
    }

    protected _keyring: Keyring | undefined;

    public get keyring(): Keyring {
        return (this._keyring ??= new Keyring(this._options));
    }

    protected _links: Links | undefined;

    public get links(): Links {
        return (this._links ??= new Links(this._options));
    }

    protected _slas: Slas | undefined;

    public get slas(): Slas {
        return (this._slas ??= new Slas(this._options));
    }

    protected _productUsage: ProductUsage | undefined;

    public get productUsage(): ProductUsage {
        return (this._productUsage ??= new ProductUsage(this._options));
    }

    protected _notifications: Notifications | undefined;

    public get notifications(): Notifications {
        return (this._notifications ??= new Notifications(this._options));
    }

    protected _schedules: Schedules | undefined;

    public get schedules(): Schedules {
        return (this._schedules ??= new Schedules(this._options));
    }

    protected _parts: Parts | undefined;

    public get parts(): Parts {
        return (this._parts ??= new Parts(this._options));
    }

    protected _questionAnswers: QuestionAnswers | undefined;

    public get questionAnswers(): QuestionAnswers {
        return (this._questionAnswers ??= new QuestionAnswers(this._options));
    }

    protected _revOrgs: RevOrgs | undefined;

    public get revOrgs(): RevOrgs {
        return (this._revOrgs ??= new RevOrgs(this._options));
    }

    protected _revUsers: RevUsers | undefined;

    public get revUsers(): RevUsers {
        return (this._revUsers ??= new RevUsers(this._options));
    }

    protected _customization: Customization | undefined;

    public get customization(): Customization {
        return (this._customization ??= new Customization(this._options));
    }

    protected _search: Search | undefined;

    public get search(): Search {
        return (this._search ??= new Search(this._options));
    }

    protected _serviceAccounts: ServiceAccounts | undefined;

    public get serviceAccounts(): ServiceAccounts {
        return (this._serviceAccounts ??= new ServiceAccounts(this._options));
    }

    protected _snapIns: SnapIns | undefined;

    public get snapIns(): SnapIns {
        return (this._snapIns ??= new SnapIns(this._options));
    }

    protected _snapWidgets: SnapWidgets | undefined;

    public get snapWidgets(): SnapWidgets {
        return (this._snapWidgets ??= new SnapWidgets(this._options));
    }

    protected _surveys: Surveys | undefined;

    public get surveys(): Surveys {
        return (this._surveys ??= new Surveys(this._options));
    }

    protected _sysUsers: SysUsers | undefined;

    public get sysUsers(): SysUsers {
        return (this._sysUsers ??= new SysUsers(this._options));
    }

    protected _tags: Tags | undefined;

    public get tags(): Tags {
        return (this._tags ??= new Tags(this._options));
    }

    protected _timelineEntries: TimelineEntries | undefined;

    public get timelineEntries(): TimelineEntries {
        return (this._timelineEntries ??= new TimelineEntries(this._options));
    }

    protected _webhooks: Webhooks | undefined;

    public get webhooks(): Webhooks {
        return (this._webhooks ??= new Webhooks(this._options));
    }

    protected _works: Works | undefined;

    public get works(): Works {
        return (this._works ??= new Works(this._options));
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { ClientContextBrowser } from "./ClientContextBrowser";
import { ClientContextCpu } from "./ClientContextCpu";
import { ClientContextDevice } from "./ClientContextDevice";
import { ClientContextEngine } from "./ClientContextEngine";
import { ClientContextOs } from "./ClientContextOs";
import { ClientContextPage } from "./ClientContextPage";

export const ClientContext: core.serialization.ObjectSchema<serializers.ClientContext.Raw, DevRev.ClientContext> =
    core.serialization.object({
        browser: ClientContextBrowser.optional(),
        cpu: ClientContextCpu.optional(),
        device: ClientContextDevice.optional(),
        engine: ClientContextEngine.optional(),
        ip: core.serialization.string().optional(),
        locale: core.serialization.string().optional(),
        os: ClientContextOs.optional(),
        page: ClientContextPage.optional(),
        timezone: core.serialization.string().optional(),
        userAgent: core.serialization.property("user_agent", core.serialization.string().optional()),
    });

export declare namespace ClientContext {
    interface Raw {
        browser?: ClientContextBrowser.Raw | null;
        cpu?: ClientContextCpu.Raw | null;
        device?: ClientContextDevice.Raw | null;
        engine?: ClientContextEngine.Raw | null;
        ip?: string | null;
        locale?: string | null;
        os?: ClientContextOs.Raw | null;
        page?: ClientContextPage.Raw | null;
        timezone?: string | null;
        user_agent?: string | null;
    }
}

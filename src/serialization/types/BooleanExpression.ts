/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as DevRev from "../../api/index";
import * as core from "../../core";
import { BooleanExpressionPrimitiveExpression } from "./BooleanExpressionPrimitiveExpression";

export const BooleanExpression: core.serialization.Schema<serializers.BooleanExpression.Raw, DevRev.BooleanExpression> =
    core.serialization
        .union("type", {
            and: core.serialization.lazyObject(() => serializers.BooleanExpressionAndExpression),
            not: core.serialization.lazyObject(() => serializers.BooleanExpressionNotExpression),
            or: core.serialization.lazyObject(() => serializers.BooleanExpressionOrExpression),
            primitive: core.serialization.object({
                value: BooleanExpressionPrimitiveExpression,
            }),
        })
        .transform<DevRev.BooleanExpression>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace BooleanExpression {
    type Raw = BooleanExpression.And | BooleanExpression.Not | BooleanExpression.Or | BooleanExpression.Primitive;

    interface And extends serializers.BooleanExpressionAndExpression.Raw {
        type: "and";
    }

    interface Not extends serializers.BooleanExpressionNotExpression.Raw {
        type: "not";
    }

    interface Or extends serializers.BooleanExpressionOrExpression.Raw {
        type: "or";
    }

    interface Primitive {
        type: "primitive";
        value: BooleanExpressionPrimitiveExpression.Raw;
    }
}

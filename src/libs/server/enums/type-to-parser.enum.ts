import {Types} from "./types.enum.js";
import {MediumParser} from "../parsers/medium.parser.js";
import {DevtoParser} from "../parsers/dev-to.parser.js";

export const TypeToParser = {
    [Types.Medium]: MediumParser,
    [Types.Devto]: DevtoParser,
} as const;

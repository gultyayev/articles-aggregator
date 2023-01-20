import { Types } from "./types.enum.js";
import { MediumParser } from "../parsers/medium-parser.js";
import { DevtoParser } from "../parsers/devto-parser.js";

export const TypeToParser = {
  [Types.Medium]: MediumParser,
  [Types.Devto]: DevtoParser,
};

import type { MiddlewareHandler } from "hono";
import type { CompressOptions } from "./types";
export declare const ACCEPTED_ENCODINGS: readonly ["br", "gzip", "deflate"];
export declare const compress: ({ type, options, streamOptions, threshold }?: CompressOptions) => MiddlewareHandler;

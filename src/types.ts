import type { Context } from 'hono'
import { ACCEPTED_ENCODINGS, NODE_ENCODINGS } from './constants'
import type { BrotliOptions, ZlibOptions } from 'node:zlib'

export type CompressionEncoding = (typeof ACCEPTED_ENCODINGS)[number]

export type NodeCompressionEncoding = (typeof NODE_ENCODINGS)[number]
export type NodeCompressionOptions = BrotliOptions | ZlibOptions

export interface CompressOptions {
  /**
   * Algorithm to use to compress the response content.
   *
   * @default `undefined`
   */
  encoding?: CompressionEncoding

  /**
   * List of algorithms allowed to be used to compress the response content.
   *
   * @default {ACCEPTED_ENCODINGS}
   */
  encodings?: CompressionEncoding[]

  /**
   * The minimum size in bytes for a response content to be compressed.
   *
   * @default 1024
   */
  threshold?: number

  /**
   * Zstandard algorithm compression level
   *
   * @default 2
   */
  zstdLevel?: number

  /**
   * Brotli algorithm compression level
   *
   * @default 11
   */
  brotliLevel?: number

  /**
   * Zlib algorithms compression level
   *
   * @default 6
   */
  zlibLevel?: number

  /**
   * Options passed to the node zlib compression engine.
   *
   * @param {Object}
   */
  options?: NodeCompressionOptions

  /**
   * Custom filter function.
   *
   * @default undefined
   */
  filter?: (c: Context) => boolean
}

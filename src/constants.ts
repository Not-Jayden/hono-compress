// https://developers.cloudflare.com/workers/runtime-apis/web-standards/#navigatoruseragent
export const CLOUDFLARE_WORKERS_NAVIGATOR = 'Cloudflare-Workers'

export const ACCEPTED_ENCODINGS = ['zstd', 'br', 'gzip', 'deflate'] as const
export const NODE_ENCODINGS = ['br', 'gzip', 'deflate'] as const

export const CACHECONTROL_NOTRANSFORM_REGEXP = /(?:^|,)\s*?no-transform\s*?(?:,|$)/i

export const THRESHOLD_SIZE = 1024 as const
export const ZSTD_LEVEL = 2 as const
export const BROTLI_LEVEL = 11 as const
export const ZLIB_LEVEL = 6 as const

/** @type {import('next').NextConfig} */
const nextConfig = {}

// eslint-disable-next-line
const withNextIntl = require('next-intl/plugin')('./src/i18n.ts')

module.exports = withNextIntl(nextConfig)

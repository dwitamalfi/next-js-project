/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        DIMULAI_API_URL : process.env.DIMULAI_API_URL,
        DIMULAI_CMS_URL: process.env.DIMULAI_CMS_URL,
        DIMULAI_CMS_ASSET_URL: process.env.DIMULAI_CMS_ASSET_URL
      }
}

module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"www.absoluteanime.com"
            },
            {
                protocol:"https",
                hostname:"th.bing.com"
            }
        ]
    }
}

module.exports = nextConfig

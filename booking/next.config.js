/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: [
            'res.cloudinary.com',
            'avatars.githubusercontent.com',
            'lh3.googleusercontent.com',
            "https://lh3.googleusercontent.com/a/AGNmyxY_J9i2DOctBPLGha298u2QmfS32eRWmWQNSpNAi4k=s96-c"
        ]
    }
}

module.exports = nextConfig
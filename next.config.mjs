import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env file
dotenv.config({ path: `${__dirname}/.env` });

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "we-work-remotely.imgix.net" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ], // Add the allowed domain
  },
};

export default nextConfig;
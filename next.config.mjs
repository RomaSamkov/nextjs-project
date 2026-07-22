/** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
// };
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Генерує статичні файли в папку out
  images: {
    unoptimized: true, // Потрібно для роботи <Image /> на статичному хостингу
  },
  basePath: "/nextjs-project",
};

export default nextConfig;

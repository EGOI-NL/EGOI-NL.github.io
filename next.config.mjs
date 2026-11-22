import nextMDX from "@next/mdx"
import rehypeSlug from "rehype-slug"

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeSlug],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
    format: 'mdx',
  },
})

const nextConfig = {
  // Append the default value with md extensions
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "numpy.org" },
      { protocol: "https", hostname: "dask.org" },
      { protocol: "https", hostname: "chainer.org" },
    ],
  },
  output: 'export'
}

export default withMDX(nextConfig)

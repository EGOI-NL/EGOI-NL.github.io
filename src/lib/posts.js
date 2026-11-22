const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const glob = require('glob')

const postsDirectory = path.join(process.cwd(), 'src/posts')

function getSortedPostsMetadata() {
  return glob
    .sync(`${postsDirectory}/**/*.md`)
    .map((filePath) => {
      const postId = path.basename(path.dirname(filePath))
      const postPath = `${postId}/${path.basename(filePath)}`
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContents)
      return {
        ...data,
        id: postId,
        href: `/blog/${postPath}`,
        file: postPath,
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

function getAllPostsIds() {
  return getSortedPostsMetadata().map((post) => ({
    params: { id: post.id },
  }))
}

function getPostData(id) {
  return getSortedPostsMetadata().find((post) => post.id === id)
}

module.exports = {
  getSortedPostsMetadata,
  getAllPostsIds,
  getPostData,
}

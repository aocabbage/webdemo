"use server"

const blogpath = "app/projects/blog/blog.json"
const fs = require('fs');

export async function updateBlogData(data) {
  let output = JSON.stringify({body: data });
  fs.writeFileSync(blogpath, output);
}
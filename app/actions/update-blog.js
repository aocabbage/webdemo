'use server';

import fs from 'fs';

export async function updateBlog(data) {
  fs.writeFileSync('app/blog/blog.txt', data);
  return { message: 'File updated successfully' };
}
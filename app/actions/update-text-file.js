'use server';

import fs from 'fs';

export async function updateTextFile(data, filePath) {
  fs.writeFileSync(filePath, data);
  return { message: 'File updated successfully' };
}
import mime from 'mime-types';
import * as fs from "fs";

export const getBase64Image = (path: string): string => {
  const mimeType = mime.lookup(path);
  if (!mimeType || !mimeType.includes('image/')) {
    return '';
  }
  const file = fs.readFileSync(path);
  return `data:${mimeType};base64,${Buffer.from(file.toJSON().data).toString('base64')}`;
};
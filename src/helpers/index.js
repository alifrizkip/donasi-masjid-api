import fs from 'fs';

export const deleteImage = (path) => {
  if (fs.existsSync(path)) {
    fs.unlink(path, (err) => {
      if (err) return console.error('Error delete uploaded image', err);
      return console.info(`Image ${path} deleted`);
    });
  }
};

export default { deleteImage };

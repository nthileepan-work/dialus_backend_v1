const multer = require('multer');
const path = require('path');

// Storage settings for multer
const storage = multer.diskStorage({
  destination: './images/',  // Location for uploaded images
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

// Multer upload setup with image validation
const upload = multer({
  storage,
  limits: { fileSize: 50000000 }, // Limit file size to 1MB
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only images are allowed (jpeg, jpg, png)'));
    }
  },
}).single('image');

module.exports = upload;

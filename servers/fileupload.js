// server/controllers/fileUpload.js

const multer = require('multer');

// Configure multer for file uploads
const storage = multer.diskStorage({
  // Specify the destination folder for uploaded files
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Create a 'uploads' folder in your project
  },
  // Rename the uploaded file (if needed)
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// Handle file upload
exports.uploadFile = upload.single('file'); // 'file' should match the field name in your form

// Process the uploaded file
exports.processFile = (req, res) => {
  const file = req.file; // Contains information about the uploaded file
  // Implement file processing logic here (e.g., saving file details to a database)
};

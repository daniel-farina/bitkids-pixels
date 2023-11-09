const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const app = express();
const upload = multer({ storage: multer.memoryStorage() });

// Serve your static files (HTML, CSS, JS, etc.)
app.use(express.static('public'));

// Frontend endpoint
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// Image processing endpoint
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const processedImage = await sharp(req.file.buffer)
      .resize({
        width: 76,
        height: 76,
        kernel: sharp.kernel.nearest,
        fit: 'fill'
      })
      .toBuffer();

    res.type('image/png').send(processedImage);
  } catch (error) {
    console.error('Error processing image:', error);
    res.status(500).send('An error occurred while processing the image.');
  }
});

// Specify the port to listen on
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server listening on port ${port}!`));

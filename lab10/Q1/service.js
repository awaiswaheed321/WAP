import path from "path";
import fs from "fs";

// Middleware to print API info
export const printApiInfo = (req, _, next) => {
  const {
    originalUrl: url,
    method,
    headers: { host },
  } = req;
  console.log(`[${new Date().toISOString()}] ${method} ${host}${url} called.`);
  next();
};

// Helper to send files with error handling
const sendFile = (res, filePath, fileType) => {
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(JSON.stringify(err));
      return res.status(500).json({ 
        code: 500,
        error: `Error in accessing ${fileType} data.`,
      });
    }

    res.sendFile(filePath, (err) => {
      if (err) {
        console.error(JSON.stringify(err));
        return res.status(500).json({
          code: 500,
          error: `Error in sending ${fileType} file.`,
        });
      }
    });
  });
};

// Route to serve the image
export const getImage = (_, res) => {
  const imagePath = path.resolve("./data/image.jpg");
  sendFile(res, imagePath, "Image");
};

// Route to serve the PDF
export const getPdf = (_, res) => {
  const pdfPath = path.resolve("./data/file.pdf");
  sendFile(res, pdfPath, "PDF");
};

// Route to serve the about text
export const getAbout = (_, res) => {
  const aboutFilePath = path.resolve("./data/about.txt");
  sendFile(res, aboutFilePath, "TXT");
};

// Route to handle home endpoint
export const getHome = (_, res) => {
  res.status(200).type("text/plain").send("Welcome to my website");
};

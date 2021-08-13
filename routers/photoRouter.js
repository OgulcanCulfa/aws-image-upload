const { getFile, uploadFile } = require("../fileUpload");

const router = require("express").Router();

router.get("/getphoto/:key", (req, res) => {
  try {
    const key = req.params.key;
    const readStream = getFile(key);
    readStream.pipe(res);
  } catch (err) {
    res.status(500).send("image couldn't have been fetched. Please try again.");
  }
});

router.post("/uploadphoto", async (req, res) => {
    try {
        await uploadFile("./photos/1003880.png", "example"); //hardcoded path and filename. File must be fetched from frontend.
        res.send("The image have been successfully uploaded.");
    } catch (err) {
        res.status(500).send("The image couldn't have been uploaded. Please try again.")
    }
});

module.exports = router;

require("dotenv").config();
const fs = require("fs");
const S3 = require("aws-sdk/clients/s3");

const s3 = new S3({
  region: process.env.REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

module.exports = {
  uploadFile: function (path, fileName) {
    const file = fs.createReadStream(path);

    const uploadParams = {
      Bucket: process.env.BUCKET_NAME,
      Key: fileName,
      Body: file,
    };

    return s3.upload(uploadParams).promise();
  },
  getFile: function (key) {
    const getParams = {
      Key: key,
      Bucket: process.env.BUCKET_NAME,
    };
    return s3.getObject(getParams).createReadStream();
  },
};

var AWS = require("aws-sdk");
var s3 = new AWS.S3();
var ics = require("ics");

const icsGenerator = (prop) =>
  new Promise((resolve, reject) => {
    ics.createEvent(prop, (error, value) => {
      if (error) reject(error);
      else resolve(value);
    });
  });

const upload = async (value, text, project) => {
  var road = project + "/" + text + ".ics";
  var params = {
    Bucket: "testicsbucket",
    Key: road,
    Body: value,
    ACL: "public-read",
    ContentEncoding: "base64",
    ContentType: "text/calendar",
  };

  return await new Promise((resolve, reject) => {
    s3.putObject(params, (err, results) => {
      if (err) reject(err);
      else
        resolve({
          url: "https://testicsbucket.s3.eu-central-1.amazonaws.com/" + road,
          results,
        });
    });
  });
};

const main = async (event) => {
  try {
    var icsFile = await icsGenerator(event.body);
  } catch (error) {
    return { error: error.message };
  }
  try {
    var responce = await upload(icsFile, event.text, event.projectId);
  } catch (error) {
    return { error: error.message };
  }

  return responce;
};

exports.handler = main;

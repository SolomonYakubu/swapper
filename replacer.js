const replace = require("replace-in-file");
const options = {
  //you may need to modify the file address to suite your project
  files: "./out/_next/static/css/*.css",
  from: ["/fonts/bahnshrift.ttf", "/fonts/RedSeven.otf"],
  to: ["../../../fonts/bahnshrift.ttf", "../../../fonts/RedSeven.otf"],
};
const options2 = {
  //you may need to modify the file address to suite your project
  files: "./out/*",
  from: ["../public/images/background.png"],
  to: ["./images/background.png"],
};
(async function () {
  try {
    const results = await replace(options);
    const results2 = await replace(options2);

    console.log("Replacement results:", results, results2);
  } catch (error) {
    console.error("Error occurred:", error);
  }
})();

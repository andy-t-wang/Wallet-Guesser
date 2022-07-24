const withImages = require("next-images");
const path = require("path");

module.exports = withImages({
  env: {
    alchemykey: "hYjwmxiSMYUOBBydUrde2nEO7BlPL2eP",
  },
  images: {
    disableStaticImages: true,
  },
});

module.exports = {
  // HTTP PORT
  PORT: process.env.PORT || 3000 ,
  // MongoDB URL
  // MONGOLAB_URI: process.env.MONGOLAB_URI || "mongodb://10.142.0.15:27017/internAt",
  MONGOLAB_URI: process.env.MONGOLAB_URI,
  // JWT Key
  JWT_KEY: "HelloInternAtSecret"
};

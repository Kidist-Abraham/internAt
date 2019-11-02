module.exports = {
  // HTTP PORT
  PORT: process.env.PORT || 3000 ,
  // MongoDB URL
  MONGODB_URL: process.env.MONGOLAB_URI || "mongodb://localhost:27017/internAt",
  // JWT Key
  JWT_KEY: "HelloInternAtSecret"
};

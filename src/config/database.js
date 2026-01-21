const mongoose = require("mongoose");
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://kshitijsd7_db_user:80rzmtC7083cCPN4@namastecluster.knnjvv4.mongodb.net/devTinder"
  );
};
module.exports = { connectDB };

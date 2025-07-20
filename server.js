const dotenv = require('dotenv');
dotenv.config({ path: "./config/config.env" });
const app = require("./app");
const connectDatabase = require("./config/database");

connectDatabase();


const PORT =  process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("server is running")
});

import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import cors from "cors";
import users from "../src/api/users.route";

const morgan = require("morgan"); // import morgan from "morgan";

const app = express();
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

// adding Helmet to enhance API's security
app.use(helmet());
app.use(cors());
app.use(express.json());
// app.use(require("./routes/record"));
// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
// adding morgan to log HTTP requests
app.use(morgan("combined"));

// get driver connection
const dbo = require("./configs/db/conn");

// register api's
app.use("/", require("./api/routes/hello"));
app.use("/api/v1/user", users);

app.listen(port, () => {
	// perform a database connection when server starts
	dbo.connectToServer((err: Error) => {
		if (err) console.error(err);
	});
	console.log(`Server is running on port: ${port}`);
});

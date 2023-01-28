import { config } from "../../configs/const";
import { Request, Response } from "express";

const dbo = require("../../configs/db/conn");

// This section will help you get a list of all the profile details.
export const profileDetails = async (req: Request, res: Response) => {
	const db_connect = dbo.getDb(config.dbPortfolioDB);

	await db_connect
		.collection(config.collectionProfile)
		.find({})
		.toArray(function (err: Error, result: Response) {
			if (err) throw err;
			res.json(result);
		});
	console.log("zzzzzzzczz", res);
	res.send(res);
};

// This section will help you update like Functionality.
export const featureLikeFunctionality = (req: Request, res: Response) => {
	const db_connect = dbo.getDb(config.dbPortfolioDB);
	db_connect
		.collection(config.collectionLikeFeature)
		.find({})
		.toArray(function (err: Error, result: Response) {
			if (err) throw err;
			res.json(result);
		});
};

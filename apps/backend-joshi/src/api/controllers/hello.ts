import { Request, Response } from "express";
import logger from "../../helpers/logger";

export const hello = (req: Request, res: Response) => {
	logger.info("Hello World! first info log msg");

	res.send("Hello Joshi Ji!!!");
};

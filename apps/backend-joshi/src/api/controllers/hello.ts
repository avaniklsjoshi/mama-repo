import logger from "../../helpers/logger";

export const hello = (req: any, res: any) => {
	logger.info("Hello World! first info log msg");

	res.send("Hello Joshi Ji!!!");
};

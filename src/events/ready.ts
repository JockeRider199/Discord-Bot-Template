import { Bot } from "../models/bot";
import { Event } from "../models/event";

export const readyEvent: Event = {
	async exec(client: Bot) {
		console.log(`Logged in as ${client.user?.tag}!`);
		if (process.env.PRODUCTION == "TRUE") {
			console.log("Prod mode");
		}
	},

	settings: {
		enabled: true,
	},
};

export default readyEvent;

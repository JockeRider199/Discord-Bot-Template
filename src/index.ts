import { config as envConfig } from "dotenv";

import { Bot } from "./models/bot";

envConfig();
const client = new Bot();

async function main(): Promise<void> {
	await client.loadEvents();
	await client.loadSlashCommands();
	//await client.loadContextMenus();

	if (process.env.CACHE === "clear") {
		console.log("Resetting cache");
		await client.unSyncInteractions();
	}

	if (process.env.PRODUCTION == "TRUE") {
		await client.syncGlobalInteractions({
			slashCommands: true,
			contextMenus: true,
		});

		await client.login(process.env.PROD_CLIENT_TOKEN);
	} else {
		await client.syncInteractionsForGuild(client.getConfig().guildId, {
			slashCommands: true,
			contextMenus: false,
		});

		await client.login(process.env.CLIENT_TOKEN);
	}
}

main();

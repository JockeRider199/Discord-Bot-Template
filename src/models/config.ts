import { GatewayIntentBits } from "discord.js";

interface Config {
	intents: GatewayIntentBits[];
	guildId: string;
}

export default Config;

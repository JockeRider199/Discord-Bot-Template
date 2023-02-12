import { SlashCommandBuilder } from "discord.js";
import { SlashCommand } from "../../models/slash-command";

const command: SlashCommand = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("Replies with pong!"),

	async exec(interaction) {
		await interaction.reply("Pong!");
	},

	settings: {
		enabled: true,
	},
};

export default command;

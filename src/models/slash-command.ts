import { ButtonInteraction, ChatInputCommandInteraction } from "discord.js";
import { Bot } from "./bot";

export interface SlashCommand {
	data: any;

	exec(interaction: ChatInputCommandInteraction): void;

	execButtons?(
		interaction: ButtonInteraction,
		buttonId: string,
		client: Bot
	): void;

	settings: {
		enabled: boolean;
	};
}

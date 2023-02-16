import { ButtonInteraction, ChatInputCommandInteraction } from 'discord.js';
import { Bot } from './bot';

export interface SlashCommand {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

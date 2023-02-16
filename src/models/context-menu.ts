import { ButtonInteraction, ContextMenuCommandInteraction } from 'discord.js';

export interface ContextMenu {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: any;

	exec(interaction: ContextMenuCommandInteraction): void;

	execButtons?(interaction: ButtonInteraction, buttonId: string): void;

	settings: {
		enabled: boolean;
	};
}

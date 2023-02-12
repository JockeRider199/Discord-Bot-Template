import { Bot } from "./bot";

export interface Event {
	exec(client: Bot, ...args: any[]): void;

	settings: {
		enabled: boolean;
	};
}

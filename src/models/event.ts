import { Bot } from './bot';

export interface Event {
	exec(client: Bot, ...args: unknown[]): void;

	settings: {
		enabled: boolean;
	};
}

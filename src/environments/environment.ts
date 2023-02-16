import { GatewayIntentBits } from 'discord.js';
import Config from '../models/config';

const config: Config = {
	intents: [GatewayIntentBits.GuildMembers, GatewayIntentBits.Guilds],
	guildId: '704412119847796856',
};

export default config;

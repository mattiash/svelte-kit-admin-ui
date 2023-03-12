import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	server: {
		proxy: {
			'^/api/.*': {
				target: 'https://swapi.dev/',
				configure: (proxy, options) => {
					proxy.on('proxyReq', (req, res) => {
						console.log('request', req.path);
					});
				}
			}
		}
	}
};

export default config;

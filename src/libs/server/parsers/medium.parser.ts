import { format } from 'date-fns';
import { parse } from 'node-html-parser';

export class MediumParser {
	static getPosts(html: string, username: string) {
		const root = parse(html);
		const scripts = root.querySelectorAll('script');

		const preloaded = scripts.find((script) =>
			script.innerText.includes('window.__APOLLO_STATE__')
		);
		const preloadedData = JSON.parse(
			preloaded!.innerText.replace('window.__APOLLO_STATE__ = ', '')
		);

		return (
			Object.entries(preloadedData)
				.filter(([key]) => key.startsWith('Post'))
				.slice(0, 3)
				// Results are in a form of ["Post:...", { ... post data }]
				.map(([_, post]: [any, any]) => {
					return {
						title: post.title,
						description: '',
						date: format(new Date(post.firstPublishedAt), 'MMM d, yyyy'),
						link: post.mediumUrl
					};
				})
		);
	}
}

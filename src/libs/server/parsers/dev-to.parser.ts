import { format } from 'date-fns';
import { parse } from 'node-html-parser';

export class DevtoParser {
	static getPosts(html: string) {
		const root = parse(html);
		const articles = root.querySelectorAll('.crayons-story').slice(0, 3);

		return articles.map((article) => {
			const linkEl = article.querySelector('h2 a')!;

			const title = linkEl.text.trim();
			const link = 'https://dev.to' + linkEl.getAttribute('href');
			const date = format(
				new Date(article.querySelector('time')!.getAttribute('datetime')!),
				'MMM d, yyyy'
			);

			return { title, description: '', date, link };
		});
	}
}

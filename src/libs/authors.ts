import type {Author} from './models/author.model';

export const authors: Readonly<Author[]> = [
	{
		username: 'sergeygultyayev',
		fullName: 'Serhii Hultiaiev',
		type: 'medium'
	},
	{
		username: 'nazarii_romankiv',
		fullName: 'Nazarii Romankiv',
		type: 'medium'
	},
	{ username: 'stremann', fullName: 'Roman Stremedlovskyi', type: 'medium' },
	{ username: 'gin_mitch', fullName: 'Michael Mullins', type: 'medium' },
	{ username: 'ashiqsultan', fullName: 'Ashiq Sultan', type: 'dev.to' },
	{ username: 'krushenitskii', fullName: 'Vladislav Krushenitskii', type: 'medium' },
	{ username: 'montanaqw5809', fullName: 'Viktor Soroka', type: 'medium' },
	{ username: 'oh_sociopath', fullName: 'Gevorg Martirosyan', type: 'medium' },
	{ username: 'irbansin', fullName: 'Anirban Sinha', type: 'medium' },
	{ username: 'deasamniashvili_82561', fullName: 'Medea Samniashvili', type: 'medium' },
	{ username: 'eugene_b', fullName: 'Ievgen Bessergenev', type: 'dev.to' },
	{ username: 'carboleda', fullName: 'Carlos Arboleda', type: 'medium' }
];

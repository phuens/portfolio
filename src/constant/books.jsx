import FAHRENHEIT from '../asset/images/books/fahrenheit_451.jpg';
import MEDITATIONS from '../asset/images/books/meditations.jpg';
import RICHDAD from '../asset/images/books/rich_dad_poor_dad.jpg';
import NUMBERSLIE from '../asset/images/books/numbers_dont_lie.jpg';
import CHATTER from '../asset/images/books/chatter.jpg';
import PSYCHOLOGYMONEY from '../asset/images/books/psychology_of_money.jpg';
import NAVAL from '../asset/images/books/almanack_of_naval.jpg';
import TWOWAYS from '../asset/images/books/book_of_two_ways.jpg';
import EDUCATED from '../asset/images/books/educated.jpeg';

export const CATEGORY_COLORS = {
    _a: '#CD533B',
    _b: '#99D17B',
    _c: '#4ECDC4',
    _d: '#6F73D2',
    _fe: '#3F826D',
    _g: '#2E294E',

    memoir: '#C19875',
    history: '#A0CED9',
    business: '#F6AE2D',
    life: '#CD533B',
    philosophy: '#99D17B',
    finance: '#4ECDC4',
    romance: '#6F73D2',
    nonfiction: '#3F826D',
    creativity: '#33658A',
    productivity: '#EFD9CE',
    technology: '#D44D5C',
    fiction: '#AC3499',
};
export const RATINGCOLORS = {
    5: '#62C370',
    4: '#FFCB47',
    3: '#009FB7',
    2: '#ED7B84',
    1: '#5F5F5F',
};

export const BOOKS = [
    {
        name: 'Educated',
        author: 'Tara Westover',
        rating: 5,
        genres: ['Memoir'],
        status: true,
        url: EDUCATED,
    },
    {
        name: 'Fahrenheit 451',
        author: 'Rauy Bradbury',
        rating: 5,
        genres: ['Fiction'],
        status: true,
        url: FAHRENHEIT,
    },

    {
        name: 'Meditations',
        author: 'Marcus Aurelius',
        rating: 5,
        genres: ['Philosophy', 'Life'],
        status: true,
        url: MEDITATIONS,
    },
    {
        name: 'Rich Dad Poor Dad',
        author: 'Robert Kiyosaki, Sharon Lechter',
        rating: 4,
        genres: ['Business', 'Finance'],
        status: true,
        url: RICHDAD,
    },
    {
        name: "Numbers Don't Lie",
        author: 'Vaclay Smil',
        rating: 5,
        genres: ['Life', 'History', 'Technology'],
        status: true,
        url: NUMBERSLIE,
    },
    {
        name: 'Chatter',
        author: 'Ethan Kross',
        rating: 4,
        genres: ['Philosophy', 'Business', 'Life'],
        status: true,
        url: CHATTER,
    },
    {
        name: 'The Psychology of Money',
        author: 'Morgan Housel',
        rating: 5,
        genres: ['Business', 'Finance'],
        status: true,
        url: PSYCHOLOGYMONEY,
    },
    {
        name: 'Almanack of Naval Ravikant1',
        author: 'Eric Jorgenson',
        rating: 4,
        genres: ['Philosophy', 'Life'],
        status: true,
        url: NAVAL,
    },
    {
        name: 'Book of Two Ways',
        author: 'Jodi Picoult',
        rating: 5,
        genres: ['Fiction', 'Romance'],
        status: true,
        url: TWOWAYS,
    },
];

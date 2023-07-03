import QUANTUM_NIGHT from '../asset/images/books/quantum_night.jpg';
import JOY_X from '../asset/images/books/joy_of_x.jpg';
import BARDO from '../asset/images/books/bardo.png';
import ASIAN_FUTURE from '../asset/images/books/future_is_asia.jpg';
import ON_EARTH from '../asset/images/books/on_earth.jpeg';
import FLASH_BOYS from '../asset/images/books/flash_boys.jpeg';
import SIDDHARTA from '../asset/images/books/siddhartha.jpeg';
import TED_CHIANG from '../asset/images/books/stories_of_your_life.jpg';
import HUNDRED_YEARS from '../asset/images/books/100_years_of_solitude.jpg';
import DEBT from '../asset/images/books/debt_5000_years.jpg'

export const CATEGORY_COLORS = {
    _a: '#CD533B',

    magicalrealism: '#99D17B',
    spirituality: '#4ECDC4',
    mathematics: '#6F73D2',
    scifi: '#3F826D',
    world: '#2E294E',
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
        name: 'Debt: The First 5,000 Years',
        author: 'David Graeber',
        genres: ['History', 'Economics'],
        status: 'Reading',
        url: DEBT,
    },
    {
        name: 'The future is Asian ',
        author: 'Parag Khanna',
        genres: ['History', 'World'],
        status: 'Reading',
        url: ASIAN_FUTURE,
    },
    {
        name: 'One hundred Years of Solitude',
        author: 'Gabriel Garcia Marquez',
        genres: ['Fiction', 'MagicalRealism'],
        status: true,
        url: HUNDRED_YEARS,
    },
    {
        name: 'Stories of your life and others',
        author: 'Ted Chiang',
        genres: ['Fiction', 'Scifi'],
        status: true,
        rating: 5,
        url: TED_CHIANG,
    },
    {
        name: 'Siddhartha',
        author: 'Hermann Hesse',
        genres: ['Philosophy', 'Life', 'Fiction'],
        status: true,
        rating: 5,
        url: SIDDHARTA,
    },
    {
        name: 'Flash Boys: A Wall Street Revolt',
        author: 'Michael Lewis',
        rating: 4,
        genres: ['Technology', 'Finance'],
        status: true,
        url: FLASH_BOYS,
    },
    {
        name: "On Earth We're Briefly Gorgeous Novel",
        author: 'Ocean Vuong',
        rating: 4,
        genres: ['Fiction'],
        status: true,
        url: ON_EARTH,
    },
    {
        name: 'In Love With The World',
        author: 'Yongey Mingyur Rinpoche',
        rating: 3,
        genres: ['Memoir', 'Spirituality'],
        status: 'true',
        url: BARDO,
    },
    {
        name: 'Quantum Night',
        author: 'Robert J Sawyer',
        rating: 3,
        genres: ['Scifi', 'Fiction'],
        status: true,
        url: QUANTUM_NIGHT,
    },
    {
        name: 'The Joy of X',
        author: 'Steven Strogatz',
        rating: 3,
        genres: ['Mathematics'],
        status: true,
        url: JOY_X,
    },
];

import HOUSEKEEP from '../asset/images/books/prof_housekeeper.jpg';
import OVERSTORY from '../asset/images/books/overstory.jpg';



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
        name: 'The Overstory',
        author: 'Richard Powers',
        genres: ['Fiction'],
        status: 'Reading',
        url: OVERSTORY,
    }, 
    {
        name: 'The Housekeeper and the Professor',
        author: 'Yōko Ogawa',
        genres: ['Fiction', 'Mathematics'],
        status: true,
        rating: 4,
        url: HOUSEKEEP,
    },
    
];

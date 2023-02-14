import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';

export const NAVIGATION = [
    { text: 'About', icon: '🙋' },
    { text: 'Pictures', icon: '🖼️' },
    { text: 'Projects', icon: '🏗️' },
    { text: 'Books', icon: '📚' },
    { text: 'TIL', icon: '💡' },
];

export const SOCIAL_MEDIA = [
    {
        text: 'LinkedIn',
        icon: <AiOutlineLinkedin />,
        url: 'https://www.linkedin.com/in/phuntsho-norbu/',
    },
    {
        text: 'Github',
        icon: <AiOutlineGithub />,
        url: 'https://www.github.com/phuens',
    },
];
export const ABOUT = [
    {
        year: 'Present',
        position: 'M.Sc. Student',
        description: 'Computer Science',
        url: 'https://www.cs.usask.ca/',
        company: 'University of Saskatchewan',
        image: '../asset/images/about/watson.png',
        country: 'Canada',
        shortForm: 'Usask',
    },
    {
        year: '2020-2021',
        position: 'Software Developer',
        description: 'ERPNext(open source eRP system)',
        company: 'Thimphu Techpark Limited',
        url: 'https://www.linkedin.com/company/thimphu-techpark-limited/',
        image: '../asset/images/about/watson.png',
        country: 'Bhutan',
        shortForm: 'TTPL',
    },
    {
        year: '2019-2020',
        position: 'Watson Fellow',
        description: 'robotics capacity building through drones',
        url: 'https://watson.foundation/',
        company: 'Watson Foundation',
        image: './asset/images/about/watson.png',
        country: 'Tanzania, Mongolia, Nepal',
        shortForm: 'Watson',
    },
];

export const firebaseConfig = {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: '',
};

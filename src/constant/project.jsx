export const STACK_COLOR = {
    python: '#CD533B',
    react_js: '#99D17B',
    tailwind: '#4ECDC4',
    git: '#6F73D2',
    redux: '#3F826D',
    react_native: '#2E294E',
    firestore: '#C19875',
    gitbook: '#A0CED9',
};

export const PROJECTS = [
    {
        name: 'Watson Fellowship',
        description:
            'I was one of only 40 graduates nationwide(US) to be awarded this highly selective grant for independent research outside of the United States and home country. Explored how local robotics capacity is built by looking at how organizations form relationships with local communities to assess and integrate the growing drone technology.',
        url: 'kongtsey.com',
        stickers: 'Country',
        stacks: [
            { name: 'Nepal', color: STACK_COLOR['python'] },
            { name: 'Tanzania', color: STACK_COLOR['react_js'] },
            { name: 'Mongolia', color: STACK_COLOR['tailwind'] },
        ],
    },

    {
        name: 'Laktaa',
        description:
            'Freelance job. Laktaa is an android mobile application that provides decentralized logistics and delivery service for Bhutan’s rural and urban households. This is an MVP for a non-profit organization being established in Bhutan. * app only available in Bhutan and India',
        url: 'https://play.google.com/store/apps/details?id=com.laktaa',
        stickers: 'Stack',
        stacks: [
            { name: 'Redux', color: STACK_COLOR['redux'] },
            { name: 'Git', color: STACK_COLOR['git'] },
            { name: 'Firestore', color: STACK_COLOR['firestore'] },
            { name: 'React Native', color: STACK_COLOR['react_native'] },
            { name: 'Tailwind-css', color: STACK_COLOR['tailwind'] },
        ],
    },
    {
        name: 'Kongtsey',
        description:
            'Kongtsey is the first free web-based test preparation platform for the Royal Civil Service Examination of Bhutan, with 650+ users from 13 colleges. Kongtsey aims to provide continuous feedback during learning while also addressing the growing inequality in access to education resources.',
        url: 'https://kongtsey.com',
        stickers: 'Stack',
        stacks: [
            { name: 'Python', color: STACK_COLOR['python'] },
            { name: 'Git', color: STACK_COLOR['git'] },
            { name: 'Firestore', color: STACK_COLOR['firestore'] },
            { name: 'Tailwind-css', color: STACK_COLOR['tailwind'] },
            { name: 'React JS', color: STACK_COLOR['react_js'] },
        ],
    },
    {
        name: 'Leetcode',
        description:
            'This is documentation of my leetcode practice journey. This is mainly done in hopes of being able to learn but more importantly explain code better. During my time as a teaching assistant for a python course, I realized explaining programming is a whole different skill set to master.',
        url: 'https://phuntsho-norbu.gitbook.io/leetcode/',
        stickers: 'Stack',
        stacks: [
            { name: 'Python', color: STACK_COLOR['python'] },
            { name: 'Gitbook', color: STACK_COLOR['gitbook'] },
        ],
    },
];

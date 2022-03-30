export interface ProjectType {
  title: string;
  description: string;
  image: string;
  tags: string[];
  source: string;
  link: string;
  id: number;
}

export const projects: ProjectType[] = [
  {
    title: 'MERN Learn Animals',
    description:
      'Built a Full Stack MERN Application using React, Node.js, Express & MongoDB. The App is called Learn Animals and it is a responsive web application where kids can learn more about different kinds of animals.',
    image: '/images/1.png',
    tags: ['MongoDB Atlas', 'Express', 'React', 'Node', 'Redux'],
    source: 'https://github.com/Aaron-Lin-74/learn-animal-mern-project',
    link: 'http://learnanimalmern-env.eba-mn3hxtuv.ap-southeast-2.elasticbeanstalk.com',
    id: 0,
  },
  {
    title: 'Animal Sounds',
    description:
      'Developed Animal Sounds web application using React function components and Google Firebase. It is an interactive web application where kids can hear a variety of animal sounds, and play with it.',
    image: '/images/2.png',
    tags: ['React', 'Firebase', 'Styled-Components'],
    source: 'https://github.com/Aaron-Lin-74/how-animal-sounds',
    link: 'https://aaronlin-animal-sounds.web.app',
    id: 1,
  },
  {
    title: 'Public Chatroom',
    description:
      'Developed a Realtime Chat Application where login users can send text messages, emojis, and photos.',
    image: '/images/3.png',
    tags: ['React', 'Firebase', 'CI/CD', 'React Testing Library'],
    source: 'https://github.com/Aaron-Lin-74/chatroom-project',
    link: 'https://aaronlin-project-chatroom.web.app',
    id: 2,
  },
];

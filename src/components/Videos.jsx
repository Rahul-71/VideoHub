import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const videoData = [
  {
    id: 1,
    title: 'How to make a paper airplane',
    url: 'https://www.youtube.com/embed/12UJvz0f-8k',
    description:
      'Learn how to fold a simple and easy paper airplane with this tutorial.',
  },
  {
    id: 2,
    title: 'The Lion King - Circle of Life',
    url: 'https://www.youtube.com/embed/GibiNy4d4gc',
    description:
      "Watch the iconic opening scene of Disney's classic animated film The Lion King.",
  },
  {
    id: 3,
    title: "NASA's Perseverance Rover Lands on Mars",
    url: 'https://www.youtube.com/embed/4czjS9h4Fpg',
    description:
      "Relive the thrilling moments of the landing of NASA's Perseverance rover on the surface of Mars.",
  },
  {
    id: 4,
    title: 'Ed Sheeran - Shape of You',
    url: 'https://www.youtube.com/embed/JGwWNGJdvx8',
    description: 'Listen to the hit song by Ed Sheeran from his album Divide.',
  },
  {
    id: 5,
    title: 'Paper Airplane World Record',
    url: 'https://www.youtube.com/embed/wedcZp07raE',
    description:
      'A video of the world record for the longest distance flown by a paper airplane, set by John Collins and Joe Ayoob in 2012.',
  },
  {
    id: 6,
    title: "Harry Potter and the Philosopher's Stone - Trailer",
    url: 'https://www.youtube.com/embed/VyHV0BRtdxo',
    description:
      'Watch the trailer of the first movie in the Harry Potter series, based on the bestselling books by J.K. Rowling.',
  },
  {
    id: 7,
    title: 'BTS - Dynamite',
    url: 'https://www.youtube.com/embed/gdZLi9oWNZg',
    description:
      'Enjoy the music video of the catchy song by BTS, the global sensation from South Korea.',
  },
  {
    id: 8,
    title: "How to solve a Rubik's cube",
    url: 'https://www.youtube.com/embed/R-R0KrXvWbc',
    description:
      "Master the art of solving a Rubik's cube with this simple and clear method.",
  },
  {
    id: 9,
    title: 'The Avengers - Official Trailer',
    url: 'https://www.youtube.com/embed/eOrNdBpGMv8',
    description:
      'Watch the trailer of the epic superhero movie that brings together Iron Man, Captain America, Thor, Hulk and more.',
  },
  {
    id: 10,
    title: 'Top 100 Amazing Videos of the Year | People Are Awesome',
    url: 'https://www.youtube.com/embed/ZXXTzbFMTIs',
    description:
      'A compilation of the most amazing videos of the year, featuring incredible feats, skills, stunts, and talents from ordinary people.',
  },
  {
    id: 11,
    title: 'Top 100 Videos of 2020 | People Are Awesome | Best of the Year',
    url: 'https://www.youtube.com/embed/NN1RWBgZ62w',
    description:
      'We rounded up our top 100, most awesome videos of 2020! So much talent, and plenty of time to check them all out. What was your favorite PAA video this year?',
  },
];

const Videos = () => {
  const [video, setVideo] = useState(videoData[0]);

  return (
    <Stack direction={['column', 'row']}>
      <VStack w={'full'}>
        <iframe
          src={video.url}
          // src={'https://www.youtube.com/embed/b50zSyLiCYQ'}
          width={'100%'}
          height={'100%'}
          frameborder="0"
        />
        {/* for video title & description */}
        <VStack alignItems={'flex-start'} p={10} w={'full'}>
          <Heading>{video.title}</Heading>
          <Text>{video.description}</Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p={6}
        spacing={5}
        overflowY={'scroll'}
        maxH={'95vh'}
      >
        {videoData.map((item, index) => (
          <Button
            minH={20}
            variant={'ghost'}
            colorScheme="telegram"
            onClick={() => setVideo(item)}
          >
            Video {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;

import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container minH={'100vh'} maxW={'container.xl'}>
        <Heading
          textTransform={'uppercase'}
          textDecoration={'underline'}
          py="5"
          textAlign={'center'}
        >
          Services
        </Heading>

        <Stack
          //   bgColor={'purple'}
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            textAlign={'center'}
            p={[4, 16]}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            doloribus, tenetur recusandae voluptatibus perspiciatis praesentium.
            Possimus sapiente, ratione nostrum dolores recusandae aperiam, dolor
            labore perferendis itaque dolorem, dolorum optio esse aliquid? Vel
            quia tempore, quaerat labore ipsum dolor at ipsam neque rem ducimus
            voluptatem consequuntur culpa velit sint omnis quibusdam. Earum,
            optio ullam, odit expedita aperiam quo quibusdam voluptatum deleniti
            aut soluta officiis, veniam alias dolorem facere sunt nam sit
            dolores. Sequi quidem labore magnam quae, neque molestiae ex autem
            aliquam debitis ducimus ab consequuntur harum architecto, ea quasi,
            quo dolorum voluptas. Mollitia veritatis aliquam facilis accusantium
            iure eaque maiores?
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      interval={1000}
      infiniteLoop
      showArrows={false}
      showStatus={false}
      showThumbs={false}
    >
      <Box w={'full'} h={'100vh'}>
        <Image src={img1} />
        <Heading bgColor={'blackAlpha.400'} color={'white'} {...headingOptions}>
          Watch the Future
        </Heading>
      </Box>

      <Box w={'full'} h={'100vh'}>
        <Image src={img2} />
        <Heading bgColor={'blackAlpha.400'} color={'white'} {...headingOptions}>
          Future is gaming
        </Heading>
      </Box>

      <Box w={'full'} h={'100vh'}>
        <Image src={img3} />
        <Heading bgColor={'blackAlpha.400'} color={'white'} {...headingOptions}>
          Gaming on Console
        </Heading>
      </Box>

      <Box w={'full'} h={'100vh'}>
        <Image src={img4} />
        <Heading bgColor={'blackAlpha.400'} color={'white'} {...headingOptions}>
          Start the journey
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;

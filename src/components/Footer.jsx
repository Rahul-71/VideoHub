import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

import { AiOutlineLinkedin, AiOutlineSend } from 'react-icons/ai';

import { ImGithub } from 'react-icons/im';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} p={16} minH={40} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack w={'full'} alignItems={'stretch'} p={4}>
          <Heading textTransform={'uppercase'} size={'md'}>
            subscribe to get updates
          </Heading>
          <HStack>
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
              py={5}
              borderBottom={'2px solid'}
            />
            <Button
              p={0}
              colorScheme="red"
              variant={'ghost'}
              borderRadius={'0 40px 40px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          alignItems={'stretch'}
          textAlign={'center'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'}>Video hub</Heading>
          <Text>All Rights Reserved</Text>
        </VStack>

        <VStack w={'full'} alignItems={'center'}>
          <Heading size={'md'}>Social Handles</Heading>
          <HStack
            w={'60%'}
            paddingTop={4}
            justifyContent={'space-evenly'}
            alignItems={'center'}
          >
            <Button
              colorScheme="whiteAlpha"
              variant={'unstyled'}
              opacity={'30%'}
              _hover={false}
            >
              <a href="https://github.com/Rahul-71" target="blank">
                <ImGithub size={40} />
              </a>
            </Button>
            <Button
              colorScheme="whiteAlpha"
              variant={'unstyled'}
              opacity={'30%'}
              _hover={false}
            >
              <a
                href="https://www.linkedin.com/in/rahultiwari15/"
                target="blank"
              >
                <AiOutlineLinkedin size={40} />
              </a>
            </Button>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;

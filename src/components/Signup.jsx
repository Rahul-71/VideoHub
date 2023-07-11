import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container h={'100vh'} p={'16'} maxW={'container.xl'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={8}
          w={['full', '96']}
          m={'auto'}
          my={16}
        >
          <Heading>VIDEO HUB</Heading>
          <Avatar boxSize={32} alignSelf={'center'} />

          <Input
            type="text"
            placeholder="Enter Name"
            focusBorderColor={'red.300'}
            required
          />

          <Input
            type="email"
            placeholder="Enter Email"
            focusBorderColor={'red.300'}
            required
          />

          <Input
            type="password"
            placeholder="Enter Password"
            focusBorderColor={'red.300'}
            required
          />

          <Button type="submit" colorScheme="purple">
            Register
          </Button>

          <Text textAlign={'right'}>
            Already have account?{' '}
            <Button variant={'link'} alignSelf={'flex-end'}>
              <Link to={'/login'}>Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;

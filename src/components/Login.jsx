import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
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
          <Heading>Welcome Back!</Heading>
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

          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forget Password?</Link>
          </Button>
          <Button type="submit" colorScheme="purple">
            Log In
          </Button>

          <Text textAlign={'right'}>
            New User?{' '}
            <Button variant={'link'} alignSelf={'flex-end'}>
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;

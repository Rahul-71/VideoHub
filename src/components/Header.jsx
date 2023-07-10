import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        top={4}
        left={5}
        pos={'fixed'}
        borderRadius={'full'}
        colorScheme="red"
        onClick={onOpen}
        zIndex={'overlay'}
      >
        <BiMenuAltLeft size={'20'}></BiMenuAltLeft>
      </Button>

      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>VIDEO HUB</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} colorScheme="red" variant={'ghost'}>
                <Link to={'/'}>Home</Link>
              </Button>

              <Button onClick={onClose} colorScheme="red" variant={'ghost'}>
                <Link to={'/videos'}>Videos</Link>
              </Button>

              <Button onClick={onClose} colorScheme="red" variant={'ghost'}>
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>

              <Button onClick={onClose} colorScheme="red" variant={'ghost'}>
                <Link to={'/upload'}>Upload</Link>
              </Button>
            </VStack>

            <HStack
              pos={'absolute'}
              bottom={10}
              w={'100%'}
              left={0}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme="pink">
                <Link to={'/login'}>Log In</Link>
              </Button>
              <Button onClick={onClose} colorScheme="pink" variant={'outline'}>
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;

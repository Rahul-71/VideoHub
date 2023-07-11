import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
  return (
    <Container h={'100vh'} p={16}>
      <VStack h={'full'} justifyContent={'center'} color={'red.300'}>
        <AiOutlineCloudUpload size={'10vmax'} />
        <form>
          <HStack>
            <Input
              type="file"
              required
              css={{
                '&::file-selector-button': {
                  border: 'none',
                  height: '100%',
                  width: 'calc(100% + 36px)',
                  marginLeft: '-18px',
                  color: 'red',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                },
              }}
            />
            <Button colorScheme="red">Upload</Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;

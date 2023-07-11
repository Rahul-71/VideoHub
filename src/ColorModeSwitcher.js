import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      pos={'fixed'}
      top={4} // here 1 unit = 4px
      right={4}
      zIndex={'overlay'}
      {...props}
    />
  );
};

export default ColorModeSwitcher;

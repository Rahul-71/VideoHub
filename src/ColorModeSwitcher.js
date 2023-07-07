import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      // size="md"
      // fontSize="lg"
      // aria-label={`Switch to ${text} mode`}
      // marginLeft="2"
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      pos={'fixed'}
      top={4} // here 1 unit = 4px
      right={4}
      {...props}
    />
  );
};

export default ColorModeSwitcher;

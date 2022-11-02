import React from 'react';
import { Flex, Image, Text, Heading, Button } from '@chakra-ui/react';
import router from 'next/router';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Flex
      bg='white'
      height='44px'
      padding='6px 12px'
      justify={{ md: 'space-between' }}
    >
      <Flex
        align='center'
        width={{ base: '40px', md: 'auto' }}
        mr={{ base: 0, md: 2 }}
      >
        <Image alt='logo' src='/images/streetperfomer.jpeg' height='40px' />
        <Heading display={['none', 'flex']} fontSize='2xl' color='primary'>
          Street Performers Map
        </Heading>
      </Flex>
      <Flex align='center'>
        <Button
          variant='solid'
          mx={3}
          size='xl'
          px={8}
          py={2}
          onClick={() => router.push('/signIn')}
        >
          Log In{' '}
        </Button>
        <Button
          variant='solid'
          size='xl'
          px={8}
          py={2}
          onClick={() => router.push('/signUp')}
        >
          Sign Up{' '}
        </Button>
      </Flex>
    </Flex>
  );
};
export default Navbar;

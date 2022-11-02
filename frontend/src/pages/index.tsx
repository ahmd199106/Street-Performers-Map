import type { NextPage } from 'next';
import Head from 'next/head';
import { Button, Center, Text, Image, Spacer, Flex } from '@chakra-ui/react';
import router from 'next/router';
import { useEffect } from 'react';

const Home: NextPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3001');
        console.log(await res.text());
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Head>
        <title>Street Performers Map</title>
      </Head>
      <Flex
        flexGrow={1}
        // bgColor='surfaceVariant'
        direction='column'
        fontSize={['sm', 'md']}
      >
        <Center
          flexGrow={1}
          // fontFamily="Euclid"
          bgColor='surface'
          rounded='xl'
          mx={[0, 52]}
          p={[6, 16]}
          py={8}
          flexDirection='column'
          mt='20px'
          mb='200px'
        >
          <Text
            textAlign='center'
            fontWeight='bold'
            fontSize={{ lg: '2xl', base: 'md' }}
            mb={4}
          >
            Welcome to the Street Performers Map{' '}
          </Text>
          <Image
            alt='party image'
            boxSize='280'
            src='/images/streetperfomer.jpeg'
            rounded='3xl'
          />
          <Button
            variant='solid'
            mt={2}
            size='xl'
            px={8}
            py={4}
            onClick={() => router.push('/signIn')}
          >
            Log In{' '}
          </Button>
          <Button
            variant='solid'
            mt={2}
            size='xl'
            px={8}
            py={4}
            onClick={() => router.push('/signUp')}
          >
            Sign Up{' '}
          </Button>
        </Center>
      </Flex>
    </>
  );
};

export default Home;

import { signIn, signUp, requireNextAuth } from '@roq/nextjs';
import HomeLayout from 'layout/home-layout';
import { Box, Heading, Text, Stack, Image, Link } from '@chakra-ui/react';
import { FC } from 'react';
import { CustomButton } from 'components/custom-button';
import Head from 'next/head';
import { PoweredBy } from 'components/powered-by';
import { HelpBox } from 'components/help-box';

const Card: FC<{
  userTypeName: string;
  onSignup?: () => void;
  onLogin?: () => void;
  rootClass?: string;
  type?: string;
}> = ({ userTypeName, rootClass = '', type = '' }) => (
  <Box
    width={{ md: '310px' }}
    bgColor="base.200"
    p="18px"
    border="1px solid"
    borderColor="base.300"
    borderRadius="8px"
    className={rootClass}
  >
    <Text fontSize="xl" color="base.content" fontWeight={600} mb="24px">
      {userTypeName}
    </Text>
    <Box display="flex">
      <CustomButton flex={1} weight="primary" _hover={{ bg: 'primary.focus' }} onClick={() => signUp(type)}>
        Signup
      </CustomButton>
      <CustomButton onClick={() => signIn(type)} flex={{ base: 1, lg: '0 0 131px' }} weight="secondary" ml="12px">
        Login
      </CustomButton>
    </Box>
  </Box>
);

function HomePage() {
  return (
    <>
      <Head>
        <title>{`Helper`}</title>

        <meta
          name="description"
          content="Experience seamless project management with Helper - your ultimate tool for tracking project timelines, generating reports, and ensuring timely updates. Simplify your work with our intuitive gant charts and tables."
        />
      </Head>
      <HomeLayout>
        <Box position="relative" display="flex" flex={{ lg: '0 0 485px' }} height={{ base: '180px', lg: 'auto' }}>
          <Image
            flex="1"
            src={
              'https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjA3NjB8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudHxlbnwwfHx8fDE2OTA4NTA4NzF8MA&ixlib=rb-4.0.3&q=80&w=1080'
            }
            alt="Dinner"
            objectFit="cover"
            objectPosition="center"
          />
          <Box position="absolute" top="0" backgroundColor="rgba(0,0,0,0.6)" width="100%" py="2">
            <Text align="center" fontSize="sm" color="white">
              Photo by{' '}
              <Link
                href="https://unsplash.com/@edenconstantin0?utm_source=roq-generator&utm_medium=referral"
                isExternal
                color="teal.200"
              >{`Eden Constantino`}</Link>{' '}
              on{' '}
              <Link
                href="https://unsplash.com/?utm_source=roq-generator&utm_medium=referral"
                isExternal
                color="teal.200"
              >
                Unsplash
              </Link>
            </Text>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          padding={{ base: '32px 16px', lg: '32px 64px', xl: '64px 128px' }}
          overflow="auto"
        >
          <Box>
            <Heading mb={{ base: '12px', lg: '20px' }} size="2xl">
              {`Helper`}
            </Heading>
            <Text size="2xl" mb={{ base: '32px', lg: '48px' }} color="base.content" opacity="0.6">
              {`Experience seamless project management with Helper - your ultimate tool for tracking project timelines, generating reports, and ensuring timely updates. Simplify your work with our intuitive gant charts and tables.`}
            </Text>
            <Box
              className="roles-container"
              display={'flex'}
              flexDirection={'column'}
              w={{ base: '100%', md: 'fit-content' }}
            >
              <Stack direction="column" spacing={6}>
                <Card userTypeName="Team Lead" type="team-lead" />
              </Stack>
            </Box>
          </Box>
          <Box pt={4}>
            <HelpBox />
            <PoweredBy />
          </Box>
        </Box>
      </HomeLayout>
    </>
  );
}

export default requireNextAuth({
  redirectIfAuthenticated: true,
  redirectTo: '/users',
})(HomePage);

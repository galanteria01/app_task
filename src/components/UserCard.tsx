import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import User from '../interfaces/User';

type UserCardProps = {
  user: User
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '800px' }}
        height={{ md: '32rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}>

        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {user.first_name} {user.last_name}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            A Good Person
          </Text>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
            {user.email}
          </Text>

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              onClick={() => { }}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Mail {user.first_name}
            </Button>
          </Stack>
        </Stack>
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={
              user.avatar
            }
          />
        </Flex>
      </Stack>
    </Center>
  )
}

export default UserCard
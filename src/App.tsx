import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Button,
  Flex,
  Spinner,
} from "@chakra-ui/react"
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import Navbar from "./components/Navbar"
import UserCard from "./components/UserCard";
import { addUser, selectUser } from "./features/user/userSlice";
import { addUsers, selectUsers } from "./features/users/usersSlice";
import ApiService from "./services/ApiService"

export const App = () => {

  const apiService = new ApiService();
  const [loading, setLoading] = React.useState<boolean>(true);
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers)
  const user = useAppSelector(selectUser);

  const getUsers = async () => {
    const temporary = await apiService.getUsers(0);
    for (let i = 1; i <= temporary.total_pages; i++) {
      const response = await apiService.getUsers(i);
      dispatch(addUsers(response.data));
    }
    setLoading(false);
  }

  const getUser = async (id: number) => {
    const response = await apiService.getUser(id);
    dispatch(addUser(response.data));
  }

  useEffect(() => {
    if (users.length === 0) getUsers();
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3} width={'100%'}>
          <Navbar />
          <UserCard user={user} />
          {loading ?
            <Flex justifyContent={'center'}>
              <Spinner />
            </Flex>
            :
            (
              <Flex
                justifyContent={{ base: 'flex-start', md: 'center' }}
                alignItems={'flex-end'}
                overflowX={'scroll'}
                css={{
                  '&::-webkit-scrollbar': {
                    width: '4px',
                  },
                  '&::-webkit-scrollbar-track': {
                    width: '6px',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    borderRadius: '24px',
                  },
                }}
              >
                {users.map(user => (
                  <Button
                    key={user.id}
                    mx={{ base: '0.25rem', md: '2rem' }}
                    onClick={() => {
                      getUser(user.id);
                    }}
                  >
                    {user.id}
                  </Button>
                ))}
              </Flex>
            )
          }
        </Grid>
      </Box>
    </ChakraProvider>
  )
}
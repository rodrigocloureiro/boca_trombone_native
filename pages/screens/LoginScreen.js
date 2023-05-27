import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
} from "native-base";
import { useState } from 'react';

export default function LoginScreen({mockLogin, setIsLogged}) {
  const [ username, setUsername ] = useState(null);
  const [ password, setPassword ] = useState(null);

  const handleLogin = (username, password) => {
    mockLogin.some(user => user.username === username && user.password === password) && setIsLogged(true);
  };

  return (
    <NativeBaseProvider>
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
          >
            Bem-vindo
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: "warmGray.200",
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs"
          >
            Entre para continuar!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Username</FormControl.Label>
              <Input onChangeText={setUsername} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" onChangeText={setPassword} />
              <Link
                _text={{
                  fontSize: "xs",
                  fontWeight: "500",
                  color: "indigo.500",
                }}
                alignSelf="flex-end"
                mt="1"
              >
                Esqueceu sua senha?
              </Link>
            </FormControl>
            <Button mt="2" colorScheme="indigo" onPress={() => handleLogin(username, password)}>
              Entrar
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                Eu sou um novo usuário.{" "}
              </Text>
              <Link
                _text={{
                  color: "indigo.500",
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
                href="#"
              >
                Inscrever-se
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}

import {
  Box,
  Heading,
  HStack,
  VStack,
  Text,
  Input,
  Link,
  Button,
  FormControl,
  Center,
} from "native-base";

const SighninScreen = () => {
  return (
    <Center w="100%" height="100%" bg="coolGray.800">
      <Box safeArea p="2" py="8" w="90%" mt="5%" maxW="290" bg="coolGray.800">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Benvindo
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
          iniciar sessão para continuar
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email / Tel</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Palavra Passe</FormControl.Label>
            <Input type="password" />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Esqueceu senha?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo">
            Iniciar Sessão
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              Novo Usúario.{" "}
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              href="#"
            >
              Criar Conta
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default SighninScreen;

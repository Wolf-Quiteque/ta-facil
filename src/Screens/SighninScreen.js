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

const SighninScreen = ({ navigation }) => {
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
          Registrar agora
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
          Verifique o seu documento
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label> Nome Completo</FormControl.Label>
            <Input />
          </FormControl>

          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>

          <FormControl>
            <FormControl.Label>Tel</FormControl.Label>
            <Input />
          </FormControl>

          <FormControl>
            <FormControl.Label>Palavra Passe</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button mt="2" colorScheme="indigo">
            Registrar
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              Já tens conta?{" "}
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              href="#"
              onPress={() => navigation.navigate("Login")}
            >
              Iniciar sessão
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default SighninScreen;

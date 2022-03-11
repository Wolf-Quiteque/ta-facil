import {
  VStack,
  Input,
  Button,
  IconButton,
  Pressable,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  HStack,
  Box,
  Divider,
  Heading,
} from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Ionic from "react-native-vector-icons/Ionicons";

const HomeScreen = () => {
  return (
    <>
      <Center>
        <VStack
          my="4"
          space={5}
          w="100%"
          maxW="300px"
          divider={
            <Box px="2">
              <Divider />
            </Box>
          }
        >
          {/* <VStack w="100%" space={5} alignSelf="center">
            <Input
              placeholder="Pesquisa"
              variant="filled"
              width="100%"
              borderRadius="10"
              py="1"
              px="2"
              borderWidth="0"
              InputLeftElement={
                <Icon
                  ml="2"
                  size="4"
                  color="gray.400"
                  as={<Ionicons name="ios-search" />}
                />
              }
            />
          </VStack> */}
        </VStack>
      </Center>
      <HStack space={6} justifyContent="center">
        <Center h="20" w="20" bg="coolGray.700" rounded="md" shadow={3}>
          <FontAwesome5 name="file" color="#f2aa00" size={30} />

          <Text color="white" bold>
            Docs
          </Text>
        </Center>

        <Center h="20" w="20" bg="coolGray.700" rounded="md" shadow={3}>
          {" "}
          <FontAwesome5 name="users" color="#f2aa00" size={30} />
          <Text color="white" bold>
            Conta
          </Text>{" "}
        </Center>
        <Center h="20" w="20" bg="coolGray.700" rounded="md" shadow={3}>
          {" "}
          <FontAwesome5 name="hands-helping" color="#f2aa00" size={30} />
          <Text color="white" bold>
            Suporte
          </Text>{" "}
        </Center>
      </HStack>
      <HStack mt="7" space={1} justifyContent="center">
        <Center h="100" width="80%" bg="coolGray.700" rounded="md" shadow={3}>
          <Center mt="5">
            <FontAwesome5 name="opencart" mt="10" color="#f2aa00" size={30} />
            <Text color="white" bold>
              Serviço de Entrega
            </Text>{" "}
          </Center>
        </Center>
      </HStack>
      <HStack mt="7" space={1} justifyContent="center">
        <Center h="100" width="80%" bg="coolGray.700" rounded="md" shadow={3}>
          <Center mt="5">
            <FontAwesome5 name="coins" mt="10" color="#f2aa00" size={30} />
            <Text color="white" bold>
              Saldo
            </Text>{" "}
          </Center>
        </Center>
      </HStack>

      <HStack mt="7" space={1} justifyContent="center">
        <Center h="100" width="80%" bg="coolGray.700" rounded="md" shadow={3}>
          <Center mt="5">
            <FontAwesome5 name="tasks" mt="10" color="#f2aa00" size={30} />
            <Text color="white" bold>
              Pedidos
            </Text>{" "}
          </Center>
        </Center>
      </HStack>
    </>
  );
};

export default HomeScreen;

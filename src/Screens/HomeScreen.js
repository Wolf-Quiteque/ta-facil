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
import { View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
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
        <Button
          h="20"
          w="20"
          bg="coolGray.700"
          rounded="md"
          shadow={3}
          onPress={() => navigation.navigate("Estados")}
        >
          <FontAwesome5 name="file" color="#f2aa00" size={30} />

          <Text color="white" bold>
            Docs
          </Text>
        </Button>

        <Button
          h="20"
          w="20"
          bg="coolGray.700"
          rounded="md"
          shadow={3}
          onPress={() => navigation.navigate("Minha Conta")}
        >
          {" "}
          <FontAwesome5 name="users" color="#f2aa00" size={30} />
          <Text color="white" bold>
            Conta
          </Text>{" "}
        </Button>
        <Button
          h="20"
          w="20"
          bg="coolGray.700"
          rounded="md"
          shadow={3}
          onPress={() => navigation.navigate("Suporte")}
        >
          {" "}
          <FontAwesome5 name="hands-helping" color="#f2aa00" size={30} />
          <Text color="white" bold>
            Suporte
          </Text>{" "}
        </Button>
      </HStack>
      <HStack mt="7" space={1} justifyContent="center">
        <Button
          h="100"
          width="80%"
          bg="coolGray.700"
          rounded="md"
          shadow={3}
          onPress={() => navigation.navigate("Serviços de Entrega")}
        >
          <Center mt="5">
            <FontAwesome5 name="opencart" mt="10" color="#f2aa00" size={30} />
            <Text color="white" bold>
              Serviço de Entrega
            </Text>{" "}
          </Center>
        </Button>
      </HStack>
      <HStack mt="7" space={1} justifyContent="center">
        <Button
          h="100"
          width="80%"
          bg="coolGray.700"
          rounded="md"
          shadow={3}
          onPress={() => navigation.navigate("Saldo")}
        >
          <Center mt="5">
            <FontAwesome5 name="coins" mt="10" color="#f2aa00" size={30} />
            <Text color="white" bold>
              Saldo
            </Text>{" "}
          </Center>
        </Button>
      </HStack>

      <HStack mt="7" space={1} justifyContent="center">
        <Button
          h="100"
          width="80%"
          bg="coolGray.700"
          rounded="md"
          shadow={3}
          onPress={() => navigation.navigate("Pedido")}
        >
          <Center mt="5">
            <FontAwesome5 name="tasks" mt="10" color="#f2aa00" size={30} />
            <Text color="white" bold>
              Pedidos
            </Text>{" "}
          </Center>
        </Button>
      </HStack>
    </View>
  );
};

export default HomeScreen;

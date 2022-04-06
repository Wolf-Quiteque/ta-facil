import {
  Box,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Center,
} from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const SuporteScreen = () => {
  return (
    <>
      <Center>
        <Heading alignItems="center" fontSize="xl" p="4" pb="3">
          Support
        </Heading>

        <HStack mt="7" space={1} justifyContent="center">
          <Center
            h="100"
            width="100%"
            rounded="md"
            p="4"
            shadow={3}
            onPress={() => navigation.navigate("Serviços de Entrega")}
          >
            <Center mt="5">
              <FontAwesome5 name="user" color="blue" size={30} />

              <Text color="user" bold>
                Questões da Conta
              </Text>
              <Text bold>+(244) 998 989 989</Text>
            </Center>
          </Center>
        </HStack>

        <HStack mt="7" space={1} justifyContent="center">
          <Center
            h="100"
            width="100%"
            rounded="md"
            p="4"
            shadow={3}
            onPress={() => navigation.navigate("Serviços de Entrega")}
          >
            <Center mt="5">
              <FontAwesome5 name="opencart" color="blue" size={30} />

              <Text bold>Problemas de Entregue</Text>
              <Text bold>+(244) 998 989 989</Text>
            </Center>
          </Center>
        </HStack>

        <HStack mt="7" space={1} justifyContent="center">
          <Center
            h="100"
            width="100%"
            p="4"
            rounded="md"
            shadow={3}
            onPress={() => navigation.navigate("Serviços de Entrega")}
          >
            <Center mt="5">
              <FontAwesome5 name="users" color="blue" size={30} />

              <Text bold>Questões de Revendedores</Text>
              <Text bold>+(244) 998 989 989</Text>
            </Center>
          </Center>
        </HStack>
      </Center>
    </>
  );
};

export default SuporteScreen;

import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Input,
  Icon,
  Spacer,
  FormControl,
  Center,
  TextArea,
  NativeBaseProvider,
} from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const ProfileScreen = () => {
  return (
    <>
      <Box
        borderBottomWidth="1"
        _dark={{
          borderColor: "gray.600",
        }}
        borderColor="coolGray.200"
        pl="4"
        pr="5"
        py="2"
      >
        <HStack mt="5" space={3} justifyContent="space-between">
          <FormControl>
            <Input value="006LA478787D78" isDisabled="true" />
          </FormControl>
        </HStack>

        <HStack mt="5" space={3} justifyContent="space-between">
          <FormControl>
            <Input value="Marcio Quiteque" isDisabled="true" />
          </FormControl>
        </HStack>

        <HStack mt="5" space={3} justifyContent="space-between">
          <FormControl>
            <TextArea
              h={20}
              value="Luanda, belas, Lar do Patriota, Rua 11, Condominio Pausada"
              isDisabled="true"
              w="75%"
              maxW="300"
            />
          </FormControl>
        </HStack>
      </Box>

      <HStack mt="5" mb="10" space={6} justifyContent="center">
        <Center h="20" w="5000" bg="coolGray.700" rounded="md" shadow={3}>
          {" "}
          <FontAwesome5 name="power-off" color="#ff3838" size={30} />
          <Text color="white" bold>
            Terminar sessão
          </Text>{" "}
        </Center>
      </HStack>
    </>
  );
};

export default ProfileScreen;

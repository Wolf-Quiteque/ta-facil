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
  Center,
  NativeBaseProvider,
} from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const ActivityScreen = () => {
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Almeida Cândido",
      timeStamp: "01/02/22 12:47 ",
      recentText: "Passaporte",
      avatarUrl:
        "https://cdn.icon-icons.com/icons2/1581/PNG/512/3668844-clock-pending-transaction-wait_108015.png",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Amâncio Mathur",
      timeStamp: "02/15/22 11:11",
      recentText: "BI",
      avatarUrl:
        "https://cdn.icon-icons.com/icons2/1581/PNG/512/3668844-clock-pending-transaction-wait_108015.png",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      fullName: "Nataniel Fernandos",
      timeStamp: "02/22/22 6:22",
      recentText: "Livrete",
      avatarUrl:
        "https://cdn.icon-icons.com/icons2/1581/PNG/512/3668844-clock-pending-transaction-wait_108015.png",
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      fullName: "Aniket Kumar",
      timeStamp: "03/03/22 8:56",
      recentText: "BI",
      avatarUrl:
        "https://cdn.icon-icons.com/icons2/1581/PNG/512/3668844-clock-pending-transaction-wait_108015.png",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      fullName: "Márcio Quiteque",
      timeStamp: "03/03/22 12:47",
      recentText: "Passaporte",
      avatarUrl:
        "https://cdn.icon-icons.com/icons2/1581/PNG/512/3668844-clock-pending-transaction-wait_108015.png",
    },
  ];

  return (
    <>
      <Center>
        <Heading alignItems="center" fontSize="xl" p="4" pb="3">
          Pedidos
        </Heading>
      </Center>

      <VStack w="100%" space={5} alignSelf="center">
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
      </VStack>
      <Box mt="5">
        <FlatList
          data={data}
          renderItem={({ item }) => (
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
              <HStack space={3} justifyContent="space-between">
                <Avatar
                  size="48px"
                  source={{
                    uri: item.avatarUrl,
                  }}
                />
                <VStack>
                  <Text
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    bold
                  >
                    {item.fullName}
                  </Text>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                  >
                    {item.recentText}
                  </Text>
                </VStack>
                <Spacer />
                <Text
                  fontSize="xs"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  alignSelf="flex-start"
                >
                  {item.timeStamp}
                </Text>
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
      </Box>
      <HStack mt="5" mb="10" space={6} justifyContent="center">
        <Center h="20" w="20" bg="coolGray.700" rounded="md" shadow={3}>
          <FontAwesome5 name="hand-holding" color="#f2aa00" size={30} />

          <Text color="white" bold>
            Pendentes
          </Text>
        </Center>

        <Center h="20" w="20" bg="coolGray.700" rounded="md" shadow={3}>
          {" "}
          <FontAwesome5 name="hand-holding-heart" color="#f2aa00" size={30} />
          <Text color="white" bold>
            Prontos
          </Text>{" "}
        </Center>
      </HStack>
    </>
  );
};
export default ActivityScreen;

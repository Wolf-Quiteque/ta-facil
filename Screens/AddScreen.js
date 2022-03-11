import {
  Stack,
  Input,
  Button,
  IconButton,
  Pressable,
  Icon,
  Text,
  HStack,
  Center,
  Select,
  Box,
  FormControl,
  Divider,
  Heading,
} from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";

const AddScreen = () => {
  return (
    <>
      <Stack
        space={2.5}
        alignSelf="center"
        px="4"
        safeArea
        w={{
          base: "100%",
          md: "25%",
        }}
      >
        <Box>
          <Text bold fontSize="xl" mb="4">
            Novo Pedido
          </Text>
          <FormControl mb="5">
            <FormControl.Label>Numero BI</FormControl.Label>
            <Input variant="filled" placeholder="Digite o Numero do BI" />
          </FormControl>
          <FormControl mb="5">
            <FormControl.Label>Tipo de Documento</FormControl.Label>
            <Select
              // selectedValue={service}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Seleciona o Documento"
              _selectedItem={{
                bg: "teal.600",
                endIcon: (
                  <FontAwesome5 name="check" color="#f2aa00" size={30} />
                ),
              }}
              mt={1}
              // onValueChange={(itemValue) => setService(itemValue)}
            >
              <Select.Item label="BI" value="ux" />
              <Select.Item label="Passaporte" value="web" />
              <Select.Item label="Livrete" value="cross" />
              <Select.Item label="Carta de Condução" value="ui" />
              <Select.Item label="Carta de Condução" value="ui" />
              <Select.Item label="Carta de Condução" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>
          </FormControl>
          <Divider />
        </Box>
      </Stack>

      <HStack mt="7" space={1} justifyContent="center">
        <Center h="100" width="80%" bg="coolGray.700" rounded="md" shadow={3}>
          <Center mt="5">
            <FontAwesome5
              name="fingerprint"
              mt="10"
              color="#f2aa00"
              size={30}
            />
            <Text color="white" bold>
              Ver Estado
            </Text>{" "}
          </Center>
        </Center>
      </HStack>
    </>
  );
};

export default AddScreen;

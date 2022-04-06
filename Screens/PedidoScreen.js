import {
  Stack,
  Input,
  Button,
  IconButton,
  Pressable,
  TextArea,
  Text,
  HStack,
  Center,
  Select,
  Box,
  FormControl,
  AlertDialog,
  Spinner,
  Divider,
  Heading,
} from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

const PedidoScreen = () => {
  const [bi, setbi] = useState();
  const [doc, setdoc] = useState();
  const [nome, setnome] = useState();
  const [email, setemail] = useState();
  const [tel, settel] = useState();

  const [loading, setloading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);

  const cancelRef = useRef();

  const VerEstado = async () => {
    setloading(true);
    const res = await axios.get("docs/" + bi);
    setloading(false);
    if (res.data == null) {
      console.log("Nehum registo encontrado");
    } else {
      setdoc(res.data);
      setIsOpen(true);
    }
  };

  return (
    <>
      <Stack
        mt="5"
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
          <FormControl mb="5">
            <FormControl.Label>Nome </FormControl.Label>
            <Input
              variant="filled"
              placeholder="Digite o seu Nome"
              onChange={(e) => {
                setnome(e.target.value);
              }}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Número de Telfone</FormControl.Label>
            <Input
              type="number"
              variant="filled"
              onChange={(e) => {
                settel(e.target.value);
              }}
            />

            <FormControl mb="5">
              <FormControl.Label>Email</FormControl.Label>
              <Input
                variant="filled"
                placeholder="Digite se Email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </FormControl>
          </FormControl>
          <FormControl mb="5">
            <FormControl.Label>Tipo de Documento</FormControl.Label>
            <Select
              // selectedValue={service}
              variant="filled"
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
              <Select.Item label="Renovação do BI" value="ux" />
              <Select.Item label="Renovação Carta de Condução" value="ux" />
              <Select.Item label="Cartão Municipe" value="web" />
              <Select.Item label="Cédula Pessoal" value="cross" />
              <Select.Item label="Carta de Condução" value="ui" />
            </Select>
          </FormControl>

          <FormControl mb="5">
            <FormControl.Label>Morada</FormControl.Label>
            <TextArea variant="filled" h={70} w="100%" />
          </FormControl>

          <Divider />
        </Box>
      </Stack>

      <HStack mt="2" space={1} justifyContent="center">
        {loading ? (
          <Button
            h="100"
            width="80%"
            bg="coolGray.700"
            rounded="md"
            shadow={3}
            onPress={() => {
              VerEstado();
            }}
            disabled={true}
          >
            <Center mt="5">
              <Spinner
                color="#f2aa00"
                ize="lg"
                accessibilityLabel="A buscar Dados"
              />
              <Heading color="#f2aa00" fontSize="lg">
                Aguarde
              </Heading>
            </Center>
          </Button>
        ) : (
          <Button bg="coolGray.700" h="12" colorScheme="primary">
            <Center mt="5">
              <FontAwesome5 name="fingerprint" mt="1" color="white" size={15} />
              <Text color="white" bold>
                Submeter
              </Text>{" "}
              {/* <Spinner color="warning.500" /> */}
            </Center>
          </Button>
        )}
      </HStack>

      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
        motionPreset={"fade"}
      >
        <AlertDialog.Content>
          <AlertDialog.Header fontSize="lg" fontWeight="bold">
            {doc && doc.nome}
          </AlertDialog.Header>
          <AlertDialog.Body>
            {doc && doc.tratado ? "Pronto a Levantar" : "pendente"}
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button colorScheme="green" onPress={onClose} ml="6">
              sair
            </Button>

            <Button colorScheme="warning" onPress={onClose} ml="3">
              Entrega ao Domicílio
            </Button>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </>
  );
};

export default PedidoScreen;

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
  AlertDialog,
  Spinner,
  Divider,
  Heading,
} from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { useEffect, useState, useRef } from "react";
import { Camera } from "expo-camera";
import { TouchableOpacity, View } from "react-native";
import axios from "axios";

const EntregaScreen = () => {
  //   const [hasPermission, setHasPermission] = useState(null);
  //   const [type, setType] = useState(Camera.Constants.Type.back);

  //   useEffect(() => {
  //     (async () => {
  //       const { status } = await Camera.requestCameraPermissionsAsync();
  //       setHasPermission(status === "granted");
  //     })();
  //   }, []);

  //   if (hasPermission === null) {
  //     return <View />;
  //   }
  //   if (hasPermission === false) {
  //     return <Text>No access to camera</Text>;
  //   }

  const [bi, setbi] = useState();
  const [doc, setdoc] = useState();

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

  //   const styles = StyleSheet.create({
  //     container: {
  //       flex: 1,
  //     },
  //     camera: {
  //       flex: 1,
  //     },
  //     buttonContainer: {
  //       flex: 1,
  //       backgroundColor: "transparent",
  //       flexDirection: "row",
  //       margin: 20,
  //     },
  //     button: {
  //       flex: 0.1,
  //       alignSelf: "flex-end",
  //       alignItems: "center",
  //     },
  //     text: {
  //       fontSize: 18,
  //       color: "white",
  //     },
  //   });

  return (
    <View>
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
            <FormControl.Label>Numero BI</FormControl.Label>
            <Input
              variant="filled"
              placeholder="Digite o Numero do BI"
              onChange={(e) => {
                setbi(e.target.value);
              }}
            />
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
              <Select.Item label="Livrete Automóvel" value="cross" />
              <Select.Item label="Carta de Condução" value="ui" />
              <Select.Item label="Visto" value="ui" />
              <Select.Item label="Cartão Multicaixa" value="ui" />
              <Select.Item label="Outros" value="ui" />
            </Select>
          </FormControl>

          <FormControl mb="5">
            <FormControl.Label>Numero De Verificação</FormControl.Label>
            <Input
              variant="filled"
              placeholder="Digite Numero De Verificação"
              onChange={(e) => {
                setbi(e.target.value);
              }}
            />
          </FormControl>
          <Divider />
        </Box>
      </Stack>

      <HStack mt="7" space={1} justifyContent="center">
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
          <Button
            h="100"
            colorScheme="yellow"
            width="80%"
            bg="coolGray.700"
            rounded="md"
            shadow={3}
            onPress={() => {
              VerEstado();
            }}
          >
            <Center mt="5">
              <FontAwesome5 name="opencart" mt="10" color="#f2aa00" size={30} />
              <Text color="white" bold>
                Fazer Pedido
              </Text>{" "}
              {/* <Spinner color="warning.500" /> */}
            </Center>
          </Button>
        )}
      </HStack>

      {/* <View style={styles.container}>
        <Camera style={styles.camera} type={type}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Text style={styles.text}> Flip </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View> */}

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
    </View>
  );
};

export default EntregaScreen;

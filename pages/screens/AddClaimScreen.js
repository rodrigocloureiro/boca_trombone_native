import {
  Select,
  Box,
  CheckIcon,
  Center,
  Input,
  TextArea,
  Button,
  NativeBaseProvider,
} from "native-base";
import { useState } from "react";

export default function AddClaim({ data }) {
  const [selectedCompany, setSelectedCompany] = useState("");
  return (
    <NativeBaseProvider>
      <Center>
        <Box maxW="300">
          <Select
            selectedValue={selectedCompany}
            minWidth="90%"
            marginY={2.5}
            accessibilityLabel="Escolha uma empresa"
            placeholder="Escolha uma empresa"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setSelectedCompany(itemValue)}
          >
            {data.map((item) => (
              <Select.Item label={item.nome} value={item.nome} key={item.id} />
            ))}
          </Select>
          <Input placeholder="Nome" w="100%" marginY={2.5} />
          <Input placeholder="Sobrenome" w="100%" marginY={2.5} />
          <Input placeholder="@username" w="100%" marginY={2.5} />
          <TextArea
            h={20}
            placeholder="Escreva sua reclamação"
            w="75%"
            maxW="300"
            marginY={2.5}
          />
          <Button onPress={() => console.log("hello world")} marginY={2.5}>
            Enviar reclamação
          </Button>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}

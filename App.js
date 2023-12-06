import { GluestackUIProvider, Image, Button, ButtonText, Text, Switch, HStack, FormControlLabelText, Box, Center, Heading, FormControl, FormControlLabel, FormControlErrorText, Input, InputField } from '@gluestack-ui/themed';
import { useState } from "react";
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme

import homem from "./assets/mm-removebg-preview.png"
import mulher from "./assets/ff-removebg-preview.png"

export default function App() {
  const [peso, setPeso] = useState("72")
  const [altura, setAltura] = useState("1.70")
  const [sexo, setSexo] = useState(false)
  const [resultado, setResultado] = useState("")

  const calcularHandle = () => {
      let alturaConvertida = parseFloat(altura)
      let result  = 0

      if (altura>2.2) {
          setResultado("Altura deve ser menor que 2.2")
          return;
      }

      if (sexo) {
          result = (62.1*alturaConvertida)-44.7
      } else {
          result = (72.7*alturaConvertida)-58
      }
      

      setResultado(Math.round(result))
  }

  const limparHandle = () => {
      setPeso("72")
      setAltura("1.70")
      setSexo(false)
      setResultado("")
  }

  return (
    <GluestackUIProvider config={config}>
      <Box p="$2" h={"#full"} w={"#full"} borderRadius={"$md"}>
        <Center  h={"$full"}>
          <Heading>Peso Ideal</Heading>
          <FormControl>
            <FormControlLabel>
              <FormControlErrorText>Peso</FormControlErrorText>
            </FormControlLabel>
            <Input w={100} h={35}>
              <InputField value={peso} onChangeText={setPeso} keyboardType='numeric'/>
            </Input>
            <FormControlLabel>
              <FormControlErrorText>Altura</FormControlErrorText>
            </FormControlLabel>
            <Input w={100} h={35}>
              <InputField value={altura} onChangeText={setAltura} keyboardType='number-pad'/>
            </Input>
            <FormControlLabel>
                  <FormControlLabelText>Sexo</FormControlLabelText>
                </FormControlLabel>
                <HStack w={"$full"} space="md" justifyContent="center" alignItems="center">
                    <FormControlLabelText>Homem</FormControlLabelText>
                    <Switch value={sexo} onValueChange={setSexo} />
                    <FormControlLabelText>Mulher</FormControlLabelText>
                </HStack>
                <Box display='flex' flexDirection='row' justifyContent='space-between'>
                <Button onPress={calcularHandle} bg='#5361ac'>
                    <ButtonText>Calcular</ButtonText>
                </Button>
                <Button onPress={limparHandle} bg='#5361ac'>
                    <ButtonText>Limpar</ButtonText>
                </Button>
                <Box justifyContent="space-between" alignItems="center" height={100} flexDirection="row">
                    <Text>Resultado</Text>
                    <Text fontWeight="$bold">{resultado}</Text>
                </Box>
                </Box>
          </FormControl>
          <Image source={sexo ? mulher : homem} alt="imagem do tipo do sexo"/>
        </Center>
      </Box>
    </GluestackUIProvider>
  );
}
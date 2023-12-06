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
      <Box p="$2" h={"#full"} w={"#full"} borderRadius={"$md"} display='flex' justifyContent='center' alignSelf='center'>
        <Center  h={"$full"} alignSelf='center'>
          <Heading color='#285b99'>Peso Idea</Heading>
          <FormControl>
            <FormControlLabel>
              <FormControlErrorText fontSize={20} color='#285b99'>Peso</FormControlErrorText>
            </FormControlLabel>
            <Input w={"#full"} h={35}>
              <InputField value={peso} onChangeText={setPeso} keyboardType='numeric'/>
            </Input>
            <FormControlLabel>
              <FormControlErrorText fontSize={20} paddingTop={10} color='#285b99'>Altura</FormControlErrorText>
            </FormControlLabel>
            <Input w={"#full"} h={35}>
              <InputField value={altura} onChangeText={setAltura} keyboardType='number-pad'/>
            </Input>
            <FormControlLabel>
                  <FormControlLabelText fontSize={20} paddingTop={10} color='#285b99'>Sexo</FormControlLabelText>
                </FormControlLabel>
                <HStack w={"$full"} space="md" alignItems="center">
                    <FormControlLabelText color='#247cc0'>Homem</FormControlLabelText>
                    <Switch value={sexo} onValueChange={setSexo} />
                    <FormControlLabelText color='#f6447a'>Mulher</FormControlLabelText>
                </HStack>
                <Box display='flex' flexDirection='row' justifyContent='space-around'>
                <Button onPress={calcularHandle} bg='#124a87'>
                    <ButtonText>Calcular</ButtonText>
                </Button>
                <Button onPress={limparHandle} bg='#124a87'>
                    <ButtonText>Limpar</ButtonText>
                </Button>
                </Box>
                <Box justifyContent="space-between" alignItems="center" height={100} flexDirection="row">
                    <Text fontSize={20} color='#285b99'>Resultado:</Text>
                    <Text fontWeight="$bold">{resultado}</Text>
                </Box>
          </FormControl>
          <Image source={sexo ? mulher : homem} alt="imagem do tipo do sexo" w={200} h={200}/>
        </Center>
      </Box>
    </GluestackUIProvider>
  );
}
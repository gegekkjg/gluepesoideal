import { GluestackUIProvider, Text, Box, Center, Heading } from '@gluestack-ui/themed';
import { useState } from "react";
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme

import homem from "./assets/homem.png"
import mulher from "./assets/mulher.png"

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
      <Box  width="100%" h={'$full'} justifyContent="center" alignItems="center" gap={'$5'} p={'$5'}>
        <Center  h={"$full"}>
          <Heading>Peso Ideal</Heading>
        </Center>
      </Box>
    </GluestackUIProvider>
  );
}
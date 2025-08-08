import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

interface BotaoPersonalizadoProps {
 titulo: string;
 onPress: () => void;
}

function BotaoPersonalizado(props: BotaoPersonalizadoProps) {
 return (
  // <View style={styles.botao}>
  //   <Text style={styles.textoBotao}>{props.titulo}</Text>
  // </View>
  <TouchableOpacity style={styles.botao} onPress={props.onPress}>
      <Text style={styles.textoBotao}>{props.titulo}</Text>
  </TouchableOpacity>
 );
}

export default function App() {
//   const [contador, setContador] = useState<number>(0);
  
//   return (
//     <View style={ styles.container}>
//       {/* <View>
//         <Text style={styles.titulo}>Botões ( ͠❛ ͜ʖ ͡❛)</Text>
//         <BotaoPersonalizado titulo="(Não) Clique Aqui" />
//         <Image
//           source={{uri:'https://i.imgflip.com/k9arm.jpg'}}
//           style={{width:400, height:300}}
//           resizeMode="contain"
//         />
//         <BotaoPersonalizado titulo="(Não) Saiba Mais" />
//       </View> */}
//       <View>
//         <Text style={styles.titulo}>
//           {contador === 0 ? 'Nenhum clique ainda' : `Cliques: ${contador}`}
//         </Text>
//         <BotaoPersonalizado titulo="Clicks ++" onPress={() => setContador(contador + 1)} />
//         <BotaoPersonalizado titulo="Clicks --" onPress={() => setContador(contador - 1)} />
//       </View>
//     </View>

//  );

  const [selecionado, setSelecionado] = useState<boolean>(false);
  return (
    <View style={{marginTop: 50}}>
      <Text style={[styles.texto, styles.titulo]}>Notícia</Text>
      <Text style={styles.texto}>Data da notícia</Text>
      <Text style={selecionado?styles.textoDestacado : styles.texto}>Conteúdo da notícia</Text>
      <Text style={styles.texto}>Autor da notícia</Text>
      <TouchableOpacity onPress={() => setSelecionado(!selecionado)} style={styles.botao}>
        <Text>Alternar estilo</Text>
      </TouchableOpacity>
    </View>
  );


}

const styles = StyleSheet.create({
 botao: {
 backgroundColor: '#4CAF50',
 padding: 10,
 borderRadius: 5,
 alignItems: 'center',
 marginTop: 10,
 },
 texto: {
 fontFamily: 'System',
 marginBottom: 15,
 padding: 5,
 },
 titulo: {
 fontSize: 24
 },
 textoDestacado: {
 color: '#0066CC',
 fontWeight: 'bold',
 backgroundColor: '#E6F0FF',
 }
});

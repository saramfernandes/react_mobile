import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const formatarData = () => {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem vinda Sara</Text>
      <Text style={{color:'#000000', fontSize: 18}}>Hoje é dia {formatarData()}</Text>
      <Image
        source={{uri:'https://ih1.redbubble.net/image.5245505399.3981/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'}}
        style={{width:300, height:300}}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface BotaoPersonalizadoProps {
 titulo: string;
 //onPress: () => void;
}

function BotaoPersonalizado(props: BotaoPersonalizadoProps) {
 return (
  <View style={styles.botao}>
    <Text style={styles.textoBotao}>{props.titulo}</Text>
  </View>
 );
}

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={styles.titulo}>Título</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <BotaoPersonalizado titulo="Clicks ++" />
        </View>
        <View style={{  flex: 1, justifyContent: 'center' }}>
           <BotaoPersonalizado titulo="Clicks ++" />
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
         <BotaoPersonalizado titulo="Clicks ++" />
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
         <BotaoPersonalizado titulo="Clicks ++" />
      </View>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
           <BotaoPersonalizado titulo="Clicks ++" />
        </View>
        <View style={{  flex: 1,  justifyContent: 'center' }}>
           <BotaoPersonalizado titulo="Clicks ++" />
        </View>
      </View>
      <View style={{ flex: 1}}>
         <Text style={{fontSize: 24, marginTop: 60 }}>Rodapé</Text>
      </View>
    </View>
 );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  titulo: { fontSize: 24, marginBottom: 20, justifyContent: 'center', textAlign: 'center', marginTop: 60 },
  botao: { backgroundColor: '#0066CC', padding: 10, borderRadius: 5, margin: 5 },
  textoBotao: { color: 'white', fontWeight: 'bold' }
});

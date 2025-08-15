import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const palavras = [
    "O Senhor é o meu pastor; nada me faltará. (Salmos 23:1)",
    "Tudo posso naquele que me fortalece. (Filipenses 4:13)",
    "Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento. (Provérbios 3:5)",
    "Amarás o teu próximo como a ti mesmo. (Mateus 22:39)", 
    "E conhecereis a verdade, e a verdade vos libertará. (João 8:32)",
    "Buscai primeiro o Reino de Deus e a sua justiça, e todas estas coisas vos serão acrescentadas. (Mateus 6:33)",
    "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna. (João 3:16)",
    "Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados e nos purificar de toda injustiça. (1 João 1:9)",
    "A esperança que se adia faz adoecer o coração, mas o desejo cumprido é árvore de vida. (Provérbios 13:12)",
    "O amor é paciente, o amor é bondoso. Não inveja, não se vanglória, não se orgulha. (1 Coríntios 13:4)",
    "Porque, onde estiver o vosso tesouro, aí estará também o vosso coração. (Mateus 6:21)",
    "O Senhor é a minha rocha, a minha fortaleza e o meu libertador; o meu Deus é o meu rochedo, em quem me refugio. (Salmo 18:2)",
    "Porque Deus não nos deu espírito de covardia, mas de poder, de amor e de equilíbrio. (2 Timóteo 1:7)",
    "Aquele que semeia com lágrimas, comemorará com canções de alegria. (Salmo 126:5)",
    "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento. (Provérbios 3:5)",
    "Os que confiam no Senhor renovam as suas forças. (Isaías 40:31)",
    "Se Deus é por nós, quem será contra nós? (Romanos 8:31)",
    "Lâmpada para os meus pés é a tua palavra, e luz para o meu caminho. (Salmo 119:105)",
    "O Senhor te guardará de todo mal; ele guardará a tua vida. (Salmo 121:7)"
  ];

  const [mensagem, setMensagem] = useState('Quebre o biscoito e leia a palavra do dia :)');
  const [quebrado, setQuebrado] = useState(false);
  const [imagem, setImagem] = useState('https://app-biscoito-da-sorte.vercel.app/src/biscoito.png');

  const atualizaMensagem = () => {
    const indice = Math.floor(Math.random() * palavras.length);
    setMensagem(palavras[indice]);
    setQuebrado(true);
    setImagem('https://app-biscoito-da-sorte.vercel.app/src/biscoitoAberto.png');
  };

  const novoBiscoito = () => {
    setMensagem('Quebre o biscoito e leia a palavra do dia :)');
    setQuebrado(false);
    setImagem('https://app-biscoito-da-sorte.vercel.app/src/biscoito.png');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imagem }}
        style={{ width: 300, height: 300 }}
        resizeMode="contain"
      />
      <Text style={styles.titulo}>{mensagem}</Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#20B2AA' }]}
        onPress={quebrado ? novoBiscoito : atualizaMensagem}
      >
        <Text style={styles.buttonText}>
          {quebrado ? 'Novo Biscoito' : 'Quebrar o Biscoito'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FFF0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  button: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    width: '50%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

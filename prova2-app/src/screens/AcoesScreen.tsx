import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import api from "../api/api";
import CardComponent from "../components/CardComponent";

export default function AcoesScreen() {
  const [acoes, setAcoes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchAcoes = async () => {
    try {
      const response = await api.get("/");
      const data = response.data.results.stocks;
      const lista = Object.keys(data).map((key) => ({
        nome: key,
        valor: data[key].points,          
        variacao: data[key].variation,    
      }));
      setAcoes(lista);
    } catch (e) {
      console.error("Erro ao buscar ações", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAcoes();
  }, []);

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#f2f2f2" }}>
      <FlatList
        data={acoes}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <CardComponent
            nome={item.nome}
            compra={item.valor}
            venda={item.valor}
            variacao={item.variacao}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

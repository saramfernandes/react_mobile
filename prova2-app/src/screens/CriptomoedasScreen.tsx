import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import api from "../api/api";
import CardComponent from "../components/CardComponent";

export default function CriptosScreen() {
  const [criptos, setCriptos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCriptos = async () => {
    try {
      const response = await api.get("/");
      const results = response.data.results;

      let lista: any[] = [];

      if (results.cryptos) {
        lista = Object.keys(results.cryptos).map((key) => ({
          nome: key,
          ...results.cryptos[key],
        }));
      }
      else if (results.bitcoin) {
        lista = Object.keys(results.bitcoin).map((key) => ({
          nome: key,
          ...results.bitcoin[key],
        }));
      }

      setCriptos(lista);
    } catch (e) {
      console.error("Erro ao buscar criptos", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCriptos();
  }, []);

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#f2f2f2" }}>
      <FlatList
        data={criptos}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <CardComponent
            nome={item.nome}
            compra={item.buy}
            venda={item.sell}
            variacao={item.variation}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

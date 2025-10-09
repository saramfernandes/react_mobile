import React, { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import api from "../api/api";
import CardComponent from "../components/CardComponent";

export default function MoedasScreen() {
  const [moedas, setMoedas] = useState<any[]>([]);

  const fetchMoedas = async () => {
    try {
      const response = await api.get("/");
      const data = response.data.results.currencies;
      const lista = Object.keys(data).map((key) => ({
        nome: key,
        ...data[key],
      }));
      setMoedas(lista);
    } catch (e) {
      console.error("Erro ao buscar moedas", e);
    } 
  };

  useEffect(() => {
    fetchMoedas();
  }, []);


  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={moedas}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <CardComponent
            nome={item.nome}
            compra={item.buy}
            venda={item.sell}
            variacao={item.variation}
          />
        )}
      />
    </View>
  );
}

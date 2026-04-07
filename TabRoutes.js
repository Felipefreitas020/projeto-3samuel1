import { View, Text, Button } from 'react-native';

export default function Home({ route, navigation }) {
  const usuario = route.params?.usuario;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>
        Bem-vindo, {usuario} 👋
      </Text>

      <Button
        title="Ir para Perfil"
        onPress={() => navigation.navigate('Perfil')}
      />
    </View>
  );
}
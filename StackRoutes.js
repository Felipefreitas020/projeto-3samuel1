import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useState } from 'react';

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  function logar() {
    if (usuario === 'admin' && senha === '123') {
      navigation.replace('Tabs', { usuario });
    } else {
      Alert.alert('Erro', 'Usuário ou senha inválidos');
    }
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Login</Text>

      <TextInput
        placeholder="Usuário"
        onChangeText={setUsuario}
        style={{ borderWidth: 1, marginVertical: 10 }}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        onChangeText={setSenha}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <Button title="Entrar" onPress={logar} />
    </View>
  );
}
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function FriendDetailsScreen({ navigation, route }) {
  const { friendName, justification, imitation } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{friendName}</Text>
      <Text>{justification}</Text>
      <Text>Imitação desejada: {imitation}</Text>
      <Button title="Voltar para a tela anterior" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Escolha seus amigos' }}
        />
        <Stack.Screen
          name="FriendDetails1"
          component={FriendDetailsScreen}
          options={{ title: 'Detalhes do Amigo 1' }}
        />
        <Stack.Screen
          name="FriendDetails2"
          component={FriendDetailsScreen}
          options={{ title: 'Detalhes do Amigo 2' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Selecione um amigo para ver os detalhes:</Text>
      <Button
        title=" Helo/Lolo"
        onPress={() =>
          navigation.navigate('FriendDetails1', {
            friendName: 'Helo/Lolo',
            justification: 'Este é um amigo de confiança porque sempre está comigo quando preciso, me apoia em tudo e foi a irmã que a vida me deu.',
            imitation: 'imite uma abelha'
          })
        }
      />
      <Button
        title="Eve"
        onPress={() =>
          navigation.navigate('FriendDetails2', {
            friendName: 'Eve',
            justification: 'Este é um amigo de confiança porque apesar de tudo esta me aguentando todos esse anos e esta comigo sempre.',
            imitation: 'Imitação de um gato'
          })
        }
      />
    </View>
  );
}

export default App;
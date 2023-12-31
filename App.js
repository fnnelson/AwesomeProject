import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
import Home from "./screens/Home";
import ColorPalette from "./screens/ColorPalette";

const App = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={({ route }) => ({ title: route.params.paletteName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import ColorBox from "./components/ColorBox";

const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>Here are some boxes of different colors</Text>
        <ColorBox colorName="Cyan" hexCode="#2aa198" />
        <ColorBox colorName="Blue" hexCode="#268bd2" />
        <ColorBox colorName="Magenta" hexCode="#d33682" />
        <ColorBox colorName="Orange" hexCode="#cb4b16" />
        <FlatList
          style={{ padding: 20 }}
          data={COLORS}
          keyExtractor={item => item.colorName}
          renderItem={({ item }) => (
            <View>
              <Text>{item.colorName}: {item.hexCode}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 10, //correspond to density-independent pixels (?)
  },
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
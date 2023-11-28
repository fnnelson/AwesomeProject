import { FlatList, StyleSheet, Text, View } from "react-native";
import ColorBox from "../components/ColorBox";

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

const ColorPalette = () => {
    return (

        <View style={styles.container}>
            <FlatList
                style={{ padding: 20 }}
                data={COLORS}
                keyExtractor={item => item.colorName}
                renderItem={({ item }) => (
                    <View>
                        <ColorBox colorName={item.colorName} hexCode={item.hexCode} textColor={item.textColor} />
                    </View>
                )}
                ListHeaderComponent={<Text style={styles.text}>Solarized</Text>}
            //note: could also have an anonymous function that returns a component in the header if it's bigger
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingHorizontal: 10, //correspond to density-independent pixels (?)
        backgroundColor: 'white',
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ColorPalette;
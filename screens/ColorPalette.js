import { FlatList, StyleSheet, Text, View } from "react-native";
import ColorBox from "../components/ColorBox";

const ColorPalette = ({ route }) => {
    const { colors, paletteName } = route.params;
    return (

        <View style={styles.container}>
            <FlatList
                style={{ padding: 20 }}
                data={colors}
                keyExtractor={item => item.colorName}
                renderItem={({ item }) => (
                    <View>
                        <ColorBox
                            colorName={item.colorName}
                            hexCode={item.hexCode}
                            textColor={item.textColor}
                        />
                    </View>
                )}
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
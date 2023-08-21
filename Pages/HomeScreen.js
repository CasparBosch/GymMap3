// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Image,
} from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, padding: 16 }}>
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 25,
                            textAlign: "center",
                            marginBottom: 16,
                            color: "#00108b",
                        }}
                    >
                        Gym Globetrotter
                    </Text>
                    <Image
                        style={styles.image}
                        source={require("./images/Logo.png")}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                            navigation.navigate("MapStack", { screen: "Maps" })
                        }
                    >
                        <Text
                            style={{
                                fontSize: 15,
                                textAlign: "center",
                                color: "#ffffff",
                            }}
                        >
                            Go to Map Tab
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                            navigation.navigate("SettingsStack", {
                                screen: "Settings",
                            })
                        }
                    >
                        <Text
                            style={{
                                fontSize: 15,
                                textAlign: "center",
                                color: "#ffffff",
                            }}
                        >
                            Go to Settings Tab
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "40%",
    },
    image2: {
        resizeMode: "",
    },
    button: {
        alignItems: "center",
        backgroundColor: "#00108b",
        padding: 10,
        width: 150,
        marginTop: 16,
        color: "#ffffff",
    },
    container: {
        backgroundColor: "#ffffff",
        flex: 1,
    },
});
export default HomeScreen;

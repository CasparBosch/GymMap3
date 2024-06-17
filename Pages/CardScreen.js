import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

const CardScreen = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [gyms, setGyms] = useState([]);

    const getGyms = async () => {
        try {
            const response = await fetch(
                "https://stud.hosted.hr.nl/1004288/api/gyms.json",
            {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            }
            );
            const json = await response.json();
            setGyms(gyms);
            console.log(gyms);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
        return json
    };

    useEffect(() => {
        console.log(setGyms)
        getGyms();
    }, []);
    return (
        <SafeAreaView style={{ backgroundColor: "#ffffff" }}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <ScrollView contentContainerStyle={styles.container}>
                    <Text style={styles.title}>BJJ Gyms</Text>

                    {gyms?.map((gym) => {
                        return (
                            <TouchableOpacity
                                key={gym.id}
                                onPress={() =>
                                    navigation.navigate("CardDetails", {
                                        id: gym.id,
                                    })
                                }
                            >
                                <View style={styles.card}>
                                    <View style={styles.cardLikeWrapper}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                // handle onPress
                                            }}
                                        ></TouchableOpacity>
                                    </View>

                                    <View style={styles.cardTop}>
                                    </View>

                                    <View style={styles.cardBody}>
                                        <View style={styles.cardHeader}>
                                            <Text style={styles.cardTitle}>
                                                {gym.name}
                                            </Text>
                                        </View>

                                        <View style={styles.cardFooter}>
                                            <Text style={styles.cardReviews}>
                                                {gym.description}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            )}
        </SafeAreaView>
    );
};

export default CardScreen;

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    title: {
        fontSize: 32,
        fontWeight: "700",
        color: "#1d1d1d",
        marginBottom: 12,
    },
    card: {
        position: "relative",
        borderRadius: 8,
        backgroundColor: "#0018ce",
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    cardLike: {
        width: 48,
        height: 48,
        borderRadius: 9999,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    cardLikeWrapper: {
        position: "absolute",
        Index: 1,
        top: 12,
        right: 12,
    },
    cardTop: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardImg: {
        width: "100%",
        height: 160,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardBody: {
        padding: 12,
    },
    cardHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    cardTitle: {
        fontSize: 17,
        fontWeight: "500",
        color: "#ffffff",
    },
    cardPrice: {
        fontSize: 15,
        fontWeight: "400",
        color: "#232425",
    },
    cardFooter: {
        marginTop: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    cardStars: {
        marginLeft: 2,
        marginRight: 6,
        fontSize: 14,
        fontWeight: "500",
        color: "#232425",
    },
    cardReviews: {
        fontSize: 14,
        fontWeight: "400",
        color: "#ffffff",
    },
});

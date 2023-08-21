import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useEffect, useState, useContext } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Switch } from "react-native";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../config/ThemeContext";

const SettingsPage = () => {
    const theme = useContext(themeContext);
    const [mode, setMode] = useState(false);

    const renderGeneralSettings = () => {
        return (
            <View style={styles.settingsContainer}>
                <View
                    style={[styles.categoryItem, { borderColor: theme.color }]}
                >
                    <MaterialCommunityIcons
                        name="shield-moon"
                        size={24}
                        style={[styles.icon, { color: theme.color }]}
                    />
                    <Text style={[styles.categoryText, { color: theme.color }]}>
                        Dark Mode{" "}
                    </Text>
                    <Switch
                        value={mode}
                        onValueChange={() => {
                            setMode((value) => !value);
                            EventRegister.emit("changeTheme", mode);
                        }}
                    />
                </View>
            </View>
        );
    };

    const renderOtherSettings = () => {
        return (
            <View style={styles.settingsContainer}>
                <TouchableOpacity
                    style={[styles.categoryItem, { borderColor: theme.color }]}
                >
                    <MaterialCommunityIcons
                        name="information-outline"
                        size={24}
                        style={[styles.icon, { color: theme.color }]}
                    />
                    <Text style={[styles.icon, { color: theme.color }]}>
                        About Us
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.categoryItem, { borderColor: theme.color }]}
                >
                    <MaterialCommunityIcons
                        name="shield-lock-outline"
                        size={24}
                        style={[styles.icon, { color: theme.color }]}
                    />
                    <Text style={[styles.icon, { color: theme.color }]}>
                        Privacy Policy
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Text style={[styles.heading, { color: theme.color }]}>
                Algemeen
            </Text>
            {renderGeneralSettings()}
            <Text style={[styles.heading, { color: theme.color }]}>Overig</Text>
            {renderOtherSettings()}
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 40,
        backgroundColor: "#fff",
    },
    heading: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 16,
    },
    searchBarContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
        width: "90%",
    },
    searchInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#333",
        borderRadius: 8,
        padding: 8,
        marginRight: 8,
        color: "#333",
    },
    searchButton: {
        backgroundColor: "#333",
        padding: 8,
        borderRadius: 8,
    },
    searchIcon: {
        color: "#fff",
    },
    settingsContainer: {
        flex: 1,
        justifyContent: "start",
        alignItems: "left",
    },
    categoryItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#333",
        borderRadius: 8,
        padding: 8,
        width: "90%", // Adjust the width as needed
    },
    icon: {
        marginRight: 16,
        color: "#333",
    },
    categoryText: {
        fontSize: 16,
        color: "#333",
    },
};

export default SettingsPage;

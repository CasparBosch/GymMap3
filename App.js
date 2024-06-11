import * as React from "react";

import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { EventRegister } from "react-native-event-listeners";
import theme from "./config/Theme";
import themeContext from "./config/ThemeContext";

import HomeScreen from "./Pages/HomeScreen";
import MapScreen from "./Pages/MapScreen";
import CardScreen from "./Pages/CardScreen";
import SettingsScreen from "./Pages/SettingsScreen";
import CardDetails from "./Pages/CardDetails";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}

function SettingsStack() {
    return (
        <Stack.Navigator
            initialRouteName="Settings"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
}

function CardStack() {
    return (
        <Stack.Navigator
            initialRouteName="Card"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="CardScreen" component={CardScreen} />
            <Stack.Screen name="CardDetails" component={CardDetails} />
        </Stack.Navigator>
    );
}

function MapStack() {
    return (
        <Stack.Navigator
            initialRouteName="Map"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Map" component={MapScreen} />
        </Stack.Navigator>
    );
}

function Tabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerStyle: { backgroundColor: "#00108b" },
                headerTitleStyle: {
                    color: "#fdeb63",
                },
                headerTintColor: "#fdeb63",
                headerTitleStyle: { fontWeight: "bold" },
                tabBarActiveTintColor: "#fbfdbf",
                tabBarInactiveTintColor: "#fdeb63",
                tabBarStyle: {
                    backgroundColor: "#00108b",
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "HomeStack") {
                        iconName = focused
                            ? "home-circle"
                            : "home-circle-outline";
                    } else if (route.name === "MapStack") {
                        iconName = focused
                            ? "map-marker"
                            : "map-marker-outline";
                    } else if (route.name === "ProfileStack") {
                        iconName = focused
                            ? "account-settings"
                            : "account-settings-outline";
                    } else if (route.name === "SettingsStack") {
                        iconName = focused ? "cog" : "cog-outline";
                    }
                    return (
                        <MaterialCommunityIcons
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    );
                },
            })}
        >
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    tabBarLabel: "Home",
                    // tabBarIcon: ({})=>{
                    //     return (
                    //         <View style={{alignItems: "center", justifyContent: "center"}}>
                    //             <Entypo name="home" size={24} />
                    //         </View>
                    //     )
                    // },
                    title: "Home",
                }}
            />
            <Tab.Screen
                name="MapStack"
                component={MapStack}
                options={{
                    tabBarLabel: "Map",
                    
                    title: "Map",
                }}
            />
            <Tab.Screen
                name="CardStack"
                component={CardStack}
                options={{
                    tabBarLabel: "Collection",
                    
                    title: "Collection",
                }}
            />
            <Tab.Screen
                name="SettingsStack"
                component={SettingsStack}
                options={{
                    tabBarLabel: "Settings",
                    
                    title: "Settings",
                }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    const [mode, setMode] = useState("false");

    useEffect(() => {
        let eventListener = EventRegister.addEventListener(
            "changeTheme",
            (data) => {
                setMode(data);
            }
        );

        return () => {
            EventRegister.removeEventListener(eventListener);
        };
    });
    return (
        <themeContext.Provider
            value={mode === false ? theme.dark : theme.light}
        >
            <NavigationContainer
                theme={mode === false ? DarkTheme : DefaultTheme}
            >
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Tabs" component={Tabs} />
            </Stack.Navigator>
        </NavigationContainer>
        </themeContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

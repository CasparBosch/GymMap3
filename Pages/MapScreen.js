import MapView, { PROVIDER_GOOGLE } from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps
import { Marker } from "react-native-maps";
import { useState, useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Dimensions,
    ActivityIndicator,
} from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function getRandomInRange(from, to) {
    return (Math.random() * (to - from) + from) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
}

let latitude = getRandomInRange(51.98866209831071, 51.98963887910085);
let longitude = getRandomInRange(4.47194966748312, 4.4748921289775865);


const MapScreen = () => {
    const [isLoading, setLoading] = useState(true);
    const [dark, setDark] = useState(false);
    const [gyms, setGyms] = useState([]);

    const getGyms = async () => {
        try {
            const response = await fetch(
                "https://stud.hosted.hr.nl/1004288/api/gyms.json"
            );
            const json = await response.json();
            setGyms(data);
            console.log(gyms);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getGyms();
    }, []);


    console.log(gyms);
    console.log(latitude)
    console.log(longitude)
    const markers = gyms.map((gym) => {
            return (
                <Marker
                    key={gym.id}
                    coordinate={{
                        latitude: getRandomInRange(51.96946209831071, 51.99993887910085),
                        longitude: getRandomInRange(4.4297966748312, 4.4989921299775865),
                    }}
                    title={gym.name}
                    description={gym.description}
                >
                </Marker>
            );      
        })

       


    return (
        <View style={styles.container}>
             {isLoading ? (
                <ActivityIndicator />
            ) : (
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                customMapStyle={dark ? customStyle : null}
                region={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                showsUserLocation={true}
            >
                <TouchableOpacity
                    onPress={() => setDark(!dark)}
                    style={{
                        backgroundColor: "#FFF",
                        height: 30,
                        borderRadius: 15,
                        width: 30,
                        alignItems: "center",
                        justifyContent: "center",
                        position: "absolute",
                        marginTop: 60,
                        alignSelf: "flex-end",
                        right: 20,
                    }}
                >
                    <FontAwesome name="adjust" size={30} />
                </TouchableOpacity>
                    {markers}
                
                
            </MapView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    map: {
        width: deviceWidth,
        height: deviceHeight,
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0018ce",
    },
});
const customStyle = [
    {
        elementType: "geometry",
        stylers: [
            {
                color: "#1d2c4d",
            },
        ],
    },
    {
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#8ec3b9",
            },
        ],
    },
    {
        elementType: "labels.text.stroke",
        stylers: [
            {
                color: "#1a3646",
            },
        ],
    },
    {
        featureType: "administrative.country",
        elementType: "geometry.stroke",
        stylers: [
            {
                color: "#4b6878",
            },
        ],
    },
    {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#64779e",
            },
        ],
    },
    {
        featureType: "administrative.province",
        elementType: "geometry.stroke",
        stylers: [
            {
                color: "#4b6878",
            },
        ],
    },
    {
        featureType: "landscape.man_made",
        elementType: "geometry.stroke",
        stylers: [
            {
                color: "#334e87",
            },
        ],
    },
    {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [
            {
                color: "#023e58",
            },
        ],
    },
    {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
            {
                color: "#283d6a",
            },
        ],
    },
    {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#6f9ba5",
            },
        ],
    },
    {
        featureType: "poi",
        elementType: "labels.text.stroke",
        stylers: [
            {
                color: "#1d2c4d",
            },
        ],
    },
    {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#023e58",
            },
        ],
    },
    {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#3C7680",
            },
        ],
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [
            {
                color: "#304a7d",
            },
        ],
    },
    {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#98a5be",
            },
        ],
    },
    {
        featureType: "road",
        elementType: "labels.text.stroke",
        stylers: [
            {
                color: "#1d2c4d",
            },
        ],
    },
    {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
            {
                color: "#2c6675",
            },
        ],
    },
    {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
            {
                color: "#255763",
            },
        ],
    },
    {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#b0d5ce",
            },
        ],
    },
    {
        featureType: "road.highway",
        elementType: "labels.text.stroke",
        stylers: [
            {
                color: "#023e58",
            },
        ],
    },
    {
        featureType: "transit",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#98a5be",
            },
        ],
    },
    {
        featureType: "transit",
        elementType: "labels.text.stroke",
        stylers: [
            {
                color: "#1d2c4d",
            },
        ],
    },
    {
        featureType: "transit.line",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#283d6a",
            },
        ],
    },
    {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
            {
                color: "#3a4762",
            },
        ],
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [
            {
                color: "#0e1626",
            },
        ],
    },
    {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#4e6d70",
            },
        ],
    },
];

export default MapScreen;

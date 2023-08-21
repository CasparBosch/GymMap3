import React, { useEffect, useState } from "react";
import {SafeAreaView, StyleSheet,TouchableOpacity, Text, View, ActivityIndicator, ScrollView} from 'react-native';
import { useRoute } from "@react-navigation/native"




const CardDetails = ({navigation}) => {
    const [isLoading, setLoading] = useState(true);
    const [gyms, setGyms] = useState([]);

    const route = useRoute()
    const id = route.params.id

    const getGym = async () => {
        try {
            const response = await fetch(
                "https://stud.hosted.hr.nl/1004288/api/gyms.json" + id
            );
            const json = await response.json();
            setGyms(json.data);
            console.log(gyms);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getGym();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
         {isLoading ? (
                <ActivityIndicator />
            ) : (
        <ScrollView>
    <View>
    <Text style={styles.textStyling1}>Gym Name: {gyms.name}</Text>
    <Text style={styles.textStyling2}>Location: {gyms.location}</Text>
    <View style={{flexDirection:'row'}}>
    <Text style={styles.textStyling3}>description: {gyms.description}</Text>
    </View>
    <TouchableOpacity
    style={styles.viewStyling}
    onPress={() => navigation.navigate('CardScreen')}>
    <Text style = {styles.textStylingButton}>Back</Text>
    </TouchableOpacity>
    </View>
    </ScrollView>
            )}
    </SafeAreaView>
    )
}
export default CardDetails

const styles = StyleSheet.create({
    textStyling1: {
            fontSize: 22,
            fontStyle:'italic',
            color: '#0018ce'
    },
    textStyling2: {
            fontSize: 20,
            fontStyle:'italic',
            color: '#0018ce'
    },
    textStyling3: {
            fontSize: 20,
            fontStyle:'italic',
            color: '#0018ce'
    },
    cardImg: {
        width: '100%',
        height: 250,
      },
      button: {
        alignItems: 'center',
        backgroundColor: '#0018ce',
        padding: 10,
        width: 300,
        marginTop: 16,
        borderRadius: 20,
    
      },
    viewStyling: {
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
    },
    textStylingButton: {
            fontSize: 30,
            fontStyle:'italic',
            color: '#0018ce',
            padding: 5
    },
    container: {
        backgroundColor: "#ffffff",
        flex: 1,
    },
});
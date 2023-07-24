import React from 'react';
import { View, Text, Image, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeView({}) {
    const navigation = useNavigation();

   const homeImgs = [
        {
            id: 1,
            img: require("../assets/breakfast.jpg"),
            name: "Breakfast"
        },
        {
            id: 2,
            img: require("../assets/lunch.jpg"),
            name: "Lunch"
        },
        {
            id: 3,
            img: require("../assets/supper.jpg"),
            name: "Supper"
        }
    ]

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.logo}>Dzidzi</Text>
            </View>
            <View style={styles.heading1Container}>
                <Text style={styles.heading1}>Get Cooking Today</Text>
            </View>
            {
                homeImgs.map(homeImg => 
                    <View style={styles.card} key={homeImg.id}>
                        <Text style={styles.title}>{homeImg.name}</Text>
                        <TouchableOpacity
                            onPress={() => {navigation.navigate(homeImg.name)}}
                        ><Image style={styles.cardImg} source={homeImg.img}/></TouchableOpacity>
                    </View>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logoContainer: {
        marginBottom: 8
    },
    logo: {
        fontSize: 28,
        color: '#2C192F'
    },
    heading1Container: {
        marginBottom: 29
    },
    heading1: {
        fontSize: 32,
        color: '#2C192F'
    },
    card: {
        marginBottom: 20
    },
    title: {
        fontSize: 17
    },
    cardImg: {
        width: '100%',
        borderRadius: 8,
        height: 155
    }
})

export default HomeView;
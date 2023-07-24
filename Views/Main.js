import React from 'react';
import { SafeAreaView, ScrollView, View, StyleSheet, Platform, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeView from './HomeView';

function Main(props) {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView>
                {<HomeView/>}
            </ScrollView>
            <View style={styles.navContainer}>
                <View style={styles.navView}>
                    <TouchableOpacity><View><Icon name="home" size={33} color="#FFF"/></View></TouchableOpacity>
                    <TouchableOpacity><View><Icon name="search" size={33} color="#FFF"/></View></TouchableOpacity>
                    <TouchableOpacity><View><Icon name="comment" size={33} color="#FFF"/></View></TouchableOpacity>
                </View>
            </View>          
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: Platform.OS==="android" ? StatusBar.currentHeight : 0,
        paddingHorizontal: 10
    },
    navContainer: {
        flex: 1,
        alignItems: "center",
    },
    navView: {
        flexDirection: "row",
        backgroundColor: "#2C192F",
        justifyContent: "space-around",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: 321,
        height: 60,
        borderRadius: 205
    }
})

export default Main;
import React from 'react';
import { Image, View, Text, SafeAreaView, ScrollView, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import recipes from '../json/recipe';
import { useRoute, useNavigation } from "@react-navigation/native"

function Recipe() {

    const navigation = useNavigation();
    const route = useRoute();
    const id = route.params.id;

    return (
        <SafeAreaView style={styles.recipeContainer}>
            <View style={styles.navBar}>
                <Text onPress={() => navigation.navigate('Home')} style={styles.navBarText}>Dzidzi</Text>
                <Icon name="menu" size={33} color="#2C192F"/>
            </View>
            <ScrollView>
                <Text style={styles.recipeTitle}>{recipes[id-1].name}</Text>
                <Image style={styles.recipeImg} source={recipes[id-1].img}/>
                <Text style={styles.ingredients}>Ingredients</Text>
                <Text style={styles.ingredDetails}>{recipes[id-1].ingredients}</Text>
                <Text style={styles.instructions}>Instructions</Text>
                <Text style={styles.instrucDetails}>{recipes[id-1].ingredients}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    recipeContainer: {
        paddingTop: Platform.OS=== "android" ? StatusBar.currentHeight : 0,
        paddingHorizontal: 10,
        flex: 1
    },
    navBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        alignItems: "center"
    },
    navBarText: {
        fontSize: 24,
        color: "#2C192F"
    },
    recipeTitle: {
        fontSize: 44,
        color: "#2C192F",
        marginBottom: 10
    },
    recipeImg: {
        width: "100%",
        height: 168,
        resizeMode: "cover",
        marginBottom: 17
    },
    ingredients: {
        fontSize: 24
    },
    ingredDetails: {
        paddingLeft: 13
    },
    instructions: {
        marginTop: 15,
        fontSize: 24
    },
    instrucDetails: {
        paddingLeft: 13
    }
})

export default Recipe;
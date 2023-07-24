import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, Image, FlatList, ToastAndroid } from 'react-native';
import recipeCatStyles from '../style/recipeCategory';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import recipes from '../json/recipe'


const CardView = ({ id, cardImage, title }) => {

    const navigation = useNavigation();
    
   return ( <View style={recipeCatStyles.individualCard}>
        <TouchableOpacity
        onPress={() => {navigation.navigate('Recipe', {id})}}>
            <Image style={recipeCatStyles.individualImg} source={cardImage}/>
            <Text style={recipeCatStyles.individualText}>{title}</Text>
        </TouchableOpacity>
    </View>)
}
 
function Supper(props) {

    const navigation = useNavigation();

    return (

        <SafeAreaView style={recipeCatStyles.catContainer}>
            <View style={recipeCatStyles.navBar}>
                <Text onPress={() => navigation.navigate('Home')} style={recipeCatStyles.navBarText}>Dzidzi</Text>
                <Icon name="menu" size={33} color="#2C192F"/>
            </View>
            <Text style={recipeCatStyles.navBarTitle}>Supper</Text>
            <View style={recipeCatStyles.flatlist}>
                <FlatList
                    data={recipes}
                    renderItem={({item}) => <CardView id={item.id} cardImage={item.img} title={item.name}/>}
                    // keyExtractor={item => item.id.toString()}
                    key={'#'}
                    keyExtractor={item => "#" + item.id}
                    numColumns={2}
                    contentContainerStyle={recipeCatStyles.listContainer}
                />
            </View>
        </SafeAreaView>
    );
}

export default Supper;
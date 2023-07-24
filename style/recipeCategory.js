import { StyleSheet, StatusBar, Platform } from "react-native";

const recipeCatStyles = StyleSheet.create({
    catContainer: {
        paddingTop: Platform.OS=== "android" ? StatusBar.currentHeight : 0,
        paddingHorizontal: 10
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
    navBarTitle: {
        fontSize: 44,
        color: "#2C192F",
        marginBottom: 10
    },
    header: {

    },
    recipeCat: {

    },
    individualCard: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
        // These are comments
        // ...Platform.select({
        // ios: {
        //     shadowColor: 'rgba(0, 0, 0, 0.5)',
        //     shadowOffset: { width: 0, height: 1 },
        //     shadowOpacity: 0.8,
        //     shadowRadius: 4,
        // },
        // android: {
        //     elevation: 2,
        // },
        // })
    },
    individualImg: {
        width: 165,
        height: 207,
        resizeMode: "stretch",
        borderRadius: 15,
        justifyContent: "center"
    },
    individualText: {
        fontSize: 16,

    },

    listContainer: {
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 16,
        width: '100%',
    }
    
})

export default recipeCatStyles;
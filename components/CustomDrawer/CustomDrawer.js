import React from "react";
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView , DrawerItemList} from "@react-navigation/drawer";

const CustomDrawer = (props) => {
    return (

        //Customize Drawer 
        
        <DrawerContentScrollView {...props}>
        {/* // contentContainerStyle={{backgroundColor: '#ff1493'}}> */}
            {/* <ImageBackground 
            source={require('../../assets/image/pink-bg.jpg')} 
            style={{padding:20}}> */}
                {/* <Image 
                source={require('../../assets/image/profile.jpg')} 
                style={{height: 80, 
                        width: 80, 
                        borderRadius: 40, 
                        marginBottom: 5}}/>
                <Text 
                style={{color: '#fff', 
                        fontSize: 15, 
                        //fontFamily: 'Roboto-Medium'
                        }}> Kath Garcia </Text> */}
            {/* </ImageBackground> */}
            <View style={styles.mainContainer}>
            <View style={styles.header}></View>
            <View
          //The first row, which includes the YourOne title and the YourOne icon
          style={styles.titleBar}>
          <Image
            style={styles.imageYourOne}
            source={require("../../assets/image/YourOneLogo.jpg")}
          />
          <Text style={styles.titleText}>YourOne</Text>
          </View>
        </View>
            <View style={styles.View}>
            <DrawerItemList {...props}/> 
            <View>
        </View>
        </View> 
        </DrawerContentScrollView>
    )
}

export default CustomDrawer;

const styles = StyleSheet.create({
    mainContainer: { 
        flex: 1, 
        backgroundColor:"white",
        borderBottomWidth: 1, 
        padding: 5, 
        borderBottomColor: '#ccc',
        borderRadius: 15,
    },
    header: {
        //marginTop: 5,
        marginLeft: "5%",
        //marginBottom: 5,
        marginRight: "5%",
        flex: 2,
        flexDirection: "column",
        justifyContent: "space-evenly",
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 2,
    },
    titleText: {
        fontWeight: "bold",
        fontSize: 30,
        marginRight: 110, 
    },
    imageYourOne: {
        zIndex: 1,
        height: 45,
        width: 45,
        resizeMode: "contain",
    },
    border: {
        borderBottomWidth: 1, 
        padding: 5, 
        borderBottomColor: '#ccc',
        borderBottomEndRadius: 20, 
        borderBottomStartRadius: 20, 
    },
    View: {
        flex: 1, 
        backgroundColor: '#fff', 
        paddingTop: 5
    },
  });
  
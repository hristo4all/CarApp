import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {colors} from '../utils/colors';



export default function Card({title}) {
    return(
        <View style={styles.card}>
        <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{title}</Text>
        </View>
        <View style={styles.contentWrapper}>
        <View style={styles.cardMilage}>
            <Text style={styles.contentHeader}>Milage</Text>
            <Text style={styles.contentText}>250 000km</Text>
        </View>
        <View style={styles.cardFuel}>
            <Text style={styles.contentHeader}>Fuel Consumption</Text>
            <Text style={styles.contentText}>5/100km</Text>
        </View>
        <View style={styles.cardEngine}>
            <Text style={styles.contentHeader}>Engine Type</Text>
            <Text style={styles.contentText}>1.9TDI</Text>
        </View>
        </View>
      </View>
    )
}
const styles = StyleSheet.create({
    card:{
        margin:25,
        width:370,
        height:330,
        backgroundColor: colors.shadeMillerPink,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
          },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8, 
        alignItems:'center'
      },
      cardHeader :{
        width:370,
        height:50,
        backgroundColor:colors.black,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      cardTitle:{
        fontSize:24,
        color: colors.main,
        position:'absolute',
        margin:15,
      },
      contentHeader:{
        fontSize:18,
        fontWeight:"300",
      },
      contentText:{
        fontSize:18,
        fontWeight:"bold"
      },
      contentWrapper:{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
      },
    cardMilage:{
        padding:20,
    },
    cardFuel:{
        padding:20,
    },
    cardEngine:{
        paddingTop:5,
        paddingLeft:20,
    },      
})
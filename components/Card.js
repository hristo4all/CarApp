import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {colors} from '../utils/colors';



export default function Card({Cardtitle1, group1, group2, group3}) {
    return(
        <View style={styles.card}>
        <View style={styles.cardHeader}>
        <Text style={styles.cardTitleText}>{Cardtitle1}</Text>
        </View>
        <View style={styles.contentWrapper}>
        <View style={styles.cardMilage}>
            <Text style={styles.contentHeader}>{group1.title}</Text>
            <Text style={styles.contentText}>{group1.text}</Text>
        </View>
        <View style={styles.cardFuel}>
            <Text style={styles.contentHeader}>{group2.title}</Text>
            <Text style={styles.contentText}>{group2.text}</Text>
        </View>
        <View style={styles.cardEngine}>
            <Text style={styles.contentHeader}>{group3.title}</Text>
            <Text style={styles.contentText}>{group3.text}</Text>
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
        backgroundColor: colors.bg2,
        borderRadius: 20,
        borderWidth:0.5,
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
        borderWidth: 0.5,
      },
      cardTitleText:{
        fontSize:24,
        color: colors.main,
        position:'absolute',
        margin:15,
      },
      contentHeader:{
        fontSize:18,
        fontWeight:"400",
        color: colors.header2,
        
      },
      contentText:{
        fontSize:18,
        fontWeight:"bold",
        color: colors.white,
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
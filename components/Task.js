import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Task = ({text}) =>{
    return (
        <View style={styles.item}>
        <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text stlye={styles.itemText}>{text}</Text>
        </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // push left and right side to opposite ends
        marginBottom: 20,
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap', // if it gets too long wrap to the next line/row
    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: '#3EB489',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,

    },
    itemText:{
        maxWidth: '80%', // limit text width so it doesnt push other content out of the component
    },
    circular:{
        width:12,
        height:12,
        borderColor: '#3EB489',
        borderWidth:2,
        borderRadius: 5,
    },
});

export default Task;
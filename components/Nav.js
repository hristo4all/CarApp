import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image, ScrollView, SafeAreaView, Platform} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Card from './Card';
import plus from '../assets/plus.png';
import {colors} from '../utils/colors';


function Home() {
    return (
        <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.tasksWrapper}>
           <Card Cardtitle1={"Audi A3 8L 2001"}
                 group1={{title: "Milage", text:"250 000"} }
                 group2={{title: "Fuel Consumption", text:"5/100km"} }  
                 group3={{title: "Engile", text:"1.9TDI"} }  
                 height={370}
                 width={90}  
                 />
          </ScrollView>
     </SafeAreaView>
    );
  }
  
  function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Profile</Text>
            </View>
        </View>
    );
  }
  
  function Stats() {
    return (
        <View style={styles.container}>
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Live Data</Text>
            </View>
            <Card Cardtitle1={"Audi A3 8L 2001"}
                 group1={{title: "Milage", text:"250 000"} }
                 group2={{title: "Fuel Consumption", text:"5/100km"} }  
                 group3={{title: "Engile", text:"1.9TDI"} }  
                 height={370}
                 width={90}  
                 />
        </View>
    );
  }
  function Add() {
    return (
        <View style={styles.container}>
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Add</Text>
            </View>
        </View>
    );
  }

  
  
  const Tab = createBottomTabNavigator();
  
  export default function Nav() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: colors.main,
          tabBarStyle: {
               position: 'absolute',
               bottom:35,
               marginHorizontal:35,
               height:(Platform.OS === 'ios') ? 80 : 50,
               borderRadius:10,
               shadowColor:'000',
               shadowOpacity:0.06,
               shadowOffset:{width:10,height:10},
               paddingHorizontal:20,
               backgroundColor:colors.black
               
               },
          headerShown:false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          component={Add}
          options={{
            tabBarLabel: 'Add',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="plus" color={color} size={size} />
            ),
          }}
        />

          <Tab.Screen
          name=" "
          component={Add}
          options={{
            
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity>
                  <View style={{ 
                      width:60,
                      height:60,
                      borderRadius: 50,
                      backgroundColor:colors.main,
                      justifyContent:'center',
                      alignItems:'center'
                      }}>
                        <Image source={plus} style={{width:25,height:25, tintColor:'black'}} ></Image>
                  </View>
              </TouchableOpacity>
            ),
          }}
        />     

        <Tab.Screen
          name="LiveData"
          component={Stats}
          options={{
            tabBarLabel: 'Live Data',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="lightning-bolt" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />

      </Tab.Navigator>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.bg,
      
    },
    tasksWrapper:{
       paddingTop: 20,
       paddingHorizontal: 20,
       marginTop:20,
       alignContent:'center',
       alignItems:'center',
    },
    sectionTitle:{
      fontSize: 24,
      paddingTop: 15,
      fontWeight: 'bold',
      color: colors.white,
    },
    items:{
      marginTop:30,
    },
    smallCard:{
      margin:25,
      width:170,
      height:100,
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
  });
  
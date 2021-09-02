import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Task from './Task'
import plus from '../assets/plus.png'

function Home() {
    return (
        <View style={styles.container}>
        <View style={styles.tasksWrapper}>
           <Text style={styles.sectionTitle}>Today's Tasks</Text>
 
           <View style={styles.items}>
             <Task text={'Task 1'}/>
             <Task text={'Task 2'}/>
           </View>
 
        </View>
     </View>
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
                <Text style={styles.sectionTitle}>Statistics!</Text>
            </View>
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
          tabBarActiveTintColor: '#3EB489',
          tabBarStyle: {
               position: 'absolute',
               bottom:35,
               marginHorizontal:30,
               height:80,
               borderRadius:10,
               shadowColor:'000',
               shadowOpacity:0.06,
               shadowOffset:{width:10,height:10},
               paddingHorizontal:20,
               
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
                      width:50,
                      height:50,
                      borderRadius: "50%",
                      backgroundColor:'#3EB489',
                      justifyContent:'center',
                      alignItems:'center'
                      }}>
                        <Image source={plus} style={{width:25,height:25, tintColor:'white'}} ></Image>
                  </View>
              </TouchableOpacity>
            ),
          }}
        />     

        <Tab.Screen
          name="Statistics"
          component={Stats}
          options={{
            tabBarLabel: 'Statistics',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="poll" color={color} size={size} />
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
      backgroundColor: '#BDBDBD',
      
    },
    tasksWrapper:{
       paddingTop: 20,
       paddingHorizontal: 20,
       marginTop:30,
    },
    sectionTitle:{
      fontSize: 24,
      fontWeight: 'bold',
    },
    items:{
      marginTop:30,
    },       
  });
  
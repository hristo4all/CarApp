import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	ScrollView,
	SafeAreaView,
	Platform,
	FlatList,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "./Card";
import plus from "../assets/plus.png";
import { colors } from "../utils/colors";

function Home() {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={styles.tasksWrapper}>
				<Card
					Cardtitle1={"Audi A3 8L 2001"}
					group1={{ title: "Milage", text: "250 000" }}
					group2={{ title: "Fuel Consumption", text: "5/100km" }}
					group3={{ title: "Engile", text: "1.9TDI" }}
					height={370}
					/*width={80}*/
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
	const [records, setRecord] = useState([
		{ date: "20/5/2021", litres: 12, price: 2.41, key: "15" },
		{ date: "15/4/2021", litres: 30, price: 2.42, key: "14" },
	]);

	const sumAmount = records.reduce((a, v) => (a = a + v.litres * v.price), 0);
	const sumLitres = records.reduce((a, v) => (a = a + v.litres), 0);
	//sum.toFixed(2);

	return (
		<View style={styles.container}>
			<View style={styles.tasksWrapper}>
				<Text style={styles.sectionTitle}>Live Data</Text>
			</View>
			<View style={styles.total}>
				<Text style={styles.totalText}>
					Total Amount:{" "}
					<Text style={{ color: colors.white }}>{sumAmount.toFixed(2)}</Text>
				</Text>
			</View>
			<View style={styles.total}>
				<Text style={styles.totalText}>
					Total Litres:{" "}
					<Text style={{ color: colors.white }}>{sumLitres.toFixed(2)}</Text>
				</Text>
			</View>
			<View style={styles.field}>
				<FlatList
					data={records}
					renderItem={({ item }) => (
						<View style={styles.recordCard}>
							<View style={styles.record}>
								<Text style={styles.recordDate}>{item.date}</Text>
								<Text style={styles.recordText}>
									{item.litres} X {item.price}={item.litres * item.price}
								</Text>
							</View>
						</View>
					)}
				/>
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
				tabBarActiveTintColor: colors.main,
				tabBarStyle: {
					position: "absolute",
					bottom: 35,
					marginHorizontal: 35,
					height: Platform.OS === "ios" ? 80 : 50,
					borderRadius: 10,
					shadowColor: "000",
					shadowOpacity: 0.06,
					shadowOffset: { width: 10, height: 10 },
					paddingHorizontal: 20,
					backgroundColor: colors.black,
				},
				headerShown: false,
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarLabel: "Home",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="home" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name="Add"
				component={Add}
				options={{
					tabBarLabel: "Add",
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
							<View
								style={{
									width: 60,
									height: 60,
									borderRadius: 50,
									backgroundColor: colors.main,
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Image
									source={plus}
									style={{ width: 25, height: 25, tintColor: "black" }}
								></Image>
							</View>
						</TouchableOpacity>
					),
				}}
			/>

			<Tab.Screen
				name="LiveData"
				component={Stats}
				options={{
					tabBarLabel: "Live Data",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="lightning-bolt"
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarLabel: "Profile",
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
	tasksWrapper: {
		paddingTop: 20,
		paddingHorizontal: 20,
		marginTop: 20,
		alignContent: "center",
		alignItems: "center",
	},
	sectionTitle: {
		fontSize: 24,
		paddingTop: 15,
		fontWeight: "bold",
		color: colors.white,
	},
	smallCard: {
		margin: 25,
		width: 170,
		height: 100,
		backgroundColor: colors.bg2,
		borderRadius: 20,
		borderWidth: 0.2,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 8,
		alignItems: "center",
	},
	field: {
		flex: 1,
		backgroundColor: colors.bg,
		margin: 15,
		borderRadius: 20,
		borderWidth: 0.2,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
	},
	recordCard: {
		backgroundColor: "#333333",
		padding: 20,
		marginTop: 15,
		marginLeft: 10,
		marginRight: 10,
		borderRadius: 15,
		borderWidth: 0.1,
	},
	recordDate: {
		color: colors.main,
		fontSize: 22,
		marginRight: 20,
	},
	record: {
		flexDirection: "row",
		alignItems: "center",
		alignContent: "center",
	},
	recordText: {
		color: colors.white,
		fontSize: 18,
	},
	total: {
		backgroundColor: colors.bg2,
		borderRadius: 15,
		borderWidth: 0.2,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		margin: 15,
		padding: 20,
	},
	totalText: {
		color: colors.main,
		fontSize: 22,
	},
});

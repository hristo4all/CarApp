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
		{ date: "20/5/2021", litres: 12, price: 2.41, key: "10" },
		{ date: "15/4/2021", litres: 30, price: 2.42, key: "9" },
		{ date: "20/5/2021", litres: 12, price: 2.41, key: "8" },
		{ date: "15/4/2021", litres: 30, price: 2.42, key: "7" },
		{ date: "20/5/2021", litres: 12, price: 2.41, key: "6" },
		{ date: "15/4/2021", litres: 30, price: 2.42, key: "5" },
		{ date: "20/5/2021", litres: 12, price: 2.41, key: "4" },
		{ date: "15/4/2021", litres: 30, price: 2.42, key: "3" },
		{ date: "20/5/2021", litres: 12, price: 2.41, key: "2" },
		{ date: "15/4/2021", litres: 30, price: 2.42, key: "1" },
	]);

	const sumAmount = records.reduce((a, v) => (a = a + v.litres * v.price), 0);
	const sumLitres = records.reduce((a, v) => (a = a + v.litres), 0);
	//sum.toFixed(2);

	return (
		<View style={styles.container}>
			<View style={styles.tasksWrapper}>
				<Text style={styles.sectionTitle}>Refuel Records</Text>
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
			<View style={styles.wrapper}>
				<View style={styles.wrapperHeader}>
					<Text style={styles.statHeader}>Date</Text>
					<Text style={styles.statHeader}>Litres</Text>
					<Text style={styles.statHeader}>Price</Text>
					<Text style={styles.statHeader}>Total</Text>
				</View>
				<FlatList
					data={records}
					renderItem={({ item }) => (
						<View style={styles.recordCard}>
							<View style={styles.record}>
								<Text style={styles.recordDate}>{item.date}</Text>
								<Text style={styles.recordBody}>{item.litres}</Text>
								<Text style={styles.recordBody}>{item.price}</Text>
								<Text style={styles.recordBody}>
									{item.price * item.litres}
								</Text>
							</View>
						</View>
					)}
				/>
				<TouchableOpacity style={styles.addButtonWrapper}>
					<Text style={styles.addButtonText}>Add Record</Text>
					<View style={styles.addButton}>
						<MaterialCommunityIcons name="plus" color={colors.main} size={35} />
					</View>
				</TouchableOpacity>
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
				name="Stats"
				component={Stats}
				options={{
					tabBarLabel: "Stats",
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="clipboard-list"
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
		padding: 15,
		marginTop: 1,
		borderTopRightRadius: 10,
		borderTopWidth: 0.3,
	},

	record: {
		flexDirection: "row",
	},
	recordBody: {
		color: colors.main,
		fontSize: 18,
		marginLeft: 15,
		marginRight: 15,
	},
	recordDate: {
		color: colors.main,
		fontSize: 18,
		marginLeft: 0,
		marginRight: 15,
	},
	total: {
		backgroundColor: colors.bg2,
		height: 40,
		margin: 10,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 15,
		borderWidth: 0.2,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
	},
	totalText: {
		color: colors.main,
		fontSize: 22,
	},
	wrapper: {
		margin: 25,
		height: 500,
		backgroundColor: colors.bg2,
		borderRadius: 20,
		borderWidth: 0.5,
		borderColor: "black",
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
	wrapperHeader: {
		width: 362,
		height: 65,
		backgroundColor: colors.primaryShade1,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		borderWidth: 0.5,
		flexDirection: "row",
		justifyContent: "center",
	},
	statHeader: {
		color: colors.white,
		margin: 15,
		fontSize: 25,
	},
	addButton: {
		borderRadius: 40,
		backgroundColor: colors.black,
		width: 50,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "flex-end",
		borderBottomColor: colors.bg,
		borderTopColor: colors.bg2,
		borderLeftColor: colors.bg2,
		borderRightColor: colors.bg2,
		borderWidth: 5,
		left: 10,
	},
	addButtonWrapper: {
		backgroundColor: colors.black,
		width: 160,
		height: 50,
		top: 15,
		borderRadius: 30,
		borderTopLeftRadius: 12,
		borderBottomLeftRadius: 12,
		flexDirection: "row",
	},
	addButtonText: {
		color: colors.main,
		fontSize: 20,
		alignSelf: "center",
		marginLeft: 10,
	},
});

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { ProductProvider } from '../context/ProductContext';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#e5b724'
    }}>
        <Tabs.Screen 
        name="home" 
        options={{title:"Home", tabBarIcon: () => 
        <>
        <FontAwesome name='home' size={30} color='#245d44'/>
        <Text>Home</Text>
        </>}}
        >
        </Tabs.Screen>
        <Tabs.Screen 
        name="wishlist" 
        options={{title:"Wishlist", tabBarIcon: () => 
        <>
        <FontAwesome5 name="heart" size={24} color="#245d44" />
        <Text>Wishlist</Text>
        </>}}
        >
        </Tabs.Screen>
        <Tabs.Screen
        name="categories"
        options={{title: "categories", tabBarIcon: () => 
        <>
        <MaterialIcons name="category" size={24} color="#245d44" />
        <Text>Categories</Text>
        </>}}>
        </Tabs.Screen>
        <Tabs.Screen
        name="profile"
        options={{title: "Profile", tabBarIcon: () => 
        <>
        <FontAwesome name="user" size={24} color='#245d44'/>
        <Text>Profile</Text>
        </>}}>
        </Tabs.Screen>
    </Tabs>
  )
}

export default TabLayout

const styles = StyleSheet.create({})
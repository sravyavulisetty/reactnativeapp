import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{
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
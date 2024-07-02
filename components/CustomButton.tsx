import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface customButtonProps {
  title: string,
  handlePress: () => void,
  containerStyles: string,
  textStyles: string,
  children: any
}

const CustomButton = ({children, handlePress, containerStyles, textStyles} : customButtonProps) => {
  return (
    <TouchableOpacity
    onPress={handlePress} 
    activeOpacity={0.7}
    className={`p-2 ${containerStyles} cursor-pointer`}>
      {/* <Text className={`font-semibold text-base ${textStyles}`}>{title}</Text> */}
      {children}
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})
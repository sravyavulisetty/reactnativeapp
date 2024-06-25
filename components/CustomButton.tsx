import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface customButtonProps {
  title: string,
  handlePress: () => {},
  containerStyles: string,
  textStyles: string
}

const CustomButton = ({title, handlePress, containerStyles, textStyles} : customButtonProps) => {
  return (
    <TouchableOpacity
    onPress={handlePress} 
    activeOpacity={0.7}
    className={`p-2 ${containerStyles} justify-center items-center`}>
      <Text className={`font-semibold text-base ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})
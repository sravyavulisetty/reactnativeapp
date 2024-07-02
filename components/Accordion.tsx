import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import CustomButton from './CustomButton';
interface accordionProps{
    title:string,
    content: string
}
const Accordion = ({title, content} : accordionProps) => {
    const [isActive, setIsActive] = useState(false);
  return (
    <View className='w-screen'>
    <CustomButton title={''} handlePress={()=>setIsActive((prev) => !prev)} containerStyles={''} textStyles={''}>
        <View className='flex flex-row justify-between items-center m-2 mx-4' style={styles.accordion}>
            <Text className='text-base font-semibold'>{title}</Text>
            <Ionicons name="chevron-down" size={22} color="black" className=''/>
        </View>
    </CustomButton>
    {isActive ? <Text className='px-6'>{content}</Text> : ''}
    </View>
  )
}

export default Accordion

const styles = StyleSheet.create({
    accordion: {
        margin: 0
    }
})
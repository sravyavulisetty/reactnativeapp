import { FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ProductContext } from '@/app/context/ProductContext'
import Product from '@/components/Product';
import { router } from 'expo-router';
import CartItem from '@/components/CartItem';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '@/components/CustomButton';

const cart = () => {
    const {cart} = useContext(ProductContext);
    const totalPrice = cart.reduce((acc: any, product: {
        price: any; rating: { rate: any; }; }) => {
        return acc + product.price
    },0)

    if(cart.length ===0){
        return (
            <SafeAreaView className='flex-1 justify-center items-center'>
                    <Text className='text-center text-base font-semibold'>There are no items in the cart</Text>
                    <CustomButton title={''} handlePress={()=>router.push('/(tabs)/home')} containerStyles={''} textStyles={''}>
                        <Text className='bg-black text-white p-2 mt-2 text-base'>Shop now</Text>
                    </CustomButton>
            </SafeAreaView>
        )
    }

  return (
    <SafeAreaView style={styles.safeArea}>
        <ScrollView>
        <View className='flex flex-row items-center pl-5'>
            <Ionicons name="arrow-back" size={24} color="black" 
               onPress={()=>router.push('/(tabs)/home')}/>
            <Text className='text-xl font-semibold m-4'>Shopping Cart</Text>
        </View>
        <FlatList
            data={cart}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
            <CartItem
            handlePress={async () =>
              router.push({ pathname: '/(tabs)/home/productpage', params: { product: JSON.stringify(item) } })
            }
            product={item}
            />
           )}
           numColumns={1}
        />
        <View className='m-5'>
        <Text className='text-lg font-semibold my-4'>Price Details<Text className='text-sm'>({cart.length} {cart.length>1 ? "items" :"item"})</Text></Text>
        <View className='flex flex-col mt-10 gap-2'>
            <View className='flex flex-row justify-between items-center'>
               <Text>Total MRP</Text>
               <Text>${totalPrice}</Text>
            </View>
            <View className='flex flex-row justify-between items-center'>
               <Text className='text-base font-semibold'>Total Amount</Text>
               <Text className='text-base font-semibold'>${totalPrice}</Text>
            </View>
        </View>
        </View>
        </ScrollView>
        <StatusBar barStyle='dark-content'></StatusBar>
    </SafeAreaView>
  )
}

export default cart

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
      },
    row:{
        flex:1
    }
})
import { Button, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import Product from '@/components/Product';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Wishlist = () => {
  const {wishlist} = useContext(ProductContext);

  return (
    <SafeAreaView>
        <View className='m-4'>
            <View className='flex flex-row items-center'>
               <Ionicons name="arrow-back" size={24} color="black" 
                onPress={()=>router.push('/(tabs)/home')}/>
                <Text className='text-xl font-bold pl-2'>Wishlist <Text className='text-sm'>({wishlist.length} items)</Text></Text>
            </View>
            <FlatList
            data={wishlist}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
            <Product
                    handlePress={async () => router.push({ pathname: '/(tabs)/home/productpage', params: { product: JSON.stringify(item) } })}
                    product={item}
                    isLastItem={index === wishlist.length - 1 && wishlist.length % 2 !== 0} />
           )}
           numColumns={2}
           columnWrapperStyle={styles.row}
        />
        </View>

    </SafeAreaView>
  )
}

export default Wishlist

const styles = StyleSheet.create({
    row:{
        justifyContent: 'space-between',
        marginVertical: 10,
    }
})
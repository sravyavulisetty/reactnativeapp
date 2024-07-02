import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React,{useContext, useEffect} from 'react'
import { router, useLocalSearchParams, useRouter } from 'expo-router'
import { AntDesign, Entypo } from '@expo/vector-icons';
import CustomButton from '@/components/CustomButton';
import Accordion from '@/components/Accordion';
import { ProductContext } from '@/app/context/ProductContext';
import { Ionicons } from '@expo/vector-icons';

interface ProductProps {
    category: string;
    description: string;
    title:string,
    id: number;
    image: string;
    price: number;
    rating: {
      count: number;
      rate: number;
    };
  }

const Productpage = () => {
    const params = useLocalSearchParams();
    const product = JSON.parse(params.product as string) as ProductProps;
    const {addToWishlist, wishlist, removeFromWishlist, addToCart, cart} = useContext(ProductContext);

const hasId = (product: ProductProps, array: any[]) => {
    const foundIndex = array.find((p: { id: any; }) => p.id === product.id)
    if(foundIndex){
        return true
    }
    else{
        return false
    }
}

const handleRouting = () => {
    if(product.category === 'women\'s clothing'){
        router.push('/(tabs)/home/womencloth')
    }
    else if(product.category === "men\'s clothing"){
        router.push('/(tabs)/home/menscloth')
    }
    else if(product.category === 'electronics'){
        router.push('(tabs)/home/electronics')
    }
    else{
        router.push('(tabs)/home/jewellery')
    }

}
    return (
    <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollViewContent}>
           <View className='flex flex-row mt-5 items-center pl-2'>
              <Ionicons name="arrow-back" size={24} color="black" 
              onPress={handleRouting}/>
              <Text className='text-xl font-semibold pl-3'>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</Text>
           </View>
           <View style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.description}>{product.title}</Text>
            <View className='flex flex-row justify-between mt-2'>
            <Text style={styles.price}>${product.price}</Text>
               {/* <AntDesign name="hearto" size={24} color="black"/> */}
            </View>
            {/* <Text style={styles.rating}><Entypo name="star" size={15} color="gold" /> {product.rating.rate} ({product.rating.count} reviews)</Text>*/}
            </View>
            <Accordion title={'Product Description'} content={product.description} ></Accordion>
            <Accordion title={'Save extra with offers'} content={'Bank offers'} ></Accordion>
            <Accordion title={'Ratings & reviews'} content={`(${product.rating.rate}) ratings | (${product.rating.count}) reviews`} ></Accordion>
            <View className='flex flex-row items-center mx-4 my-10 justify-center'>
                {hasId(product, wishlist) ?
                <><CustomButton title={''} handlePress={()=> removeFromWishlist(product)} containerStyles={'border border-black rounded-xl px-4 mx-4'} textStyles={''} > 
                   <View className='flex flex-row gap-2 items-center'>
                       <AntDesign name="heart" size={20} color="#E32636" />
                       <Text className='text-base text-black'>Wishlisted</Text>
                   </View>
                </CustomButton>
                </> : 
                <>
                <CustomButton title={''} handlePress={()=> addToWishlist(product)} containerStyles={'border border-black rounded-xl px-4 mr-4'} textStyles={''} > 
                   <View className='flex flex-row gap-2 items-center'>
                      <AntDesign name="hearto" size={19} color="black" />
                      <Text className='text-base font-medium'>Add to Wishlist</Text>
                   </View>
                </CustomButton>
                </>
                }
                {hasId(product, cart) ? 
                <CustomButton title={''} handlePress={()=>router.push('/(tabs)/home/cart')} containerStyles={'bg-[#E32636] rounded-xl px-4'} textStyles={''} > 
                   <View className='flex flex-row gap-2 items-center'>
                      <Ionicons name="bag-outline" size={20} color="white" />
                      <Text className='text-base font-medium text-white'>Go to cart</Text>
                   </View>
                </CustomButton> : 
                <CustomButton title={''} handlePress={()=>addToCart(product)} containerStyles={'bg-[#E32636] rounded-xl px-4'} textStyles={''} > 
                <View className='flex flex-row gap-2 items-center'>
                   <Ionicons name="bag-outline" size={20} color="white" />
                   <Text className='text-base font-medium text-white'>Add to cart</Text>
                </View>
             </CustomButton>}
            </View>
        </ScrollView>
    </SafeAreaView>
    )
}

export default Productpage

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white'
      },
      scrollViewContent: {
        flexGrow: 1,
        padding: 10,
      },
      container: {
        position: 'relative',
        flex: 1,
        margin: 15,
        padding: 10,
        borderRadius: 10,
        elevation: 1
      },
      imageContainer: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10
      },
      lastItem: {
        flex: 0.5
      },
      image: {
        width: '100%',
        height: 450,
        borderRadius: 5,
      },
      description: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: 'semibold',
      },
      price: {
        marginTop: 2,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#E32636',
      },
      rating: {
        marginTop: 5,
        fontSize: 15,
        color: '#666',
      }
})
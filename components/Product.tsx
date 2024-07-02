import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import CustomButton from './CustomButton';
import { ProductContext } from '@/app/context/ProductContext';

interface ProductProps {
  category: string;
  title: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
}

const Product = ({ product, isLastItem, handlePress}: { product: ProductProps, isLastItem: boolean, handlePress: () => {}}) => {
  const {addToWishlist, wishlist, removeFromWishlist} = useContext(ProductContext)

  const hasId = (product: ProductProps) => {
    const foundIndex = wishlist.find((p: { id: any; }) => p.id === product.id)
    if(foundIndex){
        return true
    }
    else{
        return false
    }
}

  return (
    <View style={[styles.container, isLastItem ? styles.lastItem : null]}>
      <CustomButton title={''} handlePress={handlePress} containerStyles={''} textStyles={''}>
          <Image source={{ uri: product.image }} style={styles.image} />
      </CustomButton>
      <Text style={styles.description}>{product.title}</Text>
      <View className='flex flex-row justify-between items-center mt-2'>
        <View>
            <Text style={styles.price}>${product.price}</Text>
            <Text style={styles.rating}><Entypo name="star" size={15} color="gold" /> {product.rating.rate} ({product.rating.count} reviews)</Text>
        </View>
        <TouchableOpacity onPress={() => hasId(product) ? removeFromWishlist(product) : addToWishlist(product)}
                          activeOpacity={0.9}>
          {hasId(product) ?
            <AntDesign name="heart" size={24} color="#E32636" />
            : 
            <AntDesign name="hearto" size={24} color="#E32636" />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    margin: 0,
    padding: 10,
    borderRadius: 10,
    elevation: 1,
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
    height: 200,
    borderRadius: 5,
  },
  description: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: 'semibold',
  },
  price: {
    marginTop: 2,
    fontWeight: 'bold',
    fontSize: 17,
    color: '#E32636',
  },
  rating: {
    marginTop: 5,
    fontSize: 12,
    color: '#666',
  }
});


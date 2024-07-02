import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useContext } from 'react';
import CustomButton from './CustomButton';
import { Entypo } from '@expo/vector-icons';
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

const CartItem = ({ product, handlePress }: { product: ProductProps, handlePress: () => {} }) => {
    const {removeFromCart, addToWishlist} = useContext(ProductContext);
  return (
    <View style={styles.cartContainer}>
      <CustomButton title={''} handlePress={handlePress} containerStyles={''} textStyles={''}>
        <Image source={{ uri: product.image }} style={styles.image} />
      </CustomButton>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.rating}><Entypo name="star" size={15} color="gold" /> {product.rating.rate} ({product.rating.count} reviews)</Text>
        <View className='flex flex-row items-center'>
            <CustomButton title={''} handlePress={() => removeFromCart(product)} containerStyles={''} textStyles={''}>
               <Text style={styles.removeButtonText}>Remove</Text>
            </CustomButton>
            <CustomButton title={''} handlePress={() => addToWishlist(product)} containerStyles={''} textStyles={''}>
               <Text style={styles.wishlistbtn}>Move to wishlist</Text> 
            </CustomButton>
        </View>
      </View>
    </View>
  );
}

export default CartItem;

const styles = StyleSheet.create({
  cartContainer: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 1,
  },
  buttonContainer: {
    marginRight: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 5,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 10, 
  },
  title: {
    fontSize: 14,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 14,
    color: '#666',
  },
  removeButtonContainer: {
    marginTop: 10,
    backgroundColor: 'black',
    paddingVertical: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    backgroundColor: 'black',
    padding: 8,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  wishlistbtn: {
    borderColor: "black",
    borderWidth: 1,
    padding: 6
  }
});



  
  
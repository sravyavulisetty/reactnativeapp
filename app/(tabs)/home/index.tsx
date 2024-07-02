import { Button, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components/CustomButton';
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Product from '@/components/Product';
import { router } from 'expo-router';
import { ProductContext } from '@/app/context/ProductContext';

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

const Home = () => {

  const [products, setProducts] = useState<ProductProps[]>([]);
  const topRatedProducts = products.filter((product) => product.rating.rate >= 4);
  const {cart} = useContext(ProductContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View className='flex flex-row justify-between items-center mx-2'>
           <View className='flex flex-row gap-2'>
              <Image source={require('../../../assets/images/gift.png')} resizeMode='contain' className='w-6 h-6'></Image>
              <Text className='text-xl font-semibold'>Shopify</Text>
            </View>
            <View style={styles.container}>
                <AntDesign name="shoppingcart" size={35} color="black" onPress={() => router.push('/(tabs)/home/cart')} />
                    {cart.length>0 ? 
                    <View style={styles.cartBadge}>
                        <Text style={styles.cartText}>{cart.length}</Text>
                    </View> : ''}
                </View>
        </View>
        <View style={styles.headerContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.headerText}>Flat 50% off on women wear</Text>
            <View style={styles.buttonContainer}>
              <CustomButton
                title="Shop now"
                handlePress={() => {
                  router.push('/(tabs)/categories');
                }}
                containerStyles="bg-black mt-4"
                textStyles="text-white"
              >
                <Text className='text-white font-semibold text-base'>Shop now</Text>
              </CustomButton>
            </View>
          </View>
          <Image
            source={require('../../../assets/images/young_female.png')}
            resizeMode="contain"
            style={styles.headerImage}
          />
        </View>
        <View>
          <Text style={styles.topRatedTitle}>Top Rated Products</Text>
          <FlatList
            data={topRatedProducts}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => 
            <Product 
                    handlePress={async () => router.push({ pathname: '/(tabs)/home/productpage', params: { product: JSON.stringify(item) } })}
                    product={item}
                    isLastItem={index === topRatedProducts.length - 1 && topRatedProducts.length % 2 !== 0}/>}
            numColumns={2}
            columnWrapperStyle={styles.row}
          />
        </View>
        <Text style={styles.categoriesTitle}>Shop by Categories</Text>
        <View style={styles.categoriesContainer}>
          <View style={styles.categoryItem}>
            <Image
              source={require('../../../assets/images/electronics.jpeg')}
              resizeMode="contain"
              style={styles.categoryImage}
            />
            <View style={styles.categoryText}>
              <CustomButton title={''} handlePress={() => router.push('/(tabs)/home/electronics')} containerStyles={'flex flex-row items-center gap-1'} textStyles={''}>
                <Text style={styles.categoryLabelText}>Electronics</Text>
                <AntDesign name="arrowright" size={20} color="black" />
              </CustomButton>
            </View>
          </View>
          <View style={styles.categoryItem}>
            <Image
              source={require('../../../assets/images/young_man.jpeg')}
              resizeMode="contain"
              style={styles.categoryImage}
            />
            <View style={styles.categoryText}>
              <CustomButton title={''} handlePress={() => router.push('/(tabs)/home/menscloth')} containerStyles={'flex flex-row items-center gap-1'} textStyles={''}>
                <Text style={styles.categoryLabelText}>Men's clothing</Text>
                <AntDesign name="arrowright" size={20} color="black" />
              </CustomButton>
            </View>
          </View>
          <View style={styles.categoryItem}>
            <Image
              source={require('../../../assets/images/womens.jpeg')}
              resizeMode="contain"
              style={styles.categoryImage}
            />
            <View style={styles.categoryText}>
              <CustomButton title={''} handlePress={() => router.push('/(tabs)/home/womencloth')} containerStyles={'flex flex-row items-center gap-1'} textStyles={''}>
                <Text style={styles.categoryLabelText}>Women clothing</Text>
                <AntDesign name="arrowright" size={20} color="black" />
              </CustomButton>
            </View>
          </View>
          <View style={styles.categoryItem}>
            <Image
              source={require('../../../assets/images/jewellery.jpeg')}
              resizeMode="contain"
              style={styles.categoryImage}
            />
            <View style={styles.categoryText}>
              <CustomButton title={''} handlePress={() => router.push('/(tabs)/home/jewellery')} containerStyles={'flex flex-row items-center gap-1'} textStyles={''}>
                <Text style={styles.categoryLabelText}>Jewellery</Text>
                <AntDesign name="arrowright" size={20} color="black" />
              </CustomButton>
            </View>
        
          </View>
        </View>
        <View style={styles.staticContainer}>
          <Text style={styles.sectionTitle}>What people describes us</Text>
          <View style={styles.categoriesContainer}>
            <View style={styles.iconContainer}>
              <Text style={styles.iconText}>Fast Delivery</Text>
              <MaterialCommunityIcons name="truck-delivery" size={27} color="white" />
            </View>
            <View style={styles.iconContainer}>
              <Text style={styles.iconText}>Best Offers</Text>
              <MaterialIcons name="percent" size={25} color="white" />
            </View>
            <View style={styles.iconContainer}>
              <Text style={styles.iconText}>Best Quality</Text>
              <AntDesign name="checkcircle" size={24} color="white" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white'
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center"
  },
  textContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 10,
  },
  headerImage: {
    height: 500,
    width: 300,
    marginRight: -50,
  },
  topRatedTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
  categoriesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 20
  },
  categoriesContainer: {
    flexDirection: 'column',
    gap: 10,
    marginTop: 20
  },
  categoryItem: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  categoryImage: {
    height: 200,
    width: 300,
  },
  categoryText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 10,
  },
  categoryLabelText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  staticContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  iconContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    gap: 3,
    padding: 10,
    paddingLeft: 24,
    paddingRight: 24,
    margin: 8,
    borderRadius: 0
  },
  iconText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  container: {
    position: 'relative',
  },
  cartBadge: {
    backgroundColor: '#E32636',
    padding: 5,
    height: 27,
    width: 27,
    borderRadius: 50,
    elevation: 10,
    position: 'absolute',
    top: -10,
    right: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
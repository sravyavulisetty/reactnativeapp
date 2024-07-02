import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native'

const Categories = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollViewContent}>   
        <Text style={styles.categoriesTitle}>Shop by Categories</Text>
        <View style={styles.categoriesContainer}>
          <View style={styles.categoryItem}>
            <Image
              source={require('../../assets/images/electronics.jpeg')}
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
              source={require('../../assets/images/young_man.jpeg')}
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
              source={require('../../assets/images/womens.jpeg')}
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
              source={require('../../assets/images/jewellery.jpeg')}
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
        </ScrollView>
        </SafeAreaView>
  )
}

export default Categories

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
      },
      scrollViewContent: {
        flexGrow: 1,
        padding: 10,
      },
    categoriesTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
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
})
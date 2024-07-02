import { Button, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import Product from '@/components/Product';
import { router } from 'expo-router';
import { Dropdown } from 'react-native-element-dropdown';
import { AntDesign, Ionicons } from '@expo/vector-icons';

interface ProductProps {
  category: string;
  description: string;
  title: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
}

interface DropdownItem {
  label: string;
  value: string;
}

const items: DropdownItem[] = [
  { label: "Price", value: "price" },
  { label: "Ratings", value: "ratings" },
  { label: "Reviews", value: "reviews" },
];

const Electronics: React.FC = () => {
  const [data, setData] = useState<ProductProps[]>([]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/electronics')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const renderDropdownItem = (item: DropdownItem) => (
    <View style={styles.dropdownItem}>
      <Text>{item.label}</Text>
    </View>
  );

  const handleSelectItem = (item: DropdownItem) => {
    setSelectedItem(item.value);
    let sortedData = [...data];
    if (item.value === "price") {
      sortedData = sortedData.sort((a, b) => a.price - b.price);
    } else if (item.value === "ratings") {
      sortedData = sortedData.sort((a, b) => b.rating.rate - a.rating.rate);
    } else if (item.value === "reviews") {
      sortedData = sortedData.sort((a, b) => b.rating.count - a.rating.count);
    }
    setData(sortedData);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Ionicons name="arrow-back" size={24} color="black" onPress={() => router.push('/(tabs)/home')} />
          <Text style={styles.title}>Electronics</Text>
        </View>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={items}
          search
          iconColor='black'
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Sort By"
          searchPlaceholder="Search..."
          value={selectedItem}
          onChange={handleSelectItem}
          renderItem={renderDropdownItem}
        />
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <Product
            handlePress={async () => router.push({ pathname: '/(tabs)/home/productpage', params: { product: JSON.stringify(item) } })}
            product={item}
            isLastItem={index === data.length - 1 && data.length % 2 !== 0}
          />
        )}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </SafeAreaView>
  );
};

export default Electronics;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    elevation: 1,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  dropdown: {
    width: 150,
    borderColor: "black",
    borderWidth: 1,
    padding: 4,
    borderRadius: 5
  },
  placeholderStyle: {
    color: 'black',
  },
  selectedTextStyle: {
    color: 'black',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },
  dropdownItem: {
    padding: 10,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
    margin: 10,
  },
});



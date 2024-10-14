import { useNavigation } from '@react-navigation/native';
import { apiClient } from '../services/axios'; 
import { fetchProducts } from '../services';
import { ProductData } from '../interfaces/product.interface';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet } from 'react-native';


export default function Main() {

  const navigation = useNavigation();

    const [products, setProducts] = useState<ProductData[]>([]);
  
    useEffect(() => {
      const loadProducts = async () => {
        try {
          const fetchedProducts = await fetchProducts(); 
          
          const processedProducts = fetchedProducts.map((product: any) => ({
            productID: product.productID,
            name: product.name,
            price: product.price,
            description: product.description,
            image: product.image, 
            categoryID: product.categoryID,
          }));
  
          setProducts(processedProducts);
          console.log(processedProducts);
        } catch (error) {
          console.error("Failed to fetch products:", error);
        }
      };
  
      loadProducts();
    }, []);
  
    const addToCart = async (item: ProductData) => {
      const userID = await AsyncStorage.getItem('userID');
      if (!userID) {
        console.error('User is not logged in');
        return;
      }
  
      const cartData = {
        userID: Number(userID), 
        productID: item.productID, 
        quantity: item.quantity || 1,
        total_amount: item.price * (item.quantity || 1),
      };
  
      try {
        const response = await apiClient.post('/carts', cartData);
        console.log('Cart item added:', response.data);

        navigation.navigate('Cart');

      } catch (error) {
        console.error("Failed to add item to cart:", error);
      }
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Recently Played</Text>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.productContainer}>
            {products.map((item, index) => (
              <View
                key={index}
                style={styles.cardContainer}
              >
                <View style={styles.card}>
                  <Image 
                    source={{ uri: item.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZwM9lAidMMLgBkpBfc_mceHLJOSpgaeDHQ&s' }} 
                    style={styles.image} 
                    resizeMode="contain"
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.productName}>{item.name}</Text>
                    <Text style={styles.price}>Rs. {item.price}</Text>
                    <TouchableOpacity
                      style={styles.buyButton}
                      onPress={() => addToCart(item)}
                    >
                      <Text style={styles.buyButtonText}>Buy</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    scrollView: {
      flexGrow: 1,
    },
    productContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    cardContainer: {
      width: '48%',  // Ensures two items per row by taking 48% width and leaving space for margins
      marginBottom: 16,
    },
    card: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: 16,
      borderRadius: 8,
      backgroundColor: '#f9f9f9',
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
    },
    image: {
      width: '100%',
      height: 150,
      borderRadius: 8,
    },
    textContainer: {
      alignItems: 'center',
      marginTop: 8,
    },
    productName: {
      fontWeight: '600',
      textAlign: 'center',
    },
    price: {
      color: '#555',
      marginTop: 4,
    },
    buyButton: {
      backgroundColor: '#28a745',
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 20,
      marginTop: 8,
    },
    buyButtonText: {
      color: '#fff',
      textAlign: 'center',
    },
  });
  
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, TextInput, ScrollView } from 'react-native';
import OrderSummary from './OrderSummary';
import { fetchCartByUser, removeCartItem } from '../services/cartService';
import { CartData } from '../interfaces/cart.interface';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartData[]>([]);
  const [counts, setCounts] = useState<number[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      try {
        const storedUserID = await AsyncStorage.getItem('userID');
        if (!storedUserID) {
          setErrorMessage('User is not logged in');
          setCartItems([]); // Reset cart items if not logged in
          setLoading(false);
          return;
        }

        const userID = Number(storedUserID);
        if (isNaN(userID)) {
          setErrorMessage('Invalid user ID');
          setCartItems([]); // Reset cart items for invalid ID
          setLoading(false);
          return;
        }

        const fetchedItems = await fetchCartByUser(userID);
        if (Array.isArray(fetchedItems)) {
          setCartItems(fetchedItems);
          setCounts(fetchedItems.map(item => item.quantity || 0));
        } else {
          console.error('Fetched items are not in the expected format:', fetchedItems);
          setErrorMessage('Failed to load cart items.');
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
        setErrorMessage('Error fetching cart items.');
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const handleIncrement = (index: number) => {
    setCounts(prevCounts => {
      const newCounts = [...prevCounts];
      newCounts[index] = (newCounts[index] || 1) + 1;
      return newCounts;
    });
  };

  const handleDecrement = (index: number) => {
    setCounts(prevCounts => {
      const newCounts = [...prevCounts];
      if (newCounts[index] > 1) {
        newCounts[index] -= 1;
      }
      return newCounts;
    });
  };

  const handleRemoveItem = async (id: number) => {
    try {
      await removeCartItem(id);
      setCartItems(prevItems => prevItems.filter(item => item.id !== id));
      setCounts(prevCounts => prevCounts.filter((_, i) => cartItems[i]?.id !== id));
    } catch (error) {
      console.error('Error removing cart item:', error);
      setErrorMessage('Error removing item from cart.');
    }
  };

  useEffect(() => {
    const calculateTotalPrice = () => {
      let total = 0;
      let count = 0;
      cartItems.forEach((item, index) => {
        const quantity = counts[index] || item.quantity;
        total += item.Product.price * quantity;
        count += quantity;
      });
      setTotalPrice(total);
      setTotalCount(count);
    };

    if (cartItems.length > 0) {
      calculateTotalPrice();
    }
  }, [counts, cartItems]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (errorMessage) {
    return <Text style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</Text>;
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#333' }}>Shopping Cart</Text>
        </View>

        <View>
          {cartItems.map((item, index) => (
            <View key={item.id} style={{ flexDirection: 'row', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
              <Image
                source={{ uri: item.Product.image_url }}
                style={{ width: 80, height: 80, borderRadius: 8, borderColor: '#ccc', borderWidth: 1 }}
              />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={{ fontSize: 18, fontWeight: '600', color: '#333' }}>{item.Product.name}</Text>
                <Text style={{ fontSize: 14, color: '#666' }}>Rs. {item.Product.price || 0}</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 4 }}>
                  Rs. {item.Product.price * (counts[index] || item.quantity || 0)}
                </Text>
              </View>
              <View style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity
                    onPress={() => handleDecrement(index)}
                    style={{ padding: 8, borderWidth: 1, borderColor: '#aaa', borderRadius: 4 }}
                  >
                    <Text>-</Text>
                  </TouchableOpacity>
                  <TextInput
                    value={(counts[index] || item.quantity || 0).toString()}
                    editable={false}
                    style={{ width: 40, textAlign: 'center', borderColor: '#ccc', borderWidth: 1, marginHorizontal: 8, borderRadius: 4 }}
                  />
                  <TouchableOpacity
                    onPress={() => handleIncrement(index)}
                    style={{ padding: 8, borderWidth: 1, borderColor: '#aaa', borderRadius: 4 }}
                  >
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
                  <Text style={{ color: 'red' }}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        <OrderSummary totalPrice={totalPrice} totalCount={totalCount} />
      </ScrollView>
    </View>
  );
};

export default Cart;

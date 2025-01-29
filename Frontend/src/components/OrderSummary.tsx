import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface OrderSummaryProps {
  totalPrice: number;
  totalCount: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ totalPrice, totalCount }) => {
  const navigation = useNavigation();

  const signUpBtn = () => {
    navigation.navigate('Auth', { screen: 'OrderPlaced' }); // Ensure this matches your navigator structure
  };

  return (
    <View style={{ backgroundColor: '#fff', padding: 16, borderRadius: 8, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, elevation: 2, marginTop: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Order Summary</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
        <Text>Subtotal</Text>
        <Text>Rs. {totalPrice}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
        <Text>Shipping Fee</Text>
        <Text>Rs. 0</Text>
      </View>
      <TextInput
        placeholder="Enter Voucher Code"
        style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 8, marginTop: 16 }}
      />
      <TouchableOpacity style={{ backgroundColor: '#007BFF', paddingVertical: 12, borderRadius: 4, marginTop: 8 }}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>APPLY</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Total</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Rs. {totalPrice}</Text>
      </View>
      <TouchableOpacity
        style={{ backgroundColor: '#FFA500', paddingVertical: 12, borderRadius: 4, marginTop: 8 }}
        onPress={signUpBtn} // moved onPress here
      >
        <Text style={{ color: '#fff', textAlign: 'center' }}>
          PROCEED TO CHECKOUT ({totalCount})
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderSummary;

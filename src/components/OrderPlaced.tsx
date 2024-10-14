// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const OrderPlaced: React.FC = () => {
//   const navigation = useNavigation();

//   const continueShoppingBtn = () => {
//     navigation.navigate('Auth', { screen: 'Home' });
//   };

//   return (
//     <View className="flex justify-center items-center min-h-screen bg-green-50 p-4">
//       <View className="text-center bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-md w-full">
//         <Text className="text-2xl sm:text-3xl font-bold text-green-600 mb-4">
//           Order Placed Successfully!
//         </Text>
//         <Text className="text-sm sm:text-base md:text-lg text-gray-700">
//           Thank you for your purchase.
//         </Text>
//         <Text className="text-sm sm:text-base md:text-lg text-gray-700">
//           Your order is being processed and will be shipped soon.
//         </Text>
//         <View className="mt-6">
//           <TouchableOpacity
//             onPress={continueShoppingBtn}
//             className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600 transition duration-200"
//           >
//             <Text className="text-center">Continue Shopping</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default OrderPlaced;

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OrderPlaced: React.FC = () => {
  const navigation = useNavigation();

  const continueShoppingBtn = () => {
    navigation.navigate('Auth', { screen: 'Home' });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Order Placed Successfully!</Text>
        <Text style={styles.text}>Thank you for your purchase.</Text>
        <Text style={styles.text}>Your order is being processed and will be shipped soon.</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={continueShoppingBtn}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Continue Shopping</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d1fae5',
    padding: 16,
  },
  card: {
    
    backgroundColor: '#ffffff', // Tailwind's bg-white
    padding: 24,
    borderRadius: 8,
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.5, // Shadow radius
    elevation: 5, // For Android shadow
    maxWidth: 400,
    width: '100%',
  },
  title: {
    fontSize: 24, // Tailwind's text-2xl
    fontWeight: 'bold',
    color: '#16a34a', // Tailwind's text-green-600
    marginBottom: 16,
  },
  text: {
    fontSize: 14, // Tailwind's text-sm
    color: '#4b5563', // Tailwind's text-gray-700
    marginBottom: 8,
  },
  buttonContainer: {
    marginTop: 24,
  },
  button: {
    backgroundColor: '#16a34a', // Tailwind's bg-green-500
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff', // Tailwind's text-white
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OrderPlaced;

import React from 'react';
import { StyleSheet, View, Image, FlatList } from 'react-native';
import products from '../data/products';

function ProductsScreeen() {
  return (
    <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={ styles.itemCointener }>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
        )}
        numColumns={2}
      />
  )
}

const styles = StyleSheet.create({
  
    itemCointener: {
      width: "50%", padding: 1
    },
    image: {
      width: '100%',
      aspectRatio: 1
    }
  
  });
  

export default ProductsScreeen
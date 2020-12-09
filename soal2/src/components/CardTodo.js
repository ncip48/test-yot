import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';

const renderItem = ({item}) => {
  return (
    <View
      style={{
        ...styles.upper,
        backgroundColor: item.isDone ? 'yellow' : 'white',
      }}>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.footer}>
        <Text style={styles.category}>Category</Text>
        <Text style={styles.categoryName}>{item.category.name}</Text>
      </View>
    </View>
  );
};

export const CardTodos = (props) => {
  return (
    <View style={styles.list}>
      <FlatList
        data={props.data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white',
    flex: 1,
  },
  upper: {
    padding: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderTopWidth: 0,
    borderRadius: 10,
    marginHorizontal: 1,
    marginTop: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginBottom: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
  },
  category: {
    flex: 2,
  },
  categoryName: {
    flex: 1,
    textAlign: 'right',
  },
});

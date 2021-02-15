import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Button,
    FlatList
  } from 'react-native';

import InputItem from './components/InputItem';
import InputHandler from './components/InputHandler';

export default function App() {


  const [items, setItems] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addItemsHandler = itemTitle => {
       setItems(currentItems => [
          ...currentItems,
          { 
            id: Math.random().toString(),
            value: itemTitle
          }]);
       setIsAddMode(false);
  };

  const removeItemsHandler = itemId => {
    setItems(currentItems => {
      return currentItems.filter(currentItem =>
        currentItem.id !== itemId
      )
    });
  }

  const cancelItemHandler = () => {
    setIsAddMode(false);
  }

  const resetItems = () => {
    setItems([]);
  };

  return (
      <View style={ styles.screen }>
        <Button
          title="Add New Item"
          onPress={() => setIsAddMode(true)}
        />
        <InputHandler
          visible={isAddMode}
          onAddItem={addItemsHandler}
          onCancelItem={cancelItemHandler}
          onResetList={resetItems}
        />
        <FlatList 
          data={items}
          renderItem={itemData =>
             <InputItem
                id={itemData.item.id}
                onDelete={removeItemsHandler}
                title={itemData.item.value}
             />
           } 
         />
      </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});




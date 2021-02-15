import React, { useState } from 'react';

import { 
	View,
	TextInput,
	Button,
	StyleSheet,
	Modal
} from 'react-native';

const InputHandler = props => {
	
	const [enteredItem, setEnteredItem] = useState(''); // hooks state control
	const itemInputHandler = (enteredText) => {
      	setEnteredItem(enteredText);
    };

    const addItemHandler = () => {
    	props.onAddItem(enteredItem);
    	setEnteredItem('');
    }

	return (
		<Modal
			visible={props.visible}
			animationType="slide"
		>
			<View 
				style={styles.inputContainer}
			>
				<TextInput 
			      placeholder={"Shopping List"}
			      style={styles.input}
			      onChangeText={itemInputHandler}
			      value={enteredItem}
		    	/>
		    	<View
		    		style={styles.buttonContainer}
		    	>
			    	<Button
			          title="ADD"
			          onPress={addItemHandler}
			        />
			        <Button
			          title="CANCEL"
			          color="red"
			          onPress={props.onCancelItem}
			        />
			        <Button
			          title="RESET"
			          onPress={props.onResetList}
			        />
			    </View>
		    </View>
		</Modal>
    );
};

const styles = StyleSheet.create ({
		inputContainer: {
			flex: 1,
		    justifyContent: 'center',
		    alignItems: 'center'
  		},
		input: {
		    width: '80%',
		    borderColor: 'black',
		    borderBottomWidth: 1,
		    padding: 10
	  	},
	  	buttonContainer: {
	  		width: '60%',
	  		flexDirection: 'row',
	  		justifyContent: 'space-between'
	  	}
});

export default InputHandler;
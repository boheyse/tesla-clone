import React from 'react';
import {View, Pressable, Text} from "react-native";
import styles from "./styles";

const OrderButtons = (props) => {

    const type = props.type;
    console.warn(type);
    const backgroundColor = type === 'primary' ? '#393c41' : 'eee';
    const fontColor = type === 'primary' ? 'white' : 'black';

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={() => {
                    console.warn ('nothing here yet')
                }}
            >
                <Text style={[styles.text, {color: fontColor}]}>Custom Order</Text>
            </Pressable>
        </View>
    );
};

export default OrderButtons;
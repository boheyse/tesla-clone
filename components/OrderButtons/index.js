import React from 'react';
import {View, Pressable, Text} from "react-native";
import styles from "./styles";

const OrderButtons = (props) => {

    const { type, content, onPress} = props;

    console.warn(type);
    const backgroundColor = type === 'primary' ? '#393c41' : 'white';
    const fontColor = type === 'primary' ? 'white' : 'black';

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={() => onPress()}
            >
                <Text style={[styles.text, {color: fontColor}]}>{content}</Text>
            </Pressable>
        </View>
    );
};

export default OrderButtons;
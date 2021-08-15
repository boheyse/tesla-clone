import React from 'react';
import {View, Text, ImageBackground} from "react-native";
import styles from "./styles";
import OrderButtons from "../OrderButtons";

const HomepageItem = (props) => {

    const { title, subtitle, cta, image } = props;

    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={image}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <OrderButtons
                    type="primary"
                    content={"Custom Order"}
                    onPress={() => {
                        console.warn("Custom Order was pressed");
                    }}
                />

                <OrderButtons
                    type="secondary"
                    content={"Existing Inventory"}
                    onPress={() => {
                        console.warn("Existing Inventory was pressed");
                    }}
                />
            </View>


        </View>
    );
};

export default HomepageItem;
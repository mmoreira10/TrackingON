import React from 'react';
import { View, Text } from 'react-native';
import { CSS } from '../assets/css/CSS';

export default function Page(props) {
    return (
        <View style={CSS.textPage}>
            <Text>O nome da empresa é {props.empresa} e seu funcionário é {props.name}</Text>
        </View>
    );
}
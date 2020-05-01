import React from "react";
import { Image } from "react-native";

const Icon = ({ source, color, style, ...props }) => {
    return(
        <Image style={{width:20, height:20, tintColor:color}}
            source={source}
            resizeMode='contain'
        />
    )
};

export default Icon;
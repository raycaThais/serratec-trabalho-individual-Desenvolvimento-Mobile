import React from "react";
import { View, Text, Image} from "react-native";
import { styles } from "./styles";

interface Props{
    icone: any,
    nome:string
}

export const MiniCardCategoria = ({icone, nome}: Props) => {

    return(
    <View style={styles.container}>
        <Image source={icone} style={styles.icone}/>
        <Text style={styles.nome}>{nome}</Text>

    </View>)

}
import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./styles";

interface Props {
    logo:any,
    nome:string,
    patrocinio?: string
}

export const CardLoja = ({logo, nome, patrocinio} : Props) => {

return (<View style={styles.container}>
    <Image source={logo} style={styles.logo}/>
    <Text style={styles.nome}>{nome} </Text>
    <Text style={styles.patrocinio}>{patrocinio}</Text>
</View>)
}
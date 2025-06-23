import React from "react"
import { View, Text, Image } from "react-native"

interface Props {
    nomeCategoria: string,
    imagem: any,
    cor: string
}

export const CardCategoria = ({ nomeCategoria, imagem, cor }: Props) => {
    return (
        <View style={{
            backgroundColor: cor,
            height: 69.5,
            width: 164,
            borderRadius: 10,
            flexDirection: "row",
            overflow: "hidden",
            position: "relative"

        }}>
            <Text
                style={{
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: 13.5,
                    paddingLeft: 10,
                    paddingTop: 11,
                    zIndex:1

                }}
            >{nomeCategoria}</Text>
            <Image source={imagem} style={{
                position: "absolute",
                width: 95,
                height: 85,
                marginTop: 4,
                marginLeft: 75,
                resizeMode: "contain",
                shadowColor: "black",
                shadowOpacity: 0.4,
                shadowOffset: {
                    width: 5,
                    height: 5
                },
                shadowRadius: 4
            }} />
        </View>)

}


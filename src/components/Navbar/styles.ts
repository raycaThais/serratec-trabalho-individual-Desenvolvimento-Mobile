
import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#ffffff",
        paddingVertical: 6.5,
        borderTopColor: "#ddd",
        borderTopWidth: 1,

    },
    item: {
        alignItems: "center",
        justifyContent:"center",
        gap: 2

    },
    nome: {
        fontSize: 10
    },
    notificacao: {
        position: "relative"
    },
    notificacao1: {
        backgroundColor: "red",
        position: "absolute",
        top: 1,
        right: 1,
        width: 12,
        height: 12,
        borderRadius: 7,
        
    },
    pontoNotificacao: {
        color: "white",          
        fontSize: 26,
        lineHeight: 14,
        left: 3.1,
        fontWeight: "bold"
    },


})
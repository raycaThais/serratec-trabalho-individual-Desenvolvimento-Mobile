import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 8,

    },
    containerCategorias: {
        alignItems: "center",
        gap: 3
    },
    cabecalho: {
        flexDirection: "row",
        justifyContent: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
        position: "relative",
        marginTop: 5
    },
    endereco: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        position: "absolute",
        left: 0,
        right: 0,
        top: 12,
        justifyContent: "center",
        paddingTop: 15
    },
    rua: {
        fontWeight: 600,
        fontSize: 13
    },
    notificacao: {
        backgroundColor: "#f5f5f5",
        padding: 8,
        borderRadius: 25,
        marginLeft: "auto",
        position: "relative"
    },
    notificacao1: {
        position: "absolute",
        top: 2,
        right: -3,
        backgroundColor: "red",
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 1,
       
    },
    numeroNotificacao: {
        color: "white",
        fontSize: 11,
        fontWeight:"500"
       
    },
    categorias: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 8
    },
    taxaTexto: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15
    },
    taxaTitulo: {
        fontWeight: "600",
        fontSize: 15
    },
    taxaSubtitulo: {
        color: "#6e6e6e",
        fontSize: 13
    },
    lojas: {
        flexDirection: "row",
        paddingHorizontal: 8
    },
    verMais: {
        color: "#df2251",
        fontWeight: "500",
        fontSize: 13
    },
    promocoes: {
        padding: 15,
        marginTop: 15
    },
    promocao: {
        borderRadius: 15,
        width: 295,
        height: 150,
        resizeMode: "contain",
        marginRight: 11,
    },
    navbarFixa: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
    },
})
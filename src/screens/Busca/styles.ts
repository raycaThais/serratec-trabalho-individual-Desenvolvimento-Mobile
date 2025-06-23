import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 30,
        marginTop: 40,
        marginHorizontal: 15,
        paddingHorizontal: 15,
    },
    input: {
        backgroundColor: "#ffff",
        flex: 1,
        paddingVertical: 15,
        paddingHorizontal: 15,
        fontSize: 13.5,
        fontWeight: 500,
    },
    categorias: {
        backgroundColor: "#ffffff",
        marginTop: 20,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,

    },
    categoriasView: {
        marginTop: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 15,
        justifyContent: "center"
    },

    titulo: {
        marginTop: 25,
        fontWeight: 600,
        fontSize: 17,
        marginLeft: 20
    },
    navbarFixa: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
    },
})
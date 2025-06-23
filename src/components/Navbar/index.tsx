import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { styles } from "./styles";

interface Props {
    noInicio?: boolean
    naBusca? : boolean
}
export const Navbar = ({noInicio, naBusca}: Props) => {


    return (<View style={styles.container}>

        <View style={styles.item}>
            <TouchableOpacity>
            <Ionicons name= {noInicio?"home" : "home-outline"} size={22} color={noInicio?"black" : "#717171"}/>
            <Text style={styles.nome}>Início</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.item}>
            <TouchableOpacity>
            <Ionicons name= {naBusca?"search": "search-outline"} size={22} color={naBusca?"black" : "#717171"}/>
            <Text style={styles.nome}>Busca</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.item}>
            <TouchableOpacity>
            <Ionicons name="receipt-outline" size={22} color="#717171"/>
            <Text style={styles.nome}>Pedidos</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.item}>
            <TouchableOpacity style={styles.notificacao}>
            <Ionicons name="person-outline" size={22} color="#717171"/>
            <View style={styles.notificacao1}>
               <Text style={styles.pontoNotificacao}>.</Text>
            </View>
            <Text style={styles.nome}>Perfil</Text>
            </TouchableOpacity>
        </View>

    </View>)
}
import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { Navbar } from "../../components/Navbar";
import { Ionicons } from '@expo/vector-icons'
import { MiniCardCategoria } from "../../components/MiniCardCategoria";
import { styles } from "./styles";
import { CardLoja } from "../../components/CardLoja";
import cavanaBurguer from "../../../assets/logoLojas/cavanaBurguer.png"
import sushiKinshu from "../../../assets/logoLojas/sushiKinshu.png"
import empadaMix from "../../../assets/logoLojas/empadaMix.png"
import paoDoDia from "../../../assets/logoLojas/paoDoDia.png"
import doceSabor from "../../../assets/logoLojas/doceSabor.png"
import promocao from "../../../assets/promocoes/promocao.png"
import promocao2 from "../../../assets/promocoes/promocao2.png"
import hamburguer from "../../../assets/iconeCategoria/hamburguer.png"
import shopping from "../../../assets/iconeCategoria/shopping.png"
import cestinha from "../../../assets/iconeCategoria/cestinha.png"
import cupom from "../../../assets/iconeCategoria/cupom.png"
import kitMedico from "../../../assets/iconeCategoria/kitMedico.png"
import petShop from "../../../assets/iconeCategoria/petShop.png"
import drinks from "../../../assets/iconeCategoria/drinks.png"
import promotions from "../../../assets/iconeCategoria/promotions.png"

export const Inicio = () => {

    return (<View style={styles.container}>
        <ScrollView>
            <View style={styles.cabecalho}>
                <View style={styles.endereco}>
                    <Text style={styles.rua}>Rua Guandu</Text>
                    <Ionicons name="chevron-down-outline" color={"#8d8d8d"} size={10} />
                </View>
                <View style={styles.notificacao}>
                    <Ionicons name="notifications-outline" size={22} />
                    <View style={styles.notificacao1}>
                        <Text style={styles.numeroNotificacao}>1</Text>
                    </View>
                </View>
            </View>{/**vou usar como cabeçalho */}

            <View style={styles.containerCategorias}>
                <View style={styles.categorias}>
                    <MiniCardCategoria icone={hamburguer} nome={"Restaurantes"} />
                    <MiniCardCategoria icone={cestinha} nome={"Mercados"} />
                    <MiniCardCategoria icone={kitMedico} nome={"Farmácias"} />
                    <MiniCardCategoria icone={promotions} nome={"Promoções"} />
                    <MiniCardCategoria icone={drinks} nome={"Bebidas"} />
                    <MiniCardCategoria icone={cupom} nome={"Cupons"} />
                    <MiniCardCategoria icone={shopping} nome={"Shopping"} />
                    <MiniCardCategoria icone={petShop} nome={"Pet Shops"} />
                </View>{/*div para usar como a parte de categorias */}
                <Ionicons name="ellipsis-horizontal" size={25}></Ionicons>
            </View>

            <View style={styles.taxaTexto}>
                <View style={styles.taxaTituloSub}>
                    <Text style={styles.taxaTitulo}>Taxa na faixa</Text>
                    <Text style={styles.taxaSubtitulo}>A taxa é cortesia pra você</Text>
                </View>
                <TouchableOpacity>
                <Text style={styles.verMais}>Ver mais</Text>
                </TouchableOpacity>
            </View>{/* div do "taxa na faixa"*/}
            <ScrollView horizontal={true} style={styles.lojas}>
                <CardLoja logo={cavanaBurguer} nome={"Cavana Burguer"} patrocinio={"Patrocinado"} />
                <CardLoja logo={sushiKinshu} nome={"Sushi Kinshu"} patrocinio={"Patrocinado"} />
                <CardLoja logo={empadaMix} nome={"Empada Mix"} patrocinio={"Patrocinado"} />
                <CardLoja logo={paoDoDia} nome={"Padaria Pão do Dia"} />
                <CardLoja logo={doceSabor} nome={"Doce Sabor"} />
            </ScrollView>{/* div da parte das lojas*/}

            <ScrollView horizontal={true} style={styles.promocoes}>
                <Image source={promocao} style={styles.promocao} />
                <Image source={promocao2} style={styles.promocao} />
            </ScrollView>{/* div das promoções*/}
        </ScrollView>

        <View style={styles.navbarFixa}>
            <Navbar noInicio />
        </View>
    </View>

    )
}
import React from "react"
import { ScrollView, TextInput, View, Text} from "react-native"
import { Navbar } from "../../components/Navbar"
import { styles } from "./styles"
import { CardCategoria} from "../../components/CardCategoria"
import { Ionicons } from '@expo/vector-icons'
import salada from "../../../assets/fotoCategoria/salada.png"
import remedio from "../../../assets/fotoCategoria/remedio.png"
import congelado from "../../../assets/fotoCategoria/congelado.png"
import lanche from "../../../assets/fotoCategoria/lanche.png"
import pet from "../../../assets/fotoCategoria/pet.png"
import marmita from "../../../assets/fotoCategoria/marmita.png"
import carnes from "../../../assets/fotoCategoria/carne.png"
import bebidas from "../../../assets/fotoCategoria/bebidas.png"
import carrinho from "../../../assets/fotoCategoria/carrinho.png"
import star from "../../../assets/fotoCategoria/star.png"
import shopping from "../../../assets/fotoCategoria/shopping.png"
import brasileira from "../../../assets/fotoCategoria/brasileira.png"

export const Busca = () => {
    return (<View style={styles.container}>
            <View style={styles.inputContainer}>   
                <Ionicons name= "search" size={16} color="#d70a40"/>  
                <TextInput style={styles.input}
                placeholder="O que vai pedir hoje?" 
                placeholderTextColor={"#666666"} 
                />
            </View>
            <ScrollView style={styles.categorias}>
            <Text style={styles.titulo}>Categorias</Text>
            <View style={styles.categoriasView}>
                <CardCategoria nomeCategoria={"Mercado"} imagem={carrinho} cor={"#005943"}/>
                <CardCategoria nomeCategoria={"Farmácia"} imagem={remedio} cor={"#ff6537"}/>
                <CardCategoria nomeCategoria={"Bebidas"} imagem={bebidas} cor={"#ff6537"}/>
                <CardCategoria nomeCategoria={"Pet"} imagem={pet} cor={"#005943"}/>
                <CardCategoria nomeCategoria={"Shopping"} imagem={shopping} cor={"#e28b24"}/>
                <CardCategoria nomeCategoria={"Super Restaurantes"} imagem={star} cor={"#8a011b"}/>
                <CardCategoria nomeCategoria={"Brasileira"} imagem={brasileira} cor={"#e28b24"}/>
                <CardCategoria nomeCategoria={"Saudável"} imagem={salada} cor={"#fb76a3"}/>
                <CardCategoria nomeCategoria={"Marmita"} imagem={marmita} cor={"#e28b24"}/>
                <CardCategoria nomeCategoria={"Congelados"} imagem={congelado} cor={"#fb76a3"}/>
                <CardCategoria nomeCategoria={"Lanches"} imagem={lanche} cor={"#ff6537"}/>
                <CardCategoria nomeCategoria={"Carnes"} imagem={carnes} cor={"#fe7a28"}/>
                
            </View>

            </ScrollView>


        <View style={styles.navbarFixa}>
                    <Navbar naBusca/>
                </View>
    </View>)
}
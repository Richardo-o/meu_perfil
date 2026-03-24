/**
 * ==========================================================
 * HELLO.TSX — SEU PRIMEIRO COMPONENTE REACT NATIVE
 * ==========================================================
 *
 * Este arquivo ensina os conceitos básicos de um componente:
 * - View, Text e StyleSheet
 * - Flexbox para layout
 * - Estilização e customização visual
 */
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';

// ✅ Um componente React Native é uma FUNÇÃO que retorna JSX (UI)
export default function HelloScreen() {
    return (
        // View = o <div> do React Native. Todo layout começa com View.
        <ScrollView contentContainerStyle={styles.scrollContainer}>

            <View style={styles.circle}>
                    <Image source={require('../assets/images/perfil-foto.jpg')} style={styles.image} resizeMode="cover"/>
            </View>
            {/* ── SEÇÃO 1: Texto Básico ── */}
            <Text style={styles.titulo}>Olá, Me chamo Ricardo👋</Text>
            <Text style={styles.aboutMe}>
                Sempre gostei muito de aprender sobre tecnologia. Isso vem desde a minha infância, onde sempre tive contato com o computador e gostar de saber como as coisas na internet funcionavam. Hoje, me vejo como a mesma pessoa, sempre desafiando a mim mesmo para melhorar minhas habilidades como profissional.
                Atualmente atuo como desenvolvedor fullstack. Diariamente trabalhando com diversas tecnologias, como: Node.js, Next.js, React, MongoDB, MySQL, JS, HTML,CSS. Além disso estou cursando o 4 semestre da faculdade de Desenvolvimento de Software Multiplataforma.</Text>

            <Text style={styles.titulos}>🤖 Linguagens e Tecnologias</Text>
            {/* ── SEÇÃO 2: Flexbox em Ação ── */}
            {/* flexDirection: 'row' = itens lado a lado (horizontal) */}
            <View style={styles.row}>
               <View style={styles.box}>
                    <Image 
                        source={require('../assets/images/js_logo.png' )}
                        style={styles.logoIcon}/>  
                </View>
                <View style={styles.box}>
                    <Image 
                        source={require('../assets/images/ts_logo.png' )}
                        style={styles.logoIcon}/>  
                </View>
                <View style={styles.box}>
                    <Image 
                        source={require('../assets/images/react_icon.png' )}
                        style={styles.logoIcon}/>  
                </View>
                <View style={styles.box}>
                    <Image 
                        source={require('../assets/images/py_logo.png' )}
                        style={styles.logoIcon}/>  
                </View>
            </View>



            {/* ── SEÇÃO 3: Composição de Estilos ── */}
            {/* style={[base, variante]} → Combina múltiplos estilos! */}
            <View style={[styles.card, styles.cardDestaque]}>
                <Text style={styles.cardTitulo}>Ricardo Estevam Stats</Text>
                <Text style={styles.cardTexto}>
                    Total Starts Earned: 2
                </Text>
                <Text style={styles.cardTexto}>
                    Total Commits (last year): 167
                </Text>
                <Text style={styles.cardTexto}>
                    Total PRs: 11  
                </Text>
                <Text style={styles.cardTexto}>
                    Total Issues: 1
                </Text>
                <Text style={styles.cardTexto}>
                    Contibuted to (last year): 2
                </Text>
            </View>
              <View style={[styles.card, styles.cardDestaque]}>
                <Text style={styles.cardTitulo}>Most Used Languages</Text>
                <Text style={styles.cardTexto}>
                    • JavaScript 67.00%
                </Text>
                <Text style={styles.cardTexto}>
                    • CSS 14.64%
                </Text>
                <Text style={styles.cardTexto}>
                    • EJS 11.61%
                </Text>
            </View>
        </ScrollView>
    );
}

// ── STYLESHEET: Por que usar? ──
// 1. Performance: Cria os estilos uma vez, não a cada render
// 2. Autocomplete: O editor sugere propriedades
// 3. Validação: Erros de digitação são detectados
const { width } = Dimensions.get('window'); // Largura da tela para responsividade

const styles = StyleSheet.create({
    // ── Layout Principal (Flexbox) ──
    scrollContainer: {
        padding: 30,
        alignItems: 'center',
        paddingBottom: 50,    
    },

    // ── Tipografia ──
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2D3436',
        marginBottom: 8,
    },
    titulos: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2D3436',
        marginBottom: 8,
        
    },

    aboutMe: {
        fontSize: 16,
        color: '#636E72',
        marginBottom: 32,
    },

    // ── Flexbox Row (horizontal) ──
    row: {
        flexDirection: 'row',       // Itens lado a lado
        gap: 12,                    // Espaço entre itens
        marginBottom: 32,
    },

    // ── Boxes coloridos ──
    box: {
        width: 80,
        height: 80,
        borderRadius: 16,           // Bordas arredondadas
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },

    // ── Card com Sombra ──
    card: {
        width: width - 48,          // Responsivo: tela menos padding
        padding: 30,
        backgroundColor: '#fff',
        borderRadius: 12,
        margin: 10,
    },
    cardDestaque: {
        // Sombra iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        // Sombra Android
        elevation: 4,
    },
    cardTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2D3436',
        marginBottom: 8,
    },
    cardTexto: {
        fontSize: 14,
        color: '#636E72',
        lineHeight: 20,
    },
    circle:{
        borderRadius: 75,
        width: 150,
        height: 150,
        backgroundColor: '#000',
        overflow: 'hidden',
        marginTop: 20,
    },

    image:{
        width: '100%',
        height: '100%',
    },
    logoIcon: {
        width: 50,  
        height: 50,
    },
   
});
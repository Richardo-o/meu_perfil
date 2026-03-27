
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';





export default function HelloScreen() {
    return (
        
        <ScrollView contentContainerStyle={styles.scrollContainer}>

            <View>
                <View style={styles.circle}>
                        <Image source={require('../assets/images/perfil-foto.jpg')} style={styles.image} resizeMode="cover"/>
                </View>
                <Text> 15 followers. 15 following</Text>
            </View>
        
            <Text style={styles.titulo}>Olá, Me chamo Ricardo👋</Text>
            <Text style={styles.subtitulo}>@Richardo-o</Text>
            <Text style={styles.aboutMe}>
                Sempre gostei muito de aprender sobre tecnologia. Isso vem desde a minha infância, onde sempre tive contato com o computador e gostar de saber como as coisas na internet funcionavam. Hoje, me vejo como a mesma pessoa, sempre desafiando a mim mesmo para melhorar minhas habilidades como profissional.
                Atualmente atuo como desenvolvedor fullstack. Diariamente trabalhando com diversas tecnologias, como: Node.js, Next.js, React, MongoDB, MySQL, JS, HTML,CSS. Além disso estou cursando o 4 semestre da faculdade de Desenvolvimento de Software Multiplataforma.</Text>

            <Text style={styles.titulos}>🤖 Linguagens e Tecnologias</Text>
           
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

           <View style={styles.container}>
    <Text style={styles.titulos}>Popular repositories</Text>
    
    <View style={styles.cardRepository}>
        <View style={styles.cardHeader}>
            <Text style={styles.repoName}>pi_3_semestre_react</Text>
            <View style={styles.publicBadge}>
                <Text style={styles.publicText}>Public</Text>
            </View>
        </View>
        
        <View style={styles.languageContainer}>
            <View style={[styles.langCircle, { backgroundColor: '#f1e05a' }]} />
            <Text style={styles.langText}>JavaScript</Text>
            <Text style={styles.starText}>⭐ 2</Text>
            
        </View>
    </View>
     <View style={styles.cardRepository}>
        <View style={styles.cardHeader}>
            <Text style={styles.repoName}>sistema-loja-nodejs</Text>
            <View style={styles.publicBadge}>
                <Text style={styles.publicText}>Public</Text>
            </View>
        </View>
        
        <View style={styles.languageContainer}>
            <View style={[styles.langCircle, { backgroundColor: '#A91E50' }]} />
            <Text style={styles.langText}>EJS</Text>
            <Text style={styles.starText}>⭐ 5</Text>
            
        </View>
    </View>
     <View style={styles.cardRepository}>
        <View style={styles.cardHeader}>
            <Text style={styles.repoName}>Portifolio2</Text>
            <View style={styles.publicBadge}>
                <Text style={styles.publicText}>Public</Text>
            </View>
        </View>
        
        <View style={styles.languageContainer}>
            <View style={[styles.langCircle, { backgroundColor: '#663399' }]} />
            <Text style={styles.langText}>CSS</Text>
            <Text style={styles.starText}></Text>
            
        </View>
    </View>
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
    scrollContainer: {
        padding: 30,
        alignItems: 'center',
        paddingBottom: 50,    
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2D3436',
        marginBottom: 8,
    },
    subtitulo:{
        fontSize: 20,
        color: '#2D3436',
        marginBottom: 8,
    },
    titulos: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2D3436',
        marginBottom: 8,
        marginTop: 8,
        alignSelf: 'flex-start', 
    },
    aboutMe: {
        fontSize: 16,
        color: '#636E72',
        marginBottom: 32,
    },
    row: {
        flexDirection: 'row',       
        gap: 12,                    
        marginBottom: 32,
    },
    box: {
        width: 80,
        height: 80,
        borderRadius: 16,           
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    card: {
        width: width - 48,          
        padding: 30,
        backgroundColor: '#fff',
        borderRadius: 12,
        margin: 10,
    },
    cardDestaque: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
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
    cardRepository: {
        width: width - 90, 
        padding: 16,
        backgroundColor: '#FFFFFF', 
        borderRadius: 6,           
        borderWidth: 1,
        borderColor: '#D0D7DE',    
        marginVertical: 8,
        alignSelf: 'center',
    },
    titleText: {
        color: '#0969DA',        
        fontSize: 16,
        fontWeight: '600',
    },
    publicBadge: {
        borderWidth: 1,
        borderColor: '#D0D7DE',
        borderRadius: 12,
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
    publicText: {
        color: '#57606A',         
        fontSize: 12,
    },
    languageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    langCircle: {
        width: 12,
        height: 12,
        borderRadius: 50,
        marginRight: 6,
    },
    langText: {
        color: '#57606A',
        fontSize: 12,
        marginRight: 16,
    },
    starText: {
        color: '#57606A',
        fontSize: 12,
    },
    container: {
        width: '100%',           
        paddingHorizontal: 16,     
        backgroundColor: '#FFFFFF', 
        paddingTop: 20,          
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        padding: 20
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    repoName: {
        color: '#0969DA',        
        fontSize: 16,
        fontWeight: 'bold',
    },
});
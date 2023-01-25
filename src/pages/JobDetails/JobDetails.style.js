import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 4,
    }, 
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent:'space-around'
    },
    jobTitle:{
        color: 'black',
        fontSize: 28,
        fontWeight:'bold',
        textAlign: 'center',
        marginBottom: 8,
    },
    color:{
        color:'crimson',
    },
    bold: {
        fontWeight:'bold',
    },
    jobDetail: {
        textAlign:'center',
        fontSize: 24,
        color:'black',
        marginVertical: 8,
    },
});

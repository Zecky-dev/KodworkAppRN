import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    // Job card css
    container: {
        backgroundColor: 'white',
        padding: 8,
        margin: 8,
        borderWidth: 0.7,
        borderColor: 'gray',
        borderRadius: 6,
    },
    jobTitle: {
        fontSize: 20,
        color:'black',
        fontWeight:'bold',
    },
    company:{
        marginVertical: 3,
    },
    locationContainer: {
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    innerLocationContainer: {
        backgroundColor:'crimson',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 16,
    },
    location:{
        color: 'white',
        fontWeight:'bold',
    },
    levelContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    level:{
        color:'crimson',
        fontWeight:'bold',
    },
    favButtonContainer: {
        flex: 1,
    },
    middle: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    }
});
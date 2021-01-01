module.exports = function(StyleSheet) {
    const style = StyleSheet.create({
        container: {
            flex: 1,
            width: '100%',
            padding: 10
        },
        input: {
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 20,
            padding: 10,
        },
        BtnRow: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: 15
        },
        btn: {
            borderColor: '#FF00B2',
            borderWidth: 1,
            borderRadius: 10,
            padding: 8,
            backgroundColor: '#FF00B2',
        },
        donatebtnleave: {
            alignItems: 'center',
        },
        appbackground: {
            backgroundColor: 'black'
        }
    });
    return style
}
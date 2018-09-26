import React, {Component} from 'react';
import {Dimensions, StyleSheet, View, WebView} from 'react-native';


export default class App extends Component {

    render() {


        return (
            <View style={styles.view}>
                <WebView
                    style={styles.videoWebView}
                    source={{uri: 'https://www.youtube.com/embed/tgbNymZ7vqY?playsinline=1'}}
                    allowsInlineMediaPlayback={true}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create(
    {
        videoWebView: {
            backgroundColor: 'transparent',
            width: Dimensions.get('window').width,
            marginLeft: 0,
            marginTop: 100,
            marginBottom: 16
        }, view: {
            height: Dimensions.get('window').height / 2,
            width: Dimensions.get('window').width,
        }
    }
);
import React from 'react';
import {
  ActivityIndicatorIOS,
  View,
  Text,
  Platform,
  ProgressBarAndroid,
} from 'react-native';

const LoadingEffect = (props) => {
  const customStyles = {
    overlay: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      backgroundColor: props.overlayColor,
      width: props.overlayWidth,
      height: props.overlayHeight,
    },

    text: {
      color: props.textColor,
      fontSize: props.textFontSize,
      marginTop: 8,
    },
  };

  if (!props.isVisible) {
    return <View />;
  }

  return (
    <View style={styles.container}>
      <View style={customStyles.overlay}>
        {(Platform.OS === 'ios')
          ? <ActivityIndicatorIOS color={props.color} size={props.size} />
          : <ProgressBarAndroid styleAttr={props.size} color={props.color} />}
        <Text style={customStyles.text}>{props.text}</Text>
      </View>
    </View>
  );
};

LoadingEffect.propTypes = {
  isVisible: React.PropTypes.bool.isRequired,
  size: React.PropTypes.string,
  color: React.PropTypes.string,
  overlayWidth: React.PropTypes.number,
  overlayHeight: React.PropTypes.number,
  overlayColor: React.PropTypes.string,
  text: React.PropTypes.string,
  textColor: React.PropTypes.string,
  textFontSize: React.PropTypes.number,
};

LoadingEffect.defaultProps = {
  isDismissible: false,
  overlayWidth: 80,
  overlayHeight: 80,
  overlayColor: 'rgba(0,0,0,0.6)',
  size: (Platform.OS === 'ios') ? 'large' : 'SmallInverse',
  color: (Platform.OS === 'ios') ? 'gray' : 'white',
  text: 'Loading',
  textColor: '#eeeeee',
  textFontSize: 14,
};

const styles = {
  container: {
    position: 'absolute',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
};

export default LoadingEffect;

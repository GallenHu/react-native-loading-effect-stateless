# react-native-loading-effect-stateless

Build base on  [react-native-loading-effect](https://github.com/Iliker/react-native-loading-effect)

## Changes
- Use Stateless Functions
- Rmove `showLoadingEffect` Function
- Rmove `dismissLoadingEffect` Function

## Usage
```js
import LoadingEffect from 'react-native-loading-effect-stateless';

export class YourComponent extends React.Component {
  ...

  render() {
    return (
      <View>
        ...
        <LoadingEffect
          isVisible={this.state.isVisible}
        />  
      </View>
    );  
  }
}
```

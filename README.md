# react-native-loading-effect-stateless

Build base on  [react-native-loading-effect](https://github.com/Iliker/react-native-loading-effect)

## Changes
- Use Stateless Functions
- Rmove `showLoadingEffect` Function
- Rmove `dismissLoadingEffect` Function
- Add props `isCover`

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

## Props

- **`isVisible`** _(Bool)_ - isRequired.
- **`size`** _(String)_ - size of the indicator. Small has a height of 20, large has a height of 36.
- **`color`** _(Number)_ - color of the indicator. Default gray.
- **`overlayWidth`** _(Number)_ - overlay width.
- **`overlayHeight`** _(Number)_ - overlay height.
- **`overlayColor`** _(String)_ - overlay color.
- **`text`** _(String)_ - text. Default Loading.
- **`textColor`** _(String)_ - text color.
- **`textFontSize`** _(Number)_ - text font size.
- **`isCover`** _(Bool)_ - cover the full page. You can click other Components when false. Default true.

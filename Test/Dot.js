import {View} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';

const Dot = () => {
  image = [
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?girl',
    'https://source.unsplash.com/1024x768/?tree',
  ];

  return (
    <View style={{marginVertical: 15}}>
      <SliderBox
        dotColor="#1b0482"
        autoplayInterval={3000}
        circleLoop
        sliderBoxHeight={200}
        autoplay="true"
        images={image}
      />
    </View>
  );
};

export default Dot;

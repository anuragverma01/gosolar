import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {SliderBox} from 'react-native-image-slider-box';

export default class Dot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://m.media-amazon.com/images/G/31/img21/Wireless/ssserene/OPmarble/D66357764_WLD_OnePlus_Salami_1400x800._CB587624066_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Sabeer/MAY_ART_Teaser/LATV_Pricereveal/Header-banner_1242x550.jpg_01_01.jpg',
        'https://m.media-amazon.com/images/G/31/CookwareDining/Header-Vguard/PC_vguard._SX3000_QL85_FMpng_.png',
        'https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/MayART23/D79181365_1242x450_B.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/ssserene/MayART23/BDOS/Banner_Mob2.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/img23/Cons/MayART23/GW/X-GL/REC_NonPEA_PC_3000._CB590875252_.jpg',
        'https://m.media-amazon.com/images/I/61AT506RQ2L._SX3000_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Events/MayART23/Furniture_Storepage_PC_1500x300.jpg',
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          inactiveDotColor="#97DEFF"
          resizeMode="stretch"
          autoplay={true}
          circleLoop
          autoplayInterval={3000}
          imageLoadingColor="transparent"
          images={this.state.images}
          sliderBoxHeight={200}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    resizeMode: 'stretch',
    marginVertical: 10,
  },
});

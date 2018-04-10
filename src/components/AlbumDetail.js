import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const {
    thumbContainerStyle,
    thumbStyle,
    headerContentStyle,
    title,
    albumImageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <Image
          style={albumImageStyle}
          source={{ uri: album.image }}
        />
      </CardSection>

      <CardSection>
        <View style={thumbContainerStyle}>
          <Image
            style={thumbStyle}
            source={{ uri: album.thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={title}>{album.title}</Text>
          <Text>{album.artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Button
          onPress={() => Linking.openURL(album.url)}
        >
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbStyle: {
    height: 50,
    width: 50,
    marginRight: 12
  },
  thumbContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  albumImageStyle: {
    height: 300,
    width: null,
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  }
};

export default AlbumDetail;

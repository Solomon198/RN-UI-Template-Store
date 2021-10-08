import React from 'react';
import {View, Avatar} from 'react-native-ui-lib';
import {createStyle} from '../stylesheets/header.search';
import {Input, Button, Icon} from 'native-base';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {StatusBar} from 'react-native';

const SearchHeader = (props: component.HeadersProps) => {
  const {styles, theme} = createStyle(props.context);
  return (
    <View style={styles.header}>
      <StatusBar
        translucent={false}
        backgroundColor={theme.theme.color.statusBar}
      />
      <View style={styles.sideItems}>
        <Button
          onPress={() => {
            if (props.onAvatarPressed) {
              props.onAvatarPressed();
            }
          }}
          style={styles.sideButtons}>
          <Avatar
            size={35}
            source={require('../../../assets/images/avatar.jpeg')}
          />
        </Button>
      </View>

      <View style={styles.searchInput}>
        <Input
          placeholder={props.placeholder || 'Search'}
          underlineColorAndroid="transparent"
          variant="unstyled"
          onFocus={() => {
            if (props.onFocus) {
              props.onFocus();
            }
          }}
          style={styles.searchInput}
        />
      </View>
      <View style={styles.sideItems}>
        <Button style={styles.sideButtons}>
          <Icon as={EvilIcons} name="search" />
        </Button>
      </View>
    </View>
  );
};

export default SearchHeader;

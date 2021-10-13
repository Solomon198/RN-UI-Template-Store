import React from 'react';
import {View} from 'react-native-ui-lib';
import {createStyle} from '../stylesheets/header.search';
import {Input, Button, Icon} from 'native-base';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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
        {!props.hideLeftItem && (
          <Button
            onPress={() => {
              if (props.onAvatarPressed) {
                props.onAvatarPressed();
              }
            }}
            style={styles.sideButtons}>
            <Icon
              color={theme.theme.color.primary}
              name="menu"
              as={MaterialIcons}
            />
          </Button>
        )}
      </View>

      <View style={styles.searchInput}>
        <Input
          placeholder={props.placeholder || 'Search'}
          underlineColorAndroid="transparent"
          variant="unstyled"
          autoFocus={props.autoFocus}
          onChangeText={text => props.onChangeText(text)}
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
          <Icon
            color={theme.theme.color.primary}
            as={EvilIcons}
            name="search"
          />
        </Button>
      </View>
    </View>
  );
};

export default SearchHeader;

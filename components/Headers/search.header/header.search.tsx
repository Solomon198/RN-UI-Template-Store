import React from 'react';
import {View, Avatar} from 'react-native-ui-lib';
import {useThemeAwareObject} from '../../../app.configurations/theme/custome.theme.hook';
import {createStyle} from '../stylesheets/header.search';
import {Input, Button, Icon} from 'native-base';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {StatusBar} from 'react-native';

const SearchHeader = (props: component.HeadersProps) => {
  const {styles, theme} = useThemeAwareObject(createStyle) as {
    styles: any;
    theme: theme.ApplicationTheme;
  };
  return (
    <View style={styles.header}>
      <StatusBar backgroundColor={theme.color.statusBar} />
      <View style={styles.sideItems}>
        <Button style={styles.sideButtons}>
          <Icon style={styles.icon} as={EvilIcons} name="search" />
        </Button>
      </View>

      <View style={styles.searchInput}>
        <Input
          placeholder={props.placeholder || 'Search'}
          underlineColorAndroid="transparent"
          variant="unstyled"
          style={styles.searchInput}
        />
      </View>
      <View style={styles.sideItems}>
        <Button style={styles.sideButtons}>
          <Avatar
            size={35}
            source={require('../../../assets/images/avatar.jpeg')}
          />
        </Button>
      </View>
    </View>
  );
};

export default SearchHeader;

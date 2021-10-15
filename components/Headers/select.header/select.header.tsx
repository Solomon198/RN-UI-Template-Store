import React, {useState} from 'react';
import {View} from 'react-native-ui-lib';
import {createStyle} from '../stylesheets/select.header';
import {Button, Icon, Select} from 'native-base';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StatusBar} from 'react-native';
import SpinKit from 'react-native-spinkit';

const SelectHeader = (props: component.HeadersProps) => {
  const {styles, theme} = createStyle(props.context);
  const categories = props.categories || [];
  const [selectedValue, setValue] = useState('');

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
        <Select
          variant="unstyled"
          placeholder={props.placeholder}
          selectedValue={selectedValue}
          onValueChange={(itemValue: string) => {
            setValue(itemValue);
            props.onChangeText(itemValue);
          }}>
          {categories.map(categorie => (
            <Select.Item
              label={categorie.name}
              value={categorie.id.toString()}
            />
          ))}
        </Select>
      </View>
      <View style={styles.sideItems}>
        {props.isSearching ? (
          <SpinKit type="Circle" color={theme.theme.color.primary} />
        ) : (
          <Button style={styles.sideButtons}>
            <Icon
              color={theme.theme.color.primary}
              as={EvilIcons}
              name="search"
            />
          </Button>
        )}
      </View>
    </View>
  );
};

export default SelectHeader;

import React from 'react';
import {Button, Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import createStyle from '../stylesheets/normal';

type Props = {
  placement?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  onPress?: () => void;
  context: ThemeObject;
};
const FaBCartComponent = (props: Props) => {
  const {styles, theme} = createStyle(props.context);
  return (
    <Button
      startIcon={
        <Icon
          color={theme.theme.color.primary}
          as={Ionicons}
          size={6}
          name="arrow-back"
        />
      }
      style={styles.button}
      onPress={props.onPress}
    />
  );
};

export default FaBCartComponent;

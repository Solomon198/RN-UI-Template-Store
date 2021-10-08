import {StyleSheet} from 'react-native';

const createStyle = (theme: theme.ApplicationTheme) => {
  const styles = StyleSheet.create({
    fab: {
      backgroundColor: '#f4f4f4',
      opacity: 0.8,
    },
    fabIcon: {
      color: '#444444',
      fontSize: 25,
    },
    fabBadge: {
      position: 'absolute',
      width: 21,
      height: 21,
      backgroundColor: theme.theme.color.primary,
      borderRadius: 100,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      bottom: 5,
      right: -25,
    },
    badgeText: {
      color: '#f4f4f4',
      fontSize: 11,
      fontWeight: '700',
    },
  });

  return {styles, theme};
};

export default createStyle;

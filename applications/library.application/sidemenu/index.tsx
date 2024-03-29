import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {
  View,
  //  Switch
  Text,
} from 'react-native-ui-lib';
import {ThemeContext} from '../../../app.configurations/theme/theme.ui.context';
import ComponentStyle from './stylesheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Icon} from 'native-base';
import {Logout} from '../profile/_redux/actions';
import {
  handleNavigation,
  OpenBrowser,
  ToggleNavigation,
} from '../_config_/navigation.configuration/navigationActions';
import {connect} from 'react-redux';
import NavigationScreens from '../_config_/navigation.configuration/navigation.screens';
type Props = {
  componentId: string;
  user: entities.User;
  logout: () => void;
};

// eslint-disable-next-line
const mapStateProps = (store: any) => ({
  user: store.Profile.user,
});
const mapDispatchProps = (dispatch: any) => ({
  logout: () => dispatch({type: Logout.DO_LOGOUT_CALLER}),
});

class ViewCarts extends React.Component<Props> {
  handleNavigate(Screen: string) {
    ToggleNavigation(false, this.props.componentId);
    handleNavigation(NavigationScreens.LIBARARY_CENTER_ID, Screen);
  }
  render() {
    const routes = [
      {
        routeName: 'Book categories',
        componentId: NavigationScreens.LIBRARY_BOOKS_CATEGORIES_SCREEN,
        iconName: 'list-ul',
        iconType: FontAwesome5,
      },
      {
        routeName: 'About IEC',
        componentId: NavigationScreens.LIBRARY_BOOKS_ABOUT_SCREEN,
        iconName: 'infocirlce',
        iconType: AntDesign,
      },
    ];

    const {styles, theme} = ComponentStyle(this.context);
    // const isLoggedIn = Object.keys(this.props.user).length > 0;
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            resizeMethod="resize"
            resizeMode="contain"
            style={styles.imageStyle}
            source={require('../../../assets/images/iec.jpg')}
          />
        </View>

        <TouchableOpacity
          onPress={() => OpenBrowser('https://iecbooks.com/my-account/')}
          style={styles.listItems}>
          <View style={styles.leftItem}>
            <Icon
              size={6}
              color={theme.theme.color.primary}
              as={MaterialCommunityIcons}
              name="account-box"
            />
          </View>
          <View style={styles.body}>
            <Text style={styles.routeName}>Account</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            OpenBrowser('https://iecbooks.com/my-account-2/orders/')
          }
          style={styles.listItems}>
          <View style={styles.leftItem}>
            <Icon
              size={6}
              color={theme.theme.color.primary}
              as={FontAwesome5}
              name="list-alt"
            />
          </View>
          <View style={styles.body}>
            <Text style={styles.routeName}>Orders</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            OpenBrowser('https://iecbooks.com/my-account-2/downloads/')
          }
          style={styles.listItems}>
          <View style={styles.leftItem}>
            <Icon
              size={6}
              color={theme.theme.color.primary}
              as={FontAwesome}
              name="download"
            />
          </View>
          <View style={styles.body}>
            <Text style={styles.routeName}>Downloads</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.list}>
          {routes.map(item => (
            <TouchableOpacity
              onPress={() => this.handleNavigate(item.componentId)}
              style={styles.listItems}>
              <View style={styles.leftItem}>
                <Icon
                  size={6}
                  color={theme.theme.color.primary}
                  as={item.iconType}
                  name={item.iconName}
                />
              </View>
              <View style={styles.body}>
                <Text style={styles.routeName}>{item.routeName}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* {isLoggedIn && (
          <Button
            onPress={() =>
              Alert.alert('', 'Are you sure you want to logout ?', [
                {
                  onPress: () => {
                    this.props.logout();
                    ToggleNavigation(
                      false,
                      NavigationScreens.LIBARARY_CENTER_ID,
                    );
                  },
                  text: 'Yes',
                },
                {onPress: () => '', text: 'No'},
              ])
            }
            endIcon={<Icon as={AntDesign} name="logout" />}
            style={styles.editProfileBtn}>
            <Text style={styles.buttonText}>Logout</Text>
          </Button>
        )} */}

        {/* {!isLoggedIn && (
          <Button
            onPress={() => {
              ToggleNavigation(false, NavigationScreens.LIBARARY_CENTER_ID);

              handleNavigation(
                NavigationScreens.LIBARARY_CENTER_ID,
                NavigationScreens.LIBRARY_BOOKS_LOGIN_SCREEN,
              );
            }}
            endIcon={<Icon as={AntDesign} name="login" />}
            style={styles.editProfileBtn}>
            <Text style={styles.buttonText}>Login</Text>
          </Button>
        )} */}
      </View>
    );
  }
}

ViewCarts.contextType = ThemeContext;
export default connect(mapStateProps, mapDispatchProps)(ViewCarts);

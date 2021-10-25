import React from 'react';
import {View, Text} from 'react-native-ui-lib';
import {createStyle} from '../../default.styles/styles';
import componentStyles from './stylesheet';
import {ThemeContext} from '../../../app.configurations/theme/theme.ui.context';
import {StatusBar, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button, Icon} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import ContainerComponent from '../../../components/containers/index';
import {handleNavigation} from '../_config_/navigation.configuration/navigationActions';
import NavigationScreens from '../_config_/navigation.configuration/navigation.screens';
import BackButton from '../../../components/Buttons/BackButtons/index';
import {Navigation} from 'react-native-navigation';

const mapStateProps = (store: any) => ({
  user: store.Profile.user,
});

type Props = {
  componentId: string;
  user: entities.User;
};

class Profile extends React.Component<Props> {
  render() {
    const defaultStyles = createStyle(this.context);
    const {styles, theme} = componentStyles(this.context);
    return (
      <View style={[defaultStyles.containerStyle, styles.container]}>
        <StatusBar backgroundColor={theme.theme.color.statusBar} />
        <View style={styles.cartHeader}>
          <View style={styles.headerLeft}>
            <BackButton.NormalButton
              context={this.context}
              onPress={() => Navigation.pop(this.props.componentId)}
            />
          </View>
          <View style={styles.header}>
            <Text style={styles.cartText}>Profile</Text>
          </View>
          <View style={styles.headerLeft} />
        </View>

        {Object.keys(this.props.user).length === 0 && (
          <View style={styles.noProfileContainer}>
            <Text style={styles.infoCreateAccountTextHeader}>
              Don't have an IEC Books account ?
            </Text>
            <Text style={styles.infoCreateAccountTextSub}>
              create an account or login to your account using the buttons
              below, get the best books and order more !!
            </Text>
            <Button
              onPress={() =>
                handleNavigation(
                  this.props.componentId,
                  NavigationScreens.LIBRARY_BOOKS_SIGNUP_SCREEN,
                )
              }
              endIcon={<Icon as={Ionicons} name="ios-create-outline" />}
              style={styles.createAccountLink}>
              <Text style={styles.buttonText}>Create Account</Text>
            </Button>

            <Button
              onPress={() =>
                handleNavigation(
                  this.props.componentId,
                  NavigationScreens.LIBRARY_BOOKS_LOGIN_SCREEN,
                )
              }
              endIcon={<Icon as={AntDesign} name="login" />}
              style={styles.loginLink}>
              <Text style={styles.buttonText}>Login</Text>
            </Button>
          </View>
        )}

        {Object.keys(this.props.user).length > 0 && (
          <ScrollView style={styles.mainContainer}>
            <View style={styles.userInitials}>
              <ContainerComponent.InfoContainer
                context={this.context}
                label={'First name'}
                value={this.props.user.firstName}
              />
              <ContainerComponent.InfoContainer
                context={this.context}
                label={'Last name'}
                value={this.props.user.lastName}
              />
            </View>

            <View style={styles.item}>
              <ContainerComponent.InfoContainer
                context={this.context}
                label={'Address'}
                value={this.props.user.address}
              />
            </View>

            <View style={styles.item}>
              <ContainerComponent.InfoContainer
                context={this.context}
                label={'Email'}
                value={this.props.user.email}
              />
            </View>

            <View style={styles.item}>
              <ContainerComponent.InfoContainer
                context={this.context}
                label={'Phone number'}
                value={this.props.user.phoneNumber}
              />
            </View>

            <View style={styles.item}>
              <ContainerComponent.InfoContainer
                context={this.context}
                label={'State'}
                value={this.props.user.state}
              />
            </View>

            <View style={styles.item}>
              <ContainerComponent.InfoContainer
                context={this.context}
                label={'City'}
                value={this.props.user.city}
              />
            </View>

            <Button
              onPress={() =>
                handleNavigation(
                  this.props.componentId,
                  NavigationScreens.LIBRARY_BOOKS_SIGNUP_SCREEN,
                )
              }
              endIcon={<Icon as={Ionicons} name="ios-create-outline" />}
              style={styles.editProfileBtn}>
              <Text style={styles.buttonText}>Edit Profile</Text>
            </Button>
          </ScrollView>
        )}
      </View>
    );
  }
}

Profile.contextType = ThemeContext;

export default connect(mapStateProps)(Profile);

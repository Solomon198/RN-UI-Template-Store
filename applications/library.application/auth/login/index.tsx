import React from 'react';
import {View, Text} from 'react-native-ui-lib';
// import {createStyle} from '../../../default.styles/styles';
// import componentStyles from './stylesheet';
import {ThemeContext} from '../../../../app.configurations/theme/theme.ui.context';
// import {StatusBar} from 'react-native';
// import {Icon, Button} from 'native-base';
// import ContainerComponent from '../../../../components/containers/index';
import {connect} from 'react-redux';
// import BackButton from '../../../../components/Buttons/BackButtons/index';
// import SpinKit from 'react-native-spinkit';
// import {Navigation} from 'react-native-navigation';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import {Login} from './_redux/actions';
// import {handleNavigation} from '../../_config_/navigation.configuration/navigationActions';
// import NavigationScreens from '../../_config_/navigation.configuration/navigation.screens';
// import {WebView} from 'react-native-webview';

const mapDispatchProps = (dispatch: any) => ({
  login: (data: any, fromCheckout: boolean) =>
    dispatch({type: Login.LOGIN_CALLER, payload: data, fromCheckout}),
});

const mapStateProps = (store: any) => ({
  loginStatus: store.Login.loginStatus,
});

type Props = {
  componentId: string;
  loginStatus: string;
  fromCheckout: boolean;
  login: (data: string, fromCheckout: boolean) => void;
};

class LoginScreen extends React.Component<Props> {
  state = {
    email: '',
    password: '',
  };

  setInput(inputName: string, value: string) {
    this.setState({[inputName]: value});
  }

  doLogin() {
    const {email, password} = this.state;
    const data: any = {
      email,
      password,
    };

    this.props.login(data, this.props.fromCheckout);
  }

  render() {
    // const defaultStyles = createStyle(this.context);
    // const {styles, theme} = componentStyles(this.context);
    // const {
    //   email,

    //   password,
    // } = this.state;
    // const isLoading = this.props.loginStatus === Login.LOGIN_STARTED;
    return (
      <View>
        <Text>Hello welcome to the show</Text>
      </View>
      // <WebView
      //   startInLoadingState={true}
      //   allowFileAccess={true}
      //   javaScriptEnabled={true}
      //   domStorageEnabled={true}
      //   mixedContentMode={'always'}
      //   source={{uri: 'https://iecbooks.com/my-account-2/downloads/'}}
      // />
      // <View style={[defaultStyles.containerStyle, styles.mainContainer]}>
      //   <StatusBar backgroundColor={theme.theme.color.statusBar} />
      //   <View style={styles.cartHeader}>
      //     <View style={styles.headerLeft}>
      //       <BackButton.NormalButton
      //         context={this.context}
      //         onPress={() => Navigation.pop(this.props.componentId)}
      //       />
      //     </View>
      //     <View style={styles.header}>
      //       <Text style={styles.cartText}>Login</Text>
      //     </View>
      //     <View style={styles.headerLeft} />
      //   </View>
      //   <View style={styles.mainContainer}>
      //     <View style={styles.item}>
      //       <ContainerComponent.InputContainer
      //         onChangeText={text => this.setInput('email', text)}
      //         context={this.context}
      //         label={'Email'}
      //         value={email}
      //       />
      //     </View>
      //     <View style={styles.item}>
      //       <ContainerComponent.InputContainer
      //         onChangeText={text => this.setInput('password', text)}
      //         context={this.context}
      //         label={'Password'}
      //         secureText
      //         value={password || ''}
      //       />
      //     </View>
      //     <Button
      //       disabled={!password.trim() && !email.trim()}
      //       onPress={() => this.doLogin()}
      //       endIcon={
      //         isLoading ? (
      //           <SpinKit type="Circle" color="#fff" />
      //         ) : (
      //           <Icon as={AntDesign} name="login" />
      //         )
      //       }
      //       style={styles.editProfileBtn}>
      //       <Text style={styles.buttonText}>Login</Text>
      //     </Button>
      //     <Button
      //       onPress={() =>
      //         handleNavigation(
      //           this.props.componentId,
      //           NavigationScreens.LIBRARY_BOOKS_SIGNUP_SCREEN,
      //         )
      //       }
      //       endIcon={<Icon as={Ionicons} name="ios-create-outline" />}
      //       style={styles.signUpBtn}>
      //       <Text style={styles.buttonText}>Create Account</Text>
      //     </Button>
      //   </View>
      // </View>
    );
  }
}

LoginScreen.contextType = ThemeContext;

export default connect(mapStateProps, mapDispatchProps)(LoginScreen);

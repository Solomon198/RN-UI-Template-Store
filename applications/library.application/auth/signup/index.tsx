import React from 'react';
import {View, Text} from 'react-native-ui-lib';
import {createStyle} from '../../../default.styles/styles';
import componentStyles from './stylesheet';
import {ThemeContext} from '../../../../app.configurations/theme/theme.ui.context';
import {StatusBar, ScrollView} from 'react-native';
import {Icon, Button, Select} from 'native-base';
import ContainerComponent from '../../../../components/containers/index';
import {connect} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SignUpInputs, SignUpNewAccount} from './_redux/actions';
import {UpdateAccount} from '../../profile/_redux/actions';
import {Navigation} from 'react-native-navigation';
import BackButton from '../../../../components/Buttons/BackButtons/index';
import Nigeria from '../../_data_/nigeria.state.lgas';
import SpinKit from 'react-native-spinkit';

const mapDispatchProps = (dispatch: any) => ({
  SetInputValue: (inputName: string, value: string) =>
    dispatch({type: SignUpInputs.SET_SIGNUP_INPUT_CALLER, inputName, value}),
  SignUp: (data: any) =>
    dispatch({type: SignUpNewAccount.SIGNUP_ACCOUNT_CALLER, payload: data}),
  UpdateAccount: (payload: any) =>
    dispatch({type: UpdateAccount.UPDATE_ACCOUNT_CALLER, payload}),
});

const mapStateProps = (store: any) => ({
  signUpProps: store.SignUp,
  signupStatus: store.SignUp.signupStatus,
  signupError: store.SignUp.signupError,
  user: store.Profile.user,
  updateAccountStatus: store.Profile.updateAccountStatus,
});

type Props = {
  carts: ReduxStore.BookInCart[];
  componentId: string;
  signUpProps: entities.User;
  signupStatus: string;
  signupError: string;
  user: entities.User;
  updateAccountStatus: string;

  UpdateAccount: (payload: any) => void;
  SetInputValue: (inputName: string, value: string) => void;
  SignUp: (data: any) => void;
};

class SignUp extends React.Component<Props> {
  state = {
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    city: '',
    state: '',
    password: '',
    phoneNumber: '',
  };

  componentDidMount() {
    this.setState(prev => ({...prev, ...this.props.user}));
  }

  setInput(inputName: string, value: string) {
    this.setState({[inputName]: value});
  }
  doSignUp() {
    const isLoggedIn = Object.keys(this.props.user).length > 0;
    const {
      firstName,
      lastName,
      address,
      email,
      city,
      state,
      password,
      phoneNumber,
    } = this.state;
    const data: any = {
      first_name: firstName,
      last_name: lastName,
      billing: {
        first_name: firstName,
        last_name: lastName,
        company: '',
        address_1: address,
        address_2: '',
        city: city,
        state: state,
        postcode: '94103',
        country: 'Nigeria',
        phone: phoneNumber,
      },
      shipping: {
        first_name: firstName,
        last_name: lastName,
        company: '',
        address_1: address,
        address_2: '',
        city: city,
        state: state,
        postcode: '94103',
        country: 'Nigeria',
      },
    };

    if (!isLoggedIn) {
      data.password = password;
      data.email = email;
      data.billing.email = email;
      data.username = `${firstName}.${lastName}`;
    }

    if (!isLoggedIn) {
      this.props.SignUp(data);
    } else {
      this.props.UpdateAccount({id: this.props.user.id, data});
    }
  }
  render() {
    const isLoggedIn = Object.keys(this.props.user).length > 0;

    const isLoading =
      SignUpNewAccount.SIGNUP_ACCOUNT_STARTED === this.props.signupStatus ||
      this.props.updateAccountStatus === UpdateAccount.UPDATE_ACCOUNT_STARTED;
    const defaultStyles = createStyle(this.context);
    const {styles, theme} = componentStyles(this.context);
    let lgas: string[] = [];
    const {
      firstName,
      lastName,
      address,
      email,
      city,
      state,
      password,
      phoneNumber,
    } = this.state;
    if (state && !isLoggedIn) {
      Nigeria.forEach($state => {
        if ($state.name === state && !isLoggedIn) {
          lgas = $state.lgas;
        }
      });
    }

    if (this.props.user.state && isLoggedIn) {
      Nigeria.forEach($state => {
        if ($state.name === this.state.state && isLoggedIn) {
          lgas = $state.lgas;
        }
      });
    }

    return (
      <View style={[defaultStyles.containerStyle, styles.mainContainer]}>
        <StatusBar backgroundColor={theme.theme.color.statusBar} />
        <View style={styles.cartHeader}>
          <View style={styles.headerLeft}>
            <BackButton.NormalButton
              context={this.context}
              onPress={() => Navigation.pop(this.props.componentId)}
            />
          </View>
          <View style={styles.header}>
            <Text style={styles.cartText}>
              {isLoggedIn ? 'Edit Account' : 'Signing Up'}
            </Text>
          </View>
          <View style={styles.headerLeft} />
        </View>
        <ScrollView>
          <View style={styles.mainContainer}>
            <View style={styles.userInitials}>
              <ContainerComponent.InputContainer
                onChangeText={text => this.setInput('firstName', text)}
                context={this.context}
                label={'First name'}
                value={firstName}
              />
              <ContainerComponent.InputContainer
                onChangeText={text => this.setInput('lastName', text)}
                context={this.context}
                label={'Last name'}
                value={lastName}
              />
            </View>

            <View style={styles.item}>
              <ContainerComponent.InputContainer
                onChangeText={text => this.setInput('address', text)}
                context={this.context}
                label={'Address'}
                value={address}
              />
            </View>

            {!isLoggedIn && (
              <View style={styles.item}>
                <ContainerComponent.InputContainer
                  onChangeText={text => this.setInput('email', text)}
                  context={this.context}
                  label={'Email'}
                  value={email}
                />
              </View>
            )}

            <View style={styles.item}>
              <ContainerComponent.InputContainer
                onChangeText={text => this.setInput('phoneNumber', text)}
                keyboardType="numeric"
                context={this.context}
                label={'Phone number'}
                value={phoneNumber}
              />
            </View>

            <View style={styles.userInitials}>
              <Select
                placeholder="Select State"
                selectedValue={state}
                width={'50%'}
                onValueChange={(itemValue: string) =>
                  this.setInput('state', itemValue)
                }>
                {Nigeria.map(state => (
                  <Select.Item label={state.name} value={state.name} />
                ))}
              </Select>
              <Select
                placeholder="Select LGA"
                selectedValue={city}
                width={'50%'}
                onValueChange={(itemValue: string) =>
                  this.setInput('city', itemValue)
                }>
                {lgas.map(lga => (
                  <Select.Item label={lga} value={lga} />
                ))}
              </Select>
            </View>
            {!isLoggedIn && (
              <View style={styles.item}>
                <ContainerComponent.InputContainer
                  onChangeText={text => this.setInput('password', text)}
                  context={this.context}
                  label={'Password'}
                  secureText
                  value={password || ''}
                />
              </View>
            )}
            <Button
              onPress={() => this.doSignUp()}
              disabled={isLoading}
              endIcon={
                isLoading ? (
                  <SpinKit type="Circle" color="#fff" />
                ) : (
                  <Icon as={Ionicons} name="ios-create-outline" />
                )
              }
              style={styles.editProfileBtn}>
              <Text style={styles.buttonText}>
                {isLoggedIn ? 'Update Profile' : 'Create Account'}
              </Text>
            </Button>
          </View>
        </ScrollView>
      </View>
    );
  }
}

SignUp.contextType = ThemeContext;

export default connect(mapStateProps, mapDispatchProps)(SignUp);

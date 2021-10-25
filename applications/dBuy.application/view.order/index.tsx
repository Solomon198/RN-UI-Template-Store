import React from 'react';
import {View, Text} from 'react-native-ui-lib';
import {createStyle} from '../../default.styles/styles';
import componentStyles from './stylesheet';
import {ThemeContext} from '../../../app.configurations/theme/theme.ui.context';
import {StatusBar, RefreshControl} from 'react-native';
import ListComonents from '../../../components/List/index';
import ItemComponent from '../../../components/ListItems/index';
import {connect} from 'react-redux';
import {FetchOrders} from './_redux/actions';
import {Actionsheet} from 'native-base';
import BackButton from '../../../components/Buttons/BackButtons/index';
import {Navigation} from 'react-native-navigation';

const mapDispatchProps = (dispatch: any) => ({
  fetchOrders: (email: string) =>
    dispatch({type: FetchOrders.FETCH_ORDERS_CALLER, payload: email}),
});

const mapStateProps = (store: any) => ({
  user: store.Profile.user,
  orders: store.Orders.orders,
  fetchOrderStatus: store.Orders.fetchOrderStatus,
});

type Props = {
  componentId: string;
  user: entities.User;
  orders: entities.Order[];
  fetchOrderStatus: string;
  fetchOrders: (email: string) => void;
};

class ViewOrder extends React.Component<Props> {
  state = {
    visible: false,
    entity: {line_items: []} as any,
  };
  componentDidMount() {
    this.props.fetchOrders(this.props.user.email);
  }
  cartEmptyComponent(styles: any) {
    return (
      <View style={styles.cartEmptyContainer}>
        <Text style={styles.emptyCartText}>No orders yet</Text>
      </View>
    );
  }

  render() {
    const isLoading =
      this.props.fetchOrderStatus === FetchOrders.FETCH_ORDERS_STARTED;
    const defaultStyles = createStyle(this.context);
    const {styles, theme} = componentStyles(this.context);
    return (
      <View style={defaultStyles.containerStyle}>
        <StatusBar backgroundColor={theme.theme.color.statusBar} />
        <View style={styles.imageContainer}>
          <View style={styles.cartHeader}>
            <View style={styles.headerLeft}>
              <BackButton.NormalButton
                context={this.context}
                onPress={() => Navigation.pop(this.props.componentId)}
              />
            </View>
            <View style={styles.headerBody}>
              <Text style={styles.cartText}> Orders</Text>
            </View>
            <View style={styles.headerLeft} />
          </View>
          <ListComonents.FlatList
            refreshControl={<RefreshControl refreshing={isLoading} />}
            adjustItemQuantity
            data={this.props.orders}
            ListEmptyComponent={this.cartEmptyComponent(styles)}
            renderItem={({item}: any) => (
              <ItemComponent.OrderItem
                context={this.context}
                onPress={item => this.setState({entity: item, visible: true})}
                item={item}
              />
            )}
          />
        </View>
        {this.state.visible && (
          <Actionsheet.Content
            // @ts-ignore
            onClose={() => this.setState({visible: false})}>
            {this.state.entity.line_items.map((item: any) => (
              <Actionsheet.Item>
                <View style={styles.actionItem}>
                  <View style={styles.body}>
                    <Text style={styles.actionText}>{item.name}</Text>
                  </View>
                </View>
              </Actionsheet.Item>
            ))}
          </Actionsheet.Content>
        )}
      </View>
    );
  }
}

ViewOrder.contextType = ThemeContext;

export default connect(mapStateProps, mapDispatchProps)(ViewOrder);

enum NavigationScreens {
  //user pages
  SIDEMENU_SCREEN = 'stack.user.sidemenu',
  DASHBOARD_SCREEN = 'stack.user.dashboard',

  // LIBARY  SCREENS
  LIBRARY_DASHBOARD_SCREEN = 'stack.library.screen',
  LIBRARY_BOOK_DETAIL_SCREEN = 'LIBRARY_BOOK_DETAIL_SCREEN',
  LIBRARY_BOOK_CART_SCREEN = 'LIBRARY_BOOK_CART_SCREEN',

  NOTIFICATION_SCREEN = 'stack.user.notifications',
  PAYMENT_OPTION_SCREEN = 'stack.user.payment.options',
  CREDIT_CARD = 'stack.user.credit.card',
  USER_PROFILE = 'stack.user.profile',
  MONITOR_PARCEL_DELIVERY = 'stack.user.rtc.trip',
  //auth pages
  SIGNUP_SCREEN = 'stack.auth.signup',
  SIGNIN_SCREEN = 'stack.auth.signin',
  VERIFICATION_SCREEN = 'stack.auth.verification',
  VALIDATE_RESET_CREDENTIALS = 'stack.auth.validate.reset.credentials',
  NEW_PASSWORD_SCREEN = 'stack.auth.newPassword',
  SWITCH_SCREEN = 'stack.auto.switch',
}

export default NavigationScreens;

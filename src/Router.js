import { StackNavigator } from 'react-navigation';
import Routes from './routes';

import { OnboardingScreen, RegistrationScreen } from './screens/Onboarding';
import { LoginScreen, SignupScreen, RecoveryScreen, SplashScreen } from './screens/Auth';
import navigationOptions from './routes/navigationOptions';

const Root = StackNavigator(
  {
    Splash: {
      screen: SplashScreen,
    },
    Onboarding: {
      screen: OnboardingScreen,
    },
    Registration: {
      screen: RegistrationScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    Signup: {
      screen: SignupScreen,
    },
    Recovery: {
      screen: RecoveryScreen,
    },
    Tabs: {
      screen: Routes.Tabs,
    },
    SearchFilter: {
      screen: Routes.FilterStack,
    },
    Profile: {
      screen: Routes.ProfileStack,
    },
    Post: {
      screen: Routes.PostStack,
    },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: navigationOptions(undefined, -10),
  },
);

export default Root;

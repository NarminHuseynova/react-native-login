import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  SignUp: undefined;
  SignIn: undefined;
  ForgotPassword: undefined;
  NewPassword: undefined;
  ConfirmEmail: undefined;
  NotFound: undefined;
};

export type MessageNavProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};
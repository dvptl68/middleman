import { StyleSheet } from 'react-native';

const showContainerBorders = false;
const containerBorderWidth = 4;

const LoginStyles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'blue',
  },
  textInput: {
    height: 40,
    width: 200,
    margin: 5,
    borderWidth: 1,
    padding: 10,
  },
});

const MainViewStyles = StyleSheet.create({
  pageContainer: {
    flex: 8,
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'green',
  },
  tabsContainer: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'red',
  },
  singleTabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'blue',
  },
  buttons: {
    width: 30,
    height: 30,
    resizeMode: 'stretch',
  },
});

const DiscoverStyles = StyleSheet.create({
  profileContainer: {
    flex: 3,
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'red',
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'blue',
  },
  singleButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'green',
  },
  buttons: {
    width: 75,
    height: 75,
    resizeMode: 'stretch',
  },
});

const MatchmakingStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'red',
  },
});

const ChatStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'red',
  },
});

const ProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'red',
  },
});

const DiscoverProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    border: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'red',
  },
  picture: {
    width: 100,
    height: 115,
    resizeMode: 'stretch',
    margin: 5,
  },
  nameText: {
    fontFamily: 'sans',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    margin: 5,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'sans',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    margin: 5,
  },
});

export {
  LoginStyles,
  MainViewStyles,
  DiscoverStyles,
  MatchmakingStyles,
  ChatStyles,
  ProfileStyles,
  DiscoverProfileStyles,
};
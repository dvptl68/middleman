import { StyleSheet } from 'react-native';
import Colors from './Colors';

const showContainerBorders = false;
const containerBorderWidth = 4;
const defaultFont = 'Cochin-Bold';
const backColor = 'white';

const LoginStyles = StyleSheet.create({
  baseText: {
    fontFamily: defaultFont,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'blue',
    backgroundColor: backColor,
  },
  textInput: {
    fontFamily: defaultFont,
    height: 40,
    width: 200,
    margin: 5,
    borderWidth: 1,
    padding: 10,
  },
});

const MainViewStyles = StyleSheet.create({
  baseText: {
    fontFamily: defaultFont,
  },
  pageContainer: {
    flex: 8,
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'green',
    backgroundColor: backColor,
  },
  tabsContainer: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'red',
    backgroundColor: backColor,
  },
  singleTabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'blue',
    backgroundColor: backColor,
  },
  buttons: {
    width: 30,
    height: 30,
    resizeMode: 'stretch',
  },
});

const DiscoverStyles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'red',
  },
  noProfilesTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'blue',
  },
  noProfilesText: {
    fontFamily: defaultFont,
    fontSize: 20,
    alignSelf: 'center',
  },
});

const MatchmakingStyles = StyleSheet.create({
  baseText: {
    fontFamily: defaultFont,
  },
  container: {
    flex: 1,
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'red',
    backgroundColor: backColor,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  noProfilesTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'blue',
  },
  noProfilesText: {
    fontFamily: defaultFont,
    fontSize: 20,
    alignSelf: 'center',
  },
});

const ChatStyles = StyleSheet.create({
  baseText: {
    fontFamily: defaultFont,
  },
  container: {
    flex: 1,
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'red',
  },
  listItemContainer: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: showContainerBorders ? containerBorderWidth : 1,
    borderColor: showContainerBorders ? 'blue' : 'black',
  },
  listItemTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'green',
  },
  listItemText: {
    fontSize: 20,
  },
  profilePicture: {
    width: 50,
    height: 50,
    margin: 10,
    resizeMode: 'stretch',
  },
  noProfilesTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'blue',
  },
  noProfilesText: {
    fontSize: 20,
    alignSelf: 'center',
  },
});

const ProfileStyles = StyleSheet.create({
  baseText: {
    fontFamily: defaultFont,
  },
  container: {
    fontFamily: defaultFont,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'red',
    backgroundColor: backColor,
  },
});

const DisplayProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    border: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'red',
    backgroundColor: backColor,
  },

  bio:{
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },


  scrollContainer: {
    paddingTop: 20,
    borderColor: 'blue',

  },
  profileContainer: {
    flex: 3,
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'green',
  },

  bioContainer:{
    //justifyContent: 'space-around',
  },

  bioL1: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderRadius: 20,
    //textAlign: "center",
    borderColor: 'brown',
    margin: 3
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
  picture: {
    paddingTop: 20,
    width: 250,
    height: 250,
    resizeMode: 'stretch',
    margin: 5,

    // height: '100%',
    // resizeMode: 'cover',
    borderRadius: 20,
  },
  nameText: {
    fontFamily: 'sans',
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.BROWN,
    margin: 5,
  },
  text: {
    textAlign: 'center',
    fontFamily: defaultFont,
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.PINK,
    margin: 5,
  },
  loadingTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'blue',
  },
  loadingText: {
    fontSize: 20,
    alignSelf: 'center',
  },
});

const ChatWindowStyles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'blue',
  },
  backButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'red',
  },
  backButton: {
    width: 50,
    height: 50,
    margin: 5,
    resizeMode: 'stretch',
  },
  titleContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'green',
  },
  titleText: {
    fontSize: 30,
  },
  messagesContainer: {
    flex: 6,
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'green',
  },
  singleMessageContainer: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'red',
    margin: 5,
    padding: 3,
  },
  sentMessageTextContainer: {
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'blue',
    backgroundColor: 'powderblue',
  },
  receivedMessageTextContainer: {
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'blue',
    backgroundColor: 'silver',
  },
  messagePaddingContainer: {
    flex: 1,
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'green',
  },
  messageText: {
    fontSize: 20,
    padding: 8,
  },
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'blue',
  },
  textBoxContainer: {
    flex: 4,
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'red',
  },
  textInput: {
    height: 50,
    margin: 5,
    borderWidth: 1,
    padding: 10,
  },
  sendButtonContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: showContainerBorders ? containerBorderWidth : 0,
    borderColor: 'green',
  },
  sendButton: {
    width: 50,
    height: 50,
    margin: 5,
    resizeMode: 'stretch',
  },
});

export {
  LoginStyles,
  MainViewStyles,
  DiscoverStyles,
  MatchmakingStyles,
  ChatStyles,
  ProfileStyles,
  DisplayProfileStyles,
  ChatWindowStyles,
};

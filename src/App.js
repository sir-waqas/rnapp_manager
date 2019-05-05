import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from "firebase";
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyDwSndE5CrwOr3wgdPOuEriynhyd3Nn1b8",
      authDomain: "manager-8aa8e.firebaseapp.com",
      databaseURL: "https://manager-8aa8e.firebaseio.com",
      projectId: "manager-8aa8e",
      storageBucket: "manager-8aa8e.appspot.com",
      messagingSenderId: "808835533445",
      appId: "1:808835533445:web:1eb7989653c63418"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;

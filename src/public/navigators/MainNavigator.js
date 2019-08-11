import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "../../screens/Home";
import LeaderBoard from "../../screens/LeaderBoard";
// import Login from "../../screens/Login";
// import Register from "../../screens/Register";
// import DetailBook from "../../screens/DetailBook";
// import AddBook from "../../screens/AddBook";
// import Profile from "../../screens/Profile";

const AppNavigator = createStackNavigator({
    Home,
    LeaderBoard,
    // Login,
    // Register,
    // DetailBook,
    // AddBook,
    // Profile,
}, {
    headerMode:'none',
    initialRouteName:'LeaderBoard'
})

export default createAppContainer(AppNavigator)
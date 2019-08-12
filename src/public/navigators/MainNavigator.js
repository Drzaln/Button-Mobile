import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "../../screens/Home";
import LeaderBoard from "../../screens/LeaderBoard";
import Login from "../../screens/Login";
import Register from "../../screens/Register";

const AppNavigator = createStackNavigator({
    Home,
    LeaderBoard,
    Login,
    Register,
}, {
    headerMode:'none',
    initialRouteName:'Home'
})

export default createAppContainer(AppNavigator)
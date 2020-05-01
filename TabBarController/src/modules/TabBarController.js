import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from '../components/Icon';

import Inbox from './Inbox';
import InboxDetail from './InboxDetail';
import Search from './Search';
import SearchDetail from './SearchDetail';

//-create navigation stack for inbox tab
const InboxNavigator = createStackNavigator(
    {
        Inbox:{
            screen:Inbox,
            navigationOptions:{
                title:'Inbox'
            }
        },
        InboxDetail:{
            screen:InboxDetail,
            navigationOptions:{
                title:'Inbox Detail'
            }
        }
    },
    {
        initialRouteName:'Inbox'
    }
)

//-create navigation stack for search tab
const SearchNavigator = createStackNavigator(
    {
        Search:{
            screen:Search,
            navigationOptions:{
                title:'Search'
            }
        },
        SearchDetail:{
            screen:SearchDetail,
            navigationOptions:{
                title:'Search Detail'
            }
        }
    },
    {
        initialRouteName:'Search'
    }
)

//-hide bottom bar for a particular screen in a navigation stack
SearchNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0 && navigation.state.routes[1].routeName === 'SearchDetail') {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
    };
};

//-create tab bar controller with inbox and search tab
const TabNavigator = createBottomTabNavigator({
    InboxTab: {
        screen: InboxNavigator,
        navigationOptions: {
            title:'Inbox',
            tabBarIcon: ({ tintColor }) => <Icon source={require("../images/inbox/inbox.png")} color={tintColor} />
        }
    },
    SearchTab: {
        screen: SearchNavigator,
        navigationOptions: {
            title:'Search',
            tabBarIcon: ({ tintColor }) => <Icon source={require("../images/search/search.png")} color={tintColor} />
        }
    }
},
{
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
    //   showIcon:true
    }
}
)

export default createAppContainer(TabNavigator);
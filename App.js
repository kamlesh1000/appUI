import React from 'react';
import {View, StatusBar, Dimensions} from 'react-native';

import DashboardRoute from './src/route/dashboardRoute';
import NavigationService from './src/route/navigationService';

class app extends React.Component {
  constructor(props) {
    super(props);

    global.screenWidth = Dimensions.get('window').width;
    global.screenHeight = Dimensions.get('window').height;

    global.data = [
      {
        profile: {
          username: 'kamaleshkunwar',
          post: 789,
          followers: '2k',
          following: '1k',
          background:
            'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
        },
        posts: [
          {
            name: 'Design Rock',
            username: '@lotteryjumper',
            likes: 45,
            comments: 112,
            post_time: '2021-08-02 15:02:00',
            post_type: 'image',
            url: 'https://img.dummyapi.io/photo-1555897209-208b67f652c5.jpg',
            post_text:
              'Funny thing is, when you string all of this phrases together into a sentence, and multiple sentence to form a paragraph ',
          },
          {
            name: 'Sample',
            username: '@test',
            likes: 60,
            comments: 30,
            post_time: '2021-08-02 15:05:00',
            post_type: 'image',
            url: 'https://img.dummyapi.io/photo-1555897209-208b67f652c5.jpg',
            post_text:
              'Funny thing is, when you string all of this phrases together into a sentence, and multiple sentence to form a paragraph ',
          },
          {
            name: 'Design Test',
            username: '@lotteryjumper',
            likes: 5,
            comments: 30,
            post_time: '2021-08-02 15:20:00',
            post_type: 'image',
            url: 'https://img.dummyapi.io/photo-1555897209-208b67f652c5.jpg',
            post_text:
              'Funny thing is, when you string all of this phrases together into a sentence, and multiple sentence to form a paragraph ',
          },
          {
            name: 'Test Rock',
            username: '@temp',
            likes: 20,
            comments: 5,
            post_time: '2021-08-02 15:30:00',
            post_type: 'image',
            url: 'https://img.dummyapi.io/photo-1555897209-208b67f652c5.jpg',
            post_text:
              'Funny thing is, when you string all of this phrases together into a sentence, and multiple sentence to form a paragraph ',
          },
        ],
      },
    ];
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          barStyle="dark-content"
          translucent={true}
          backgroundColor="transparent"
        />

        <DashboardRoute
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </View>
    );
  }
}

export default app;

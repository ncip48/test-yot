import React from 'react';
import {View, Text} from 'react-native';
import {CardTodos} from '../components/CardTodo';

export const Home = (props) => {
  React.useEffect(() => {
    props.fetchTodos();
  }, []);

  return (
    <View style={{flex: 1}}>
      <CardTodos data={props.appData.data} />
    </View>
  );
};

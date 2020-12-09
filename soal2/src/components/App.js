import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {CardTodos} from './CardTodo';
import {Skeleton} from './Skeleton';
import {connect} from 'react-redux';
import {fetchTodos} from '../actions';

const App = (props) => {
  useEffect(() => {
    props.fetchTodos();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.todo}>All Todos</Text>
      {props.appData.isFetching ? (
        <Skeleton />
      ) : (
        <CardTodos data={props.appData.data} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  todo: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

function mapStateToProps(state) {
  return {
    appData: state.appData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTodos: () => dispatch(fetchTodos()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

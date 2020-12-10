import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {CardTodos} from '../components/CardTodo';
import {Skeleton} from '../components/Skeleton';
import {connect} from 'react-redux';
import {fetchTodos} from '../actions';

const Home = (props) => {
  useEffect(() => {
    props.fetchTodos();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.todo}>All Todos</Text>
      {props.todos.isFetching ? (
        <Skeleton />
      ) : (
        <CardTodos
          data={props.todos.data}
          refreshing={() => props.fetchTodos()}
          isLoading={props.todos.isFetching}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
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
    todos: state.appData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTodos: () => dispatch(fetchTodos()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const apiUrl = 'https://rest-herly-server.herokuapp.com/api/v1';

export default {
  async fetchTodos() {
    try {
      const response = await fetch(apiUrl + '/todos');
      const responseJson = await response.json();
      return responseJson.data.todos;
      //   console.log(responseJson);
    } catch (err) {
      console.error(err);
    }
  },
};

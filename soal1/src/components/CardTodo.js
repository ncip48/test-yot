import React, { useState, useEffect } from "react";
import { Skeleton } from "./Skeleton";
import { API } from "../config/api";

export const CardTodo = (props) => {
  const idcat = parseInt(props.id);
  const [loading, setLoading] = useState(true);
  const [loadingCategory, setLoadingCategory] = useState(true);
  const [dataTodos, setDataTodos] = useState([]);
  const [error, setError] = useState("");
  const [value, setValue] = useState("");
  const [save, setSave] = useState(false);
  const [idTodos, setIdTodos] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [category, setCategory] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [done, setDone] = useState(2);

  useEffect(() => {
    if (idcat) {
      getTodosId(idcat, 2);
    } else {
      getTodos(2);
    }
    getCategories();
  }, [idcat]);

  const getTodos = async (done) => {
    try {
      setLoading(true);
      const result = await API.get(`/todos?done=${done}`);
      setDataTodos(result.data.data.todos);
      setLoading(false);
    } catch (err) {
      setError(err.response.data.error.message);
      console.log(err);
    }
  };

  const getTodosId = async (id, done) => {
    try {
      setLoading(true);
      const result = await API.get(`/category/${id}?done=${done}`);
      // console.log(result);
      setCategoryName(result.data.data.category.name);
      setDataTodos(result.data.data.todos);
      setLoading(false);
    } catch (err) {
      setError(err.response.data.error.message);
      console.log(err);
    }
  };

  const getCategories = async () => {
    try {
      setLoadingCategory(true);
      const result = await API.get("/categories");
      setCategoryData(result.data.data.categories);
      setLoadingCategory(false);
    } catch (err) {
      setError(err.response.data.error.message);
      console.log(err);
    }
  };

  const updateTodos = async (id, isDone) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const body = JSON.stringify({ isDone: !isDone });
      await API.patch(`/todos/${id}`, body, config);
      if (idcat) {
        getTodosId(idcat, done);
      } else {
        getTodos(done);
      }
    } catch (err) {
      setError(err.response.data.error.message);
      console.log(err);
    }
  };

  const editTodos = async (id) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const body = JSON.stringify({
        name: value,
        categoryId: idcat ? idcat : category,
      });
      // console.log(body);
      await API.patch(`/todos/${id}`, body, config);
      if (idcat) {
        getTodosId(idcat, done);
      } else {
        getTodos(done);
      }
      setSave(false);
      setValue("");
    } catch (err) {
      setError(err.response.data.error.message);
      console.log(err);
    }
  };

  const addTodos = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify({
        userId: 1,
        categoryId: idcat ? idcat : category,
        name: value,
        isDone: 0,
      });
      // console.log(body);
      await API.post("/todos", body, config);
      setValue("");
      if (idcat) {
        getTodosId(idcat, done);
      } else {
        getTodos(done);
      }
    } catch (err) {
      setError(err.response.data.error.message);
      console.log(err);
    }
  };

  const removeTodos = async (id) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await API.delete(`/todos/${id}`, config);
      if (idcat) {
        getTodosId(idcat, done);
      } else {
        getTodos(done);
      }
    } catch (err) {
      setError(err.response.data.error.message);
      console.log(err);
    }
  };

  return (
    <div className="col-12 col-md-9">
      <div className="card px-3">
        <div className="card-body">
          <h4 className="card-title">
            {idcat ? `Todos ${categoryName}` : "All Todos"}
          </h4>
          <div className="add-items d-flex">
            <input
              type="text"
              className="form-control todo-list-input"
              placeholder="What do you need to do today?"
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
            <button
              className="add btn btn-danger font-weight-bold todo-list-add-btn"
              onClick={() => {
                !save ? addTodos() : editTodos(idTodos);
              }}
            >
              {!save ? "Add" : "Save"}
            </button>
          </div>
          <div className="d-flex justify-content-between align-items-end">
            <div>
              <h6>Select category to insert</h6>
              {loadingCategory ? (
                <Skeleton category />
              ) : error ? (
                <h1>{error}</h1>
              ) : (
                categoryData.map((categoryd, index) => {
                  return (
                    <span
                      className={
                        category === categoryd.id || idcat === categoryd.id
                          ? "category-pill badge badge-pill badge-light mr-2"
                          : "category-pill badge badge-pill badge-danger mr-2"
                      }
                      onClick={() =>
                        setCategory(
                          idcat
                            ? null
                            : categoryd.id === category
                            ? null
                            : categoryd.id
                        )
                      }
                      key={index}
                    >
                      {categoryd.name}
                    </span>
                  );
                })
              )}
            </div>
            <div>
              <span
                className={
                  done === 2
                    ? "category-pill badge badge-pill badge-light mr-2 mt-1"
                    : "category-pill badge badge-pill badge-primary mr-2 mt-1"
                }
                onClick={() => {
                  setDone(2);
                  if (idcat) {
                    getTodosId(idcat, 2);
                  } else {
                    getTodos(2);
                  }
                }}
              >
                All
              </span>
              <span
                className={
                  done === 1
                    ? "category-pill badge badge-pill badge-light mr-2 mt-1"
                    : "category-pill badge badge-pill badge-primary mr-2 mt-1"
                }
                onClick={() => {
                  setDone(1);
                  if (idcat) {
                    getTodosId(idcat, 1);
                  } else {
                    getTodos(1);
                  }
                }}
              >
                Finished
              </span>
              <span
                className={
                  done === 0
                    ? "category-pill badge badge-pill badge-light mr-2 mt-1"
                    : "category-pill badge badge-pill badge-primary mr-2 mt-1"
                }
                onClick={() => {
                  setDone(0);
                  if (idcat) {
                    getTodosId(idcat, 0);
                  } else {
                    getTodos(0);
                  }
                }}
              >
                Unfinished
              </span>
            </div>
          </div>
          <div className="list-wrapper pt-3">
            <div className="d-flex flex-column-reverse todo-list">
              <ul className="list-group">
                {loading ? (
                  <Skeleton todo />
                ) : error ? (
                  <h1>{error}</h1>
                ) : dataTodos.length === 0 ? (
                  <div className="list-group-item list-group-item-danger rounded text-center">
                    <span className="text-center">No data todos</span>
                  </div>
                ) : (
                  dataTodos.map((todos, index) => {
                    return (
                      <div key={index}>
                        <li
                          className={
                            todos.isDone
                              ? "list-group-item list-group-item-success rounded d-flex justify-content-between align-items-center"
                              : "list-group-item rounded d-flex justify-content-between align-items-center"
                          }
                        >
                          <span>{todos.name}</span>
                          <span className="badge badge-secondary">
                            {todos.category.name}
                          </span>
                          <div className="pull-right">
                            <button
                              type="button"
                              className="btn btn-sm btn-success img-circle mr-1"
                              onClick={() =>
                                updateTodos(todos.id, todos.isDone)
                              }
                            >
                              &#x2713;
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-primary img-circle mr-1"
                              onClick={() => {
                                setCategory(todos.category.id);
                                setValue(todos.name);
                                setSave(!save);
                                setIdTodos(todos.id);
                              }}
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-danger img-circle"
                              onClick={() => removeTodos(todos.id)}
                            >
                              &#xff38;
                            </button>
                          </div>
                        </li>
                      </div>
                    );
                  })
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

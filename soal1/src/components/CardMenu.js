import React, { useState, useEffect } from "react";
import { Skeleton } from "./Skeleton";
import { API } from "../config/api";
import { Link } from "react-router-dom";

export const CardMenu = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    try {
      setLoading(true);
      const result = await API.get("/categories");
      setData(result.data.data.categories);
      setLoading(false);
    } catch (err) {
      setError(err.response.data.error.message);
      console.log(err);
    }
  };
  return (
    <div className="col-md-3 col-12">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Category</h5>
          {loading ? (
            <Skeleton menu />
          ) : error ? (
            <h1>{error}</h1>
          ) : (
            data.map((category, index) => {
              return (
                <Link to={`/todo/${category.id}`} key={index}>
                  <div className="btn btn-danger btn-block my-1">
                    {category.name}{" "}
                    <span className="badge badge-light badge-pill">
                      {category.todos.length} todos
                    </span>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import styled from "styled-components";

// Complete the logic do not remove any data-testid

export const Sidebar = () => {
  const [searchParams, setSearchParmas] = useSearchParams();
  const initialRating = searchParams.getAll("rating");
  const [rating, setRating] = useState(initialRating || []);
  let initialSortParams = searchParams.get("order");
  const [order, setOrder] = useState(initialSortParams || "");

  const handleChange = (e) => {
    const option = e.target.value;
    let newRating = [...rating];

    if (rating.includes(option)) {
      newRating.splice(newRating.indexOf(option), 1);
    } else {
      newRating.push(option);
    }
    setRating(newRating);
  };

  const handleOrder = (e) => {
    setOrder(e.target.value);
  };

  useEffect(() => {
    if (rating || order) {
      const params = {};
      rating && (params.rating = rating);
      order && (params.order = order);
      setSearchParmas(params);
    }
  }, [rating, setSearchParmas, order]);

  return (
    <DIV>
      <h3>Filter by Rating</h3>
      <div>
        <input
          data-testid="movie-filter-1"
          type="checkbox"
          defaultChecked={rating.includes("1")}
          value="1"
          onChange={handleChange}
        />
        <label>{"\u2605 \u2606 \u2606 \u2606 \u2606"}</label>
        <br />
        <input
          data-testid="movie-filter-2"
          type="checkbox"
          defaultChecked={rating.includes("2")}
          value="2"
          onChange={handleChange}
        />
        <label>{"\u2605 \u2605 \u2606 \u2606 \u2606"}</label>
        <br />
        <input
          data-testid="movie-filter-3"
          type="checkbox"
          defaultChecked={rating.includes("3")}
          value="3"
          onChange={handleChange}
        />
        <label>{"\u2605 \u2605 \u2605 \u2606 \u2606"}</label>
        <br />
        <input
          data-testid="movie-filter-4"
          type="checkbox"
          defaultChecked={rating.includes("4")}
          value="4"
          onChange={handleChange}
        />
        <label>{"\u2605 \u2605 \u2605 \u2605 \u2606"}</label>
        <br />
        <input
          data-testid="movie-filter-5"
          type="checkbox"
          defaultChecked={rating.includes("5")}
          value="5"
          onChange={handleChange}
        />
        <label>{"\u2605 \u2605 \u2605 \u2605 \u2605"}</label>
        <br />
      </div>
      <br />
      <br />
      <h3>Sort By Year</h3>
      <div>
        <input
          data-testid="movie-sort-asc"
          type="radio"
          value="asc"
          name="sortBy"
          defaultChecked={order === "asc"}
          onChange={handleOrder}
        />
        <label>Ascending</label>
        <br />
        <input
          data-testid="movie-sort-desc"
          type="radio"
          value="desc"
          name="sortBy"
          defaultChecked={order === "desc"}
          onChange={handleOrder}
        />
        <label>Descending</label>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
`;

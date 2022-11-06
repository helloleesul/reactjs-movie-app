import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>i like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} style={{ width: "100%" }} />
    </div>
  );
}

const foodLike = [
  {
    id: 1,
    name: "김치",
    image: "http://img.choroc.com/newshop/goods/024444/024444_1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "라면",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Jin_Ramen_%28spicy%29_20210731_002.jpg/1200px-Jin_Ramen_%28spicy%29_20210731_002.jpg",
    rating: 4.5,
  },
  {
    id: 3,
    name: "떡볶이",
    image:
      "https://homecuisine.co.kr/files/attach/images/140/667/097/0756e6d49d3550a47cfef8f39563b2bd.JPG",
    rating: 3,
  },
  {
    id: 4,
    name: "김밥",
    image:
      "https://www.tsunagulocal.com/wp-content/uploads/2021/02/pixta_65991015_M.jpg",
    rating: 5,
  },
];

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodLike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;

import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="food_logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      {avgRating ? <h4>{avgRating} stars</h4> : null}
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;

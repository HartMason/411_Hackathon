import React, { useContext } from "react";
import DateContext from "../../store/date-context";
import SingleListItem from "../SingleListItem/SingleListItem";

const ListByDate = (props) => {
  // let data = fetchAuthorContext.map((item) => (
  // <SingleListItem
  const fetchDateContext = useContext(DateContext);

  let data = fetchDateContext.map((item) => {
    return (
      <SingleListItem
        key={item.objectID}
        title={item.title}
        url={item.url}
        points={item.points}
        author={item.author}
        created_at={item.createdAt}
      />
    );
  });

  return <>{data.length === 0 ? <h1>Loading Results...</h1> : data}</>;
};

export default ListByDate

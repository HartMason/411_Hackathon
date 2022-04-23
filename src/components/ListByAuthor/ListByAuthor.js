import React, { useContext } from "react";
import AuthorContext from "../../store/author-context";
import SingleListItem from "../SingleListItem/SingleListItem";

const ListByAuthor = () => {
  const fetchAuthorContext = useContext(AuthorContext);

  console.log(fetchAuthorContext)

  // url, title, points, author, created_at

  let data = fetchAuthorContext.map((item) => (
    <SingleListItem 
      key={item.objectID}
      url={item.url}
      title={item.title}
      points={item.points}
      author={item.author}
      created_at={item.created_at}
    />
  ));


  return <>
    { data.length === 0 ? <h1>Loading Results...</h1> : data } 
  </>;
};


export default ListByAuthor;

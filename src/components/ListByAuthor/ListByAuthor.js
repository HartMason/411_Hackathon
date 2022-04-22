import React, { useContext, Fragment } from "react";
import AuthorContext from "../../store/author-context";
import SingleListItem from "../SingleListItem/SingleListItem";

const ListByAuthor = () => {
  const fetchAuthorContext = useContext(AuthorContext);
  // TODO: HART has to map over the fetched results of the fetchAuthorResults variable  and return a SingleListItem component
  // TODO: The necessary props need to be passed into the SingleListItem component that is being mapped
  // TODO save that into a variable and display it
  console.log(fetchAuthorContext)

  // url, title, points, author, created_at

  let data = fetchAuthorContext.map((item) => (
    <SingleListItem 
      url={item.url}
      title={item.title}
      points={item.points}
      author={item.author}
      created_at={item.created_at}
    />
  ));

  return <>
    {data}
  </>;
};

export default ListByAuthor;

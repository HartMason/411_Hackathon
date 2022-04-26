import "./Header.css";
import Github from "../Header/GithubImg";


export default function Header(props) {
  return (
    <div className="Header">
      <img
        className="Img"
        src="https://hn.algolia.com/packs/media/images/logo-hn-search-a822432b.png"
        alt=""
        height="45px"
      ></img>
      <h1 className="Search-text">Search</h1>
      <p className="Hacker-text">Hacker News</p>
      <label className="bar"></label>
      <input
        type="text"
        placeholder="Search stories by title"
        className="searchbar"
        onChange={props.handleOnChange}
        value={props.searchTerm}
      ></input>
      <img
        src="https://svg-clipart.com/clipart/orange/KXSlaIB-search-icon-orange-clipart.png"
        className="search-btn"
        alt=""
      ></img>
      <Github />
    </div>
  );
}

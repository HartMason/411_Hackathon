import "./Header.css";
import Github from "../Header/GithubImg";
console.clear();

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
        placeholder="Search stories by title, url or author"
        className="searchbar"
        onChange={props.handleOnChange}
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

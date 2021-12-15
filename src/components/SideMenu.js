import "../styles/SideMenu.css";

const SideMenu = () => {
  return (
    <div className="side-menu">
      <div className="side-menu-option-groups">
        <a className="side-menu-option" href="#">
          <i className="fa fa-home"></i> Home
        </a>
        <a className="side-menu-option" href="#">
          <i className="fa fa-compass"></i> Discover
        </a>
      </div>
      <hr />
      <div className="side-menu-option-groups">
        <a className="side-menu-option" href="#">
          <i className="fa fa-bars"></i> Playlist
        </a>
        <a className="side-menu-option" href="#">
          <i className="fa fa-heart"></i> Favourite
        </a>
        <a className="side-menu-option" href="#">
          <i className="fa fa-history"></i> Watch History
        </a>
      </div>
      <hr />
      <div className="side-menu-option-groups">
        <a className="side-menu-option" href="#">
          <i className="fa fa-usd"></i> Subscription
        </a>
        <a className="side-menu-option" href="#">
          <i className="fa fa-user"></i> Profile
        </a>
        <a className="side-menu-option" href="#">
          <i className="fa fa-cog"></i> Settings
        </a>
      </div>
    </div>
  );
};

export default SideMenu;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import homeLogo from "../../assets/homelogo.svg";
import searchIcon from "../../assets/searchicon.svg";
import avatar from "../../assets/avatar.png";

const Navbar = ({ user, setUser }) => {
  const [menu, setMenu] = useState("home");
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/SignIn");
  };
  const handleSearch = () => {
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img
            src={homeLogo}
            alt="Home"
            id="logo"
            className={menu === "home" ? "active" : ""}
            onClick={() => setMenu("home")}
            style={{ cursor: "pointer" }}
          />
        </Link>
      </div>

      <div className="navbar-right">
        <div className="searchbox">
          <input
           className="sbnew"
            type="text"
            placeholder="discover recipe"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch(); // กด Enter เพื่อค้นหา
            }}
          />

          <img
            src={searchIcon}
            alt=""
            className="searchlogo"
            onClick={handleSearch}
            style={{ cursor: "pointer" }}
          />
        </div>

        {user ? (
          <div className="user-info">
            <span className="user-email">{user.email}</span>

            <img
              style={{ cursor: "pointer" }}
              onClick={toggleDropdown}
              src={avatar}
              alt="User"
              className="user-avatar"
            />
            <button onClick={handleLogout}>Logout</button>
            {showDropdown && (
              <div className="dropdown-menu">
                <Link to="/profile" onClick={() => setShowDropdown(false)}>
                  Profile
                </Link>
                <Link to="/myrecipe" onClick={() => setShowDropdown(false)}>
                  myRecipes
                </Link>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/signin">
              <button>Sign In</button>
            </Link>
            <Link to="/signUp">
              <button>Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

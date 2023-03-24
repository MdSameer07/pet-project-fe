import "./NavBar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { auth } from "../firebase";
import { useRecoilState } from "recoil";
import { UserDetails } from "../Recoil/UserDetails";
import { Button, Dropdown } from "antd";

export const NavBar = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn")
  const userLoggedIn = localStorage.getItem("userLoggedIn")
  const adminLoggedIn = localStorage.getItem("adminLoggedIn")
  const [user, setUser] = useRecoilState(UserDetails);
  const navigate = useNavigate();

  // useEffect(() => {
  //     auth.onAuthStateChanged((user) => {
  //         setUser(user.displayName)
  //     })
  // })

  const items = [
    {
      key: '1',
      label: (
        <NavLink to = "/user-login">USER LOGIN</NavLink>
      ),
    },
    {
      key: '2',
      label: (
        <NavLink to = "/admin-login">ADMIN LOGIN</NavLink>
      ),
    },
  ];

  const userLogout = () => {
    auth.signOut().then(() => {
      setUser(null);
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userLoggedIn");
      localStorage.removeItem("adminLoggedIn");
      localStorage.removeItem("adminId")
      navigate("/");
    });
  };

  const adminLogout = () => {
    auth.signOut().then(() => {
      setUser(null);
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("adminLoggedIn");
      localStorage.removeItem('userId')
      localStorage.removeItem('adminId')
      navigate("/");
    });
  };

  const finalstylelink = ({ isActive }) => {
    if (isActive)
      return {
        textDecoration: "none",
        color: "blue",
      };
    return {
      textDecoration: "none",
      color: "black",
    };
  };

  return (
    <nav className="nav-total">
      <div className="nav-logo">
        {isLoggedIn && (
          <NavLink className="logo" to="/home">
            <img
              src="https://www.shutterstock.com/image-illustration/learn-study-inspect-movies-pictured-260nw-1935370291.jpg"
              alt="Scope"
            ></img>
          </NavLink>
        )}
        {!isLoggedIn && (
          <NavLink className="logo" to="/">
            <img
              src="https://www.shutterstock.com/image-illustration/learn-study-inspect-movies-pictured-260nw-1935370291.jpg"
              alt="Scope"
            ></img>
          </NavLink>
        )}
      </div>
      <div className="nav-movies">
        {isLoggedIn && userLoggedIn && (
          <NavLink className="movies" style={finalstylelink} to="/movies">
            MOVIES
          </NavLink>
        )}
        {!isLoggedIn && <div className="movies">MOVIES</div>}
      </div>
      {!adminLoggedIn && <SearchBar />}
      {isLoggedIn && userLoggedIn && (
        <div className="nav-end-after-login">
          <NavLink className="insights" style={finalstylelink} to="/insights">
            INSIGHTS
          </NavLink>
          {/* <WatchList /> */}
          <NavLink className="profile" style={finalstylelink} to="/profile">
            PROFILE
          </NavLink>
          <button
            className="logout-button"
            onClick={() => {
              userLogout();
            }}
          >
            LOG OUT
          </button>
        </div>
      )}
      {!isLoggedIn && (
        <div className="nav-end-before-login">
          {/* <NavLink className='login' to='/login'>LOGIN</NavLink> */}
          <Dropdown menu={{items}} placement="bottomRight" arrow>
            <div className="login">LOGIN</div>
          </Dropdown>
          <NavLink className="register" to="/register">
            REGISTER
          </NavLink>
        </div>
      )}
      {isLoggedIn && adminLoggedIn && (
        <>
        <div className = "admin-options">
        <NavLink className="adding" to="/adding" style={finalstylelink}>ADD MOVIE</NavLink>
          <NavLink className="deleting" to="/deleting" style={finalstylelink}>DELETE MOVIE</NavLink>
          <NavLink className="feedback" to="/feedback" style={finalstylelink}>GET FEEDBACK</NavLink>
          </div>
          <button
        className="logout-button"
        onClick={() => {
          adminLogout();
        }}
      >
        LOGOUT
      </button>
      </>
      )}
    </nav>
  );
};

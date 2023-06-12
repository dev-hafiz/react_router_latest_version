import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  appLogo: {
    fontSize: "45px",
    padding: "30px 0 10px 0",
  },
  linkContainer: {
    background: "#F7E373",
    padding: "8px 0",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "16px",
    margin: "30px",
    fontWeight: "500",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.appLogo}>MAXILLA</h1>
      <nav className={classes.linkContainer}>
        <NavLink className={classes.link} to="/home">
          Home
        </NavLink>
        <NavLink className={classes.link} to="/foods">
          Foods
        </NavLink>
        <NavLink className={classes.link} to="/about">
          Abouts
        </NavLink>
        <NavLink className={classes.link} to="/help">
          Help
        </NavLink>
        <NavLink className={classes.link} to="/contact">
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;

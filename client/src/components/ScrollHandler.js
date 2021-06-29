import { useEffect } from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"

import { config } from '../config'

const ScrollHandler = ({ location, children }) => {
  useEffect(
    () => {
      const element = document.getElementById(location.hash.replace("#", ""));

      setTimeout(() => {
        // const totalOffset = element.offsetTop - 120
        window.scrollTo({
          behavior: element ? "smooth" : "auto",
          top: element ? element.offsetTop + config.Navbar.navBarOffset : 0
        });
      }, 100);
    }, [location]);

  return null;
};

ScrollHandler.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    hash: PropTypes.string,
  }).isRequired
};

export default withRouter(ScrollHandler);
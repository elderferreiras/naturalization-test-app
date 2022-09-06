import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { signoutUser } from '../store/user/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import citizInterviewLogo from '../assets/images/citizinterview.png'

const Navigation = ({ user, signout }) => {
  return (
    <Navbar>
      <Container>
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={citizInterviewLogo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="CitizInterview"
              />
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Navbar.Brand href="#home">CitizInterview</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Text>
         Welcome, {user.attributes.name}!
        </Navbar.Text>
        <Navbar.Collapse className="justify-content-end">
          <Link to="/signout/">
            <Navbar.Text>
              <FontAwesomeIcon icon={faSignOut} />
            </Navbar.Text>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}


const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => {
      dispatch(signoutUser())
    },
  };
};

export default connect(undefined, mapDispatchToProps)(Navigation)

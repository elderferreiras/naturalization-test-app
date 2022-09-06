import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { fetchUser, signoutUser, updateUser } from '../store/user/actions';
import { connect } from 'react-redux';

const Navigation = ({ user, signout }) => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Naturalization Test</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Text>
         Welcome, {user.attributes.name}!
        </Navbar.Text>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text onClick={signout}>
            <FontAwesomeIcon icon={faSignOut} />
          </Navbar.Text>
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

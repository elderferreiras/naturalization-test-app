import { signoutUser } from '../store/user/actions';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom'

const Signout = ({ signout }) => {
  const [loggedOut, setLoggedOut] = useState(false)

  useEffect(() => {
    signout()
    setLoggedOut(true)
  }, [signout])

  if (loggedOut) {
    return <Navigate to="/" push={true} />
  }

  return null
}

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => {
      dispatch(signoutUser())
    },
  };
};

export default connect(undefined, mapDispatchToProps)(Signout)

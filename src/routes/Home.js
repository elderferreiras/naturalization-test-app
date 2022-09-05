import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { Container, Row, Col, Button } from 'react-bootstrap'
import React from 'react'
import { isEmpty, isNull } from 'lodash'
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import '@aws-amplify/ui-react/styles.css';
import { fetchUser, updateUser } from '../store/user/actions';
import LocalityForm from '../components/LocalityForm';

class Home extends React.Component {
  componentDidMount() {
    const { getData, user } = this.props;

    getData(user.username)
  }

  render() {
    const { data, user, saveData } = this.props;

    if (!user) {
      return <p>Loading...</p>
    }

    let render = (
      <>
        <p>Let's start, {user.attributes.name}!</p>
        <div className="mb-2">
          <Link to="/practice/">
            <Button variant="primary" size="lg">
              Practice
            </Button>
          </Link>
          <Link to="/simulate/">
            <Button variant="secondary" size="lg">
              Simulate Test
            </Button>
          </Link>
        </div>
      </>
    );

    if (isNull(data) || isEmpty(data)) {
      render = <LocalityForm user={user} saveData={saveData} />;
    }

    return (
      <ThemeProvider>
        <Container>
          <Row>
            <Col>{render}</Col>
          </Row>
        </Container>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.userReducer.user,
    loading: state.userReducer.loading,
    error: state.userReducer.error,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (username) => {
      dispatch(fetchUser(username))
    },
    saveData: (username, values) => {
      dispatch(updateUser(username, values))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

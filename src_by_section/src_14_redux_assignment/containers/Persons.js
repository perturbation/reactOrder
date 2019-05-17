import React, { Component } from "react";

import { connect } from "react-redux";
import * as actionType from "../store/actions";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddPerson} />
        {this.props.persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onDeletePerson(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    persons: state.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPerson: (person_name, person_age) =>
      dispatch({ type: actionType.ADD_PERSON, name: person_name, age: person_age }),
    onDeletePerson: person_id =>
      dispatch({ type: actionType.REMOVE_PERSON, person_id: person_id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Persons);

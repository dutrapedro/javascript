import { connect } from 'react-redux';
import { ACSetVisibilityFilter } from '../actions';
import Link from '../components/link';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch( ACSetVisibilityFilter(ownProps.filter) );
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink;
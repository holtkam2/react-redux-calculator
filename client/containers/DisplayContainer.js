import { connect } from 'react-redux';
import DisplayComponent from '../components/DisplayComponent';
import {} from '../actions/index';

const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = state => ({
	currentNumber: state.currentNumber,
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayComponent);
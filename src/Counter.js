import {connect} from 'react-redux';
// import {increaseCountOne, increaseCountFive, increaseCountTen, decreaseCountOne, decreaseCountFive, decreaseCountTen, reset, countFunction} from './actions/counterAction';
import { reset, countFunction} from './actions/counterAction';


function Counter(props){
  
  return <div className="code">
   <div> {props.counter}</div>
   <div><button onClick={props.count} value={1}>Decrease (1)</button>
  <button onClick={props.count} value={5}>Decrease (5)</button>
  <button onClick={props.count} value={10}>Decrease (10)</button></div>

  <div> <button onClick={props.count} value={-1}>Increase (1)</button>
  <button onClick={props.count} value={-5}>Increase (5)</button>
  <button onClick={props.count} value={-10}>Increase (10)</button></div>
  
  <div><button onClick={props.reset}>Reset</button></div>

  </div>
}

const mapStateToProps = (state) => ({
counter: state.count
})

const mapDispatchToProps = {
  // increaseOne: increaseCountOne,
  // increaseFive: increaseCountFive,
  // increaseTen: increaseCountTen,
  // decreaseOne: decreaseCountOne,
  // decreaseFive: decreaseCountFive,
  // decreaseTen: decreaseCountTen,
  count: countFunction,
  reset: reset

}

export default connect(mapStateToProps,mapDispatchToProps )(Counter);
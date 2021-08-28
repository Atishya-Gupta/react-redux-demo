import { connect } from 'react-redux'

import { buyCake } from '../redux'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'

const CakeAndIceCreamContainer = (props) => {
  return (
    <div>
      <button onClick={props.buyCakeAndIceCream}>Buy Cake & IceCream</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ...state,
    numOfCakes: state.cakes.numOfCakes - 1,
    numOfIceCreams: state.iceCream.numOfIceCreams - 1
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCakeAndIceCream: () => {
      dispatch(buyIceCream())
      dispatch(buyCake())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeAndIceCreamContainer)

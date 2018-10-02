import React, { Component } from 'react'
import ConfirmRoute from '../components/confirmRoute/ConfirmRoute'
import CardLabel from '../components/CardLabel'
import Card from '../components/Card'
import * as confirmRouteActions from '../actions/confirmRouteActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class ConfirmRouteContainer extends Component{

    render(){
        let cardLabel = "Does this look right?"

        return(
            <Card>
                <CardLabel cardLabel={cardLabel} />
                <ConfirmRoute {...this.props}/> 
            </Card>
        )
    }
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = (dispatch) => {
    return {...bindActionCreators(confirmRouteActions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps, (stateProps, dispatchProps, ownProps) => {
    return {
      ...stateProps,
      router: ownProps,
      actions: dispatchProps,
    };
  })(ConfirmRouteContainer)
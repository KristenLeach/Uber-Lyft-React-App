import React, { Component } from 'react';
import { Header, Table } from 'semantic-ui-react'
import Button from '../Button'

class Result extends Component {

    state = {
        estimates: []
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.estimates !== this.state.estimates) {
            const estimates = nextProps.estimates.map(({type, costEstimate}) => ({type: type, costEstimate: costEstimate, counter: 0}))
            this.setState({
                estimates
            })
        }
    }

    handleOnClick = (idx) => {
        let estimate = this.state.estimates[idx]
        let estimates = this.state.estimates

        estimates.splice(idx, 1, {type: estimate.type, costEstimate: estimate.costEstimate, counter: estimate.counter+1})

        this.setState({
            estimates
        })
    }

    tableRows(estimates){
        return estimates.map((estimate, idx) => {
            return <Table.Row><Table.Cell>{estimate.type}</Table.Cell><Table.Cell>{estimate.costEstimate}</Table.Cell><Table.Cell><Button buttonTitle={`Like ${estimate.counter}`} onClick={ () => this.handleOnClick(idx)}></Button></Table.Cell></Table.Row>
        })
    }

    render(){
        return(
            <div style={{padding: 20}}>
                <h3>{this.props.header}</h3>
                <Table collapsing celled selectable>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Ride Type</Table.HeaderCell>
                    <Table.HeaderCell>Cost</Table.HeaderCell>
                    <Table.HeaderCell>Like</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                {this.tableRows(this.state.estimates)}

                </Table.Body>
                </Table>
                <Button buttonTitle={this.props.buttonTitle}/>
            </div>
        )
    }
}

export default Result
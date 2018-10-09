import React, { Component } from 'react'
import Button from '../Button';
import { Table } from 'semantic-ui-react';

export default class TableRow extends Component {

    state = {
        counter: 0
    }

    handleOnClick = () => {
        this.setState((prevState, props) => {
            //some other calcuations
            return {counter: prevState.counter + 1}
        })
    }

    render(){
        return(
            <Table.Row>
                <Table.Cell>{this.props.estimate.type}</Table.Cell>
                <Table.Cell>{this.props.estimate.costEstimate}</Table.Cell>
                <Table.Cell><Button buttonTitle={`Like ${this.state.counter}`} onClick={ () => this.handleOnClick()}></Button></Table.Cell>
            </Table.Row>
        )
    }
}
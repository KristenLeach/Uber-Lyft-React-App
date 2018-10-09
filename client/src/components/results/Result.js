import React, { Component } from 'react';
import { Header, Table } from 'semantic-ui-react'
import Button from '../Button'
import TableRow from './TableRow'

class Result extends Component {

    tableRows(estimates){
        return estimates.map((estimate) => {
            return <TableRow estimate={estimate} />
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
                {this.tableRows(this.props.estimates)}

                </Table.Body>
                </Table>
                <Button buttonTitle={this.props.buttonTitle}/>
            </div>
        )
    }
}

export default Result
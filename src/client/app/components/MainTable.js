import React from 'react';
import ModalPopup from './ModalPopup';


export default class MainTable extends React.Component {

    constructor(props) {
        super(props);
        this.rows = [];
    }

    onOpenPopupHandler(rowData) {
       this.props.modalData = rowData;

    };

    render() {
        this.rows = [];
        this.props.data.forEach((item, index) => {
            if (item && !item.userId && !item.userId) return;

            if (item.title.indexOf(this.props.filterTitleText) > -1 &&
                (item.userId).toString() === (this.props.filterUserIdText) ||
                (!this.props.filterUserIdText && !this.props.filterTitleText)) {

                this.rows.push(
                    <ItemRow data={item} key={item.id + '-' + index}
                        onOpenPopup={this.onOpenPopupHandler} />
                );

            }

        });

        return (
            <div>
            
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th> # </th>
                            <th> USER ID </th>
                            <th> TITLE </th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.rows}
                    </tbody>
                </table>
            </div>
        );
    }

};



export class ItemRow extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.props.onOpenPopup(this.props.data);
    }
    render() {
        return (
            <tr >
                <td> {this.props.data.id} </td>
                <td> {this.props.data.userId} </td>
                <td> <a href="javascript:;" onClick={this.onClick} >
                    {this.props.data.title} </a> </td>
            </tr>
        )
    }
};


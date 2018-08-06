import React from 'react';
import * as userStorageService from '../services/userStorage';
import { findDOMNode } from 'react-dom';

export default class UserStorage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            itemName: '',
        };
    }

    componentDidMount() {
        userStorageService.all(12).then((items) => {
            this.setState({
                items,
            });
        });
    }

    handleChange(itemName) {
        this.setState({
            itemName,
        });
    }

    handleDelete(id) {
        userStorageService.destroy(id).then(() => {
            let filteredItems = this.state.items.filter((item) => {
                return item.id !== id;
            });

            this.setState({
                items: filteredItems,
            });
        });
    }

    submit() {
        let addItem = {
            userid: 12,
            item: this.state.itemName,
        };

        userStorageService.create(addItem).then((idObj) => {
            const el = findDOMNode(this.refs.modal);
            $(el).modal('hide');

            return this.setState({
                itemName: '',
                items: [
                    ...this.state.items,
                    Object.assign({}, addItem, { id: idObj.id }),
                ],
            });
        });
    }

    render() {
        return (
            <div data-class="UserStorage">
                <div
                    className="modal fade"
                    id="exampleModalCenter"
                    tabindex="-1"
                    ref="modal"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                >
                    <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                    >
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="exampleModalCenterTitle"
                                >
                                    Add Item
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <input
                                    type="text"
                                    placeholder="Item Name"
                                    onChange={(ev) => {
                                        this.handleChange(ev.target.value);
                                    }}
                                />
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    CLOSE
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => {
                                        this.submit();
                                    }}
                                >
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                    >
                        ADD ITEM
                    </button>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.items.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.item}</td>
                                        <td>Category</td>
                                        <td>
                                            <i
                                                className="fa fa-trash"
                                                aria-hidden="true"
                                                onClick={() => {
                                                    this.handleDelete(item.id);
                                                }}
                                            />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

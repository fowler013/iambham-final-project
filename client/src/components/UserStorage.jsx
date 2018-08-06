import React from 'react';
import * as userStorageService from '../services/userStorage';
import * as storageCategoriesService from '../services/category';
import { findDOMNode } from 'react-dom';

export default class UserStorage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            categories: [],
            selectValue: undefined,
            itemName: '',
        };
    }

    componentDidMount() {
        Promise.all([
            userStorageService.all(12),
            storageCategoriesService.all(),
        ]).then(([items, categories]) => {
            this.setState({
                items,
                categories,
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

    renderTable() {
        return (
            <table>
                <thead>
                    <tr>
                        <th
                            onClick={() => {
                                this.handleSort('item');
                            }}
                        >
                            Name
                        </th>
                        <th
                            onClick={() => {
                                this.handleSort('categoryid');
                            }}
                        >
                            Category
                        </th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.items.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.item}</td>
                                <td>{item.categoryname}</td>
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
        );
    }

    renderModal(piece) {
        if (piece === 'button') {
            return (
                <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                >
                    ADD ITEM
                </button>
            );
        } else if (piece === 'body') {
            return (
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
                                <select
                                    value={this.state.selectValue}
                                    onChange={(ev) => {
                                        this.handleSelect(ev.target.value);
                                    }}
                                >
                                    <option value={null}>
                                        Select Category
                                    </option>
                                    {this.state.categories.map((category) => {
                                        return (
                                            <option
                                                key={category.id}
                                                value={category.id}
                                            >
                                                {category.categoryname}
                                            </option>
                                        );
                                    })}
                                </select>
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
                                        this.handleSubmit();
                                    }}
                                >
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

    handleSubmit() {
        let addItem = {
            userid: 12,
            categoryid: this.state.selectValue,
            item: this.state.itemName,
        };

        let { categoryname } = this.state.categories.find((category) => {
            return category.id === +this.state.selectValue;
        });

        userStorageService.create(addItem).then((idObj) => {
            const el = findDOMNode(this.refs.modal);
            $(el).modal('hide');

            return this.setState({
                itemName: '',
                items: [
                    ...this.state.items,
                    Object.assign({}, addItem, {
                        id: idObj.id,
                        categoryname,
                    }),
                ],
            });
        });
    }

    handleSelect(category) {
        this.setState({
            selectValue: category,
        });
    }

    handleSort(sortBy) {
        let sorted = this.state.items.sort((a, b) => {
            if (a[sortBy] < b[sortBy]) return -1;
            if (a[sortBy] > b[sortBy]) return 1;
            return 0;
        });
        this.setState({
            items: sorted,
        });
    }

    render() {
        return (
            <div data-class="UserStorage">
                <h1 className="user-storage-h1" style={{ textAlign: 'center' }}>My Pantry</h1>
                {this.renderModal('body')}
                <div className="container">
                    {this.renderModal('button')}
                    {this.renderTable()}
                </div>
            </div>
        );
    }
}

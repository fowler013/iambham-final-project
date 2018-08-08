import React from 'react';
import { isNil, isEmpty } from 'lodash';

export default class MultiSearchBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: '',
            searchTerms: [],
        };
    }

    handleChange(ev) {
        let value = ev.target.value;

        if (value.charAt(value.length - 1) === ' ') {
            let value = this.state.current.trim();
            this.setState(
                {
                    searchTerms: [...this.state.searchTerms, value],
                    current: '',
                },
                () => {
                    this.handleTermManipulation();
                },
            );

            return;
        }

        this.setState({
            current: value,
        });
    }

    submit() {
        let terms = this.state.searchTerms;

        if (!isEmpty(this.state.current)) {
            terms.push(this.state.current);
        }

        this.props.onSearch(terms.join(','));

        this.setState({
            searchTerms: [],
            current: '',
        });
    }

    handleTermManipulation() {
        let terms = this.state.searchTerms.map((term, index) => {
            return (
                <span
                    key={`${term}-${index}`}
                    style={{
                        backgroundColor: 'grey',
                        border: '1px solid darkgrey',
                        padding: '1px 6px',
                        marginRight: '5px',
                    }}
                >
                    {term}
                </span>
            );
        });

        return (
            <div
                className="d-flex align-items-center justify-content-around"
                style={{
                    backgroundColor: 'white',
                    border: '2px solid black',
                    padding: '5px',
                    borderRadius: '2px',
                    height: '3em',
                    marginLeft: '1em',
                }}
            >
                <div style={{ display: 'inline-block' }}>{terms}</div>
                <input
                    className="search-input"
                    type="text"
                    value={this.state.current}
                    placeholder="SEARCH"
                    onChange={(ev) => {
                        this.handleChange(ev);
                    }}
                />
                <i
                    className="fa fa-search"
                    onClick={() => {
                        this.submit();
                    }}
                />
            </div>
        );
    }

    render() {
        return this.handleTermManipulation();
    }
}

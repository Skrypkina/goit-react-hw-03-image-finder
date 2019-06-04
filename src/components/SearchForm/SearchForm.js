import React, { Component } from 'react';
import css from './SearchForm.module.css';

export default class SearchForm extends Component {
  state = {
    query: '',
    page: 1,
  };

  static defaultProps = {
    items: [],
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ page: 1 });
    /* eslint-disable-next-line */
    this.props.onSubmit(this.state.query, this.state.page);
  };

  handleBtnClick = () => {
    /* eslint-disable-next-line */
    this.props.onSubmit(this.state.query, this.state.page + 1);
    this.setState(state => ({ page: this.state.page + 1 }));
  };

  handleQueryChange = () => {
    this.setState({ query: '', page: 1 });
    /* eslint-disable-next-line */
    this.props.onChange();
  };

  render() {
    const { query, page } = this.state;
    const { items } = this.props;

    return (
      <div className={css.searchForm}>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            placeholder="Search images..."
            onChange={this.handleChange}
            value={query}
            onPointerEnter={this.handleQueryChange}
            className={css.input}
          />
          {this.props.children}
        </form>

        {items.length > 0 && (
          <button
            type="button"
            value={page}
            onClick={this.handleBtnClick}
            className={css.button}
          >
            Load more
          </button>
        )}
      </div>
    );
  }
}

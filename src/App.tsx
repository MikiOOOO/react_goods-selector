import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

type State = {
  selectedGood: string,
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handleOnClickDelete = () => {
    this.setState({ selectedGood: '' });
  };

  handleOnClickChoose = (good: string) => {
    this.setState({ selectedGood: good });
  };

  managePluralForm = (form: string) => {
    return form[form.length - 1] === 's' ? 'are' : 'is';
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {
          !selectedGood
            ? <h1 className="title">No goods selected</h1>
            : (
              <h1 className="title is-flex is-align-items-center">
                {`${selectedGood} ${this.managePluralForm(selectedGood)} selected` }

                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.handleOnClickDelete}
                />
              </h1>
            )
        }
        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                key={good}
                className={selectedGood === good
                  ? 'has-background-success-light'
                  : ''}
              >
                <td>
                  {selectedGood === good
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={this.handleOnClickDelete}
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => this.handleOnClickChoose(good)}
                      >
                        +
                      </button>
                    )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}

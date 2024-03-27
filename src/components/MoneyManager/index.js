import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transList: [],
    titleInp: '',
    amtInp: '',
    typeInp: transactionTypeOptions[0].optionId,
  }

  updateTitle = event => {
    this.setState({titleInp: event.target.value})
  }

  updateAmt = event => {
    this.setState({amtInp: event.target.value})
  }

  updateType = event => {
    this.setState({typeInp: event.target.value})
  }

  addTransaction = event => {
    event.preventDefault()
    const {titleInp, amtInp, typeInp} = this.state
    const displayTextEl = transactionTypeOptions.find(
      each => each.optionId === typeInp,
    )

    const newTransaction = {
      id: uuidv4(),
      title: titleInp,
      amt: parseInt(amtInp),
      type: displayTextEl.displayText,
    }

    this.setState(prevState => ({
      transList: [...prevState.transList, newTransaction],
      titleInp: '',
      amtInp: '',
      typeInp: transactionTypeOptions[0].optionId,
    }))
  }

  delItem = id => {
    const {transList} = this.state

    const deletedList = transList.filter(each => each.id !== id)
    this.setState({transList: deletedList})
  }

  getExpenses = () => {
    const {transList} = this.state
    let expenses = 0
    transList.forEach(each => {
      if (each.type === transactionTypeOptions[1].displayText) {
        expenses += each.amt
      }
    })

    return expenses
  }

  getIncome = () => {
    const {transList} = this.state
    let income = 0
    transList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        income += each.amt
      }
    })

    return income
  }

  getBalance = () => {
    const {transList} = this.state
    let balance = 0
    let expenses = 0
    let income = 0

    transList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        income += each.amt
      } else {
        expenses += each.amt
      }
    })

    balance = income - expenses
    return balance
  }

  render() {
    const {transList, titleInp, amtInp, typeInp} = this.state
    const expenses = this.getExpenses()
    const income = this.getIncome()
    const balance = this.getBalance()

    return (
      <div className="bgcon">
        <div className="card">
          <div className="img-con">
            <h1 className="img-head">Hi, Richard</h1>
            <p className="img-desc">
              Welcome back to your{' '}
              <span className="img-span">Money Manager</span>
            </p>
          </div>
          <MoneyDetails balance={balance} income={income} expenses={expenses} />

          <div className="form-trans-con">
            <form onSubmit={this.addTransaction} className="form-con">
              <p className="con-head">Add Transaction</p>
              <label htmlFor="title-inp">TITLE</label>
              <input
                onChange={this.updateTitle}
                value={titleInp}
                placeholder="TITLE"
                id="title-inp"
              />
              <label htmlFor="amt-inp">AMOUNT</label>
              <input
                onChange={this.updateAmt}
                value={amtInp}
                placeholder="AMOUNT"
                id="amt-inp"
              />
              <label htmlFor="drop-down">TYPE</label>
              <select onChange={this.updateType} value={typeInp}>
                {transactionTypeOptions.map(each => (
                  <option value={each.optionId} key={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>

            <div className="trans-con">
              <h1 className="con-head-2">History</h1>
              <ul className="table">
                <li className="table-header">
                  <p className="column table-title">Title</p>
                  <p className="column table-amt">Amount</p>
                  <p className="column table-type">Type</p>
                </li>
                {transList.map(each => (
                  <TransactionItem
                    transDetails={each}
                    delItem={this.delItem}
                    key={each.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager

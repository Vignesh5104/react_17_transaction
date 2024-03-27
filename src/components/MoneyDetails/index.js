// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <div className="money-details-con">
      <div className="money-con bal-con">
        <img
          className="money-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="money-text-con">
          <p className="money-title">Your Balance</p>
          <p className="rs" data-testid="balanceAmount">
            Rs <span className="amt-show">{balance}</span>
          </p>
        </div>
      </div>
      <div className="money-con inc-con">
        <img
          className="money-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="money-text-con">
          <p className="money-title">Your Income</p>
          <p className="rs" data-testid="incomeAmount">
            Rs <span className="amt-show">{income}</span>
          </p>
        </div>
      </div>
      <div className="money-con exp-con">
        <img
          className="money-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="money-text-con">
          <p className="money-title">Your Expenses</p>
          <p className="rs" data-testid="expensesAmount">
            Rs <span className="amt-show">{expenses}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails

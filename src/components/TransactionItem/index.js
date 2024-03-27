// Write your code here

import './index.css'

const TransactionItem = props => {
  const {transDetails, delItem} = props
  const {id, title, amt, type} = transDetails

  const delItemFunc = () => {
    delItem(id)
  }

  return (
    <li className="table-row">
      <p className="row row-title">{title}</p>
      <p className="row row-amt">{amt}</p>
      <div className="type-con">
        <p className="row-type">{type}</p>
        <button
          onClick={delItemFunc}
          className="del-btn"
          data-testid="delete"
          type="button"
        >
          <img
            className="del-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem

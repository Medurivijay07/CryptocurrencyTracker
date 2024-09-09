// Write your JS code here
import {Component} from 'react'
import './index.css'

class CryptocurrencyItem extends Component {
  render() {
    const {crypto} = this.props
    const {currencyName, usdValue, euroValue, currencyLogo} = crypto
    return (
      <li className="list-item">
        <div className="left-side">
          <img src={currencyLogo} alt={currencyName} className="coin-logo" />
          <p>{currencyName}</p>
        </div>
        <div className="right-side">
          <p className="usd-value-style">{usdValue}</p>
          <p>{euroValue}</p>
        </div>
      </li>
    )
  }
}

export default CryptocurrencyItem

// Write your JS code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {cryptoList: [], isLoading: true}

  componentDidMount() {
    this.getCryptosList()
  }

  getCryptosList = async () => {
    const response = await fetch(
      ' https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(Item => ({
      currencyName: Item.currency_name,
      usdValue: Item.usd_value,
      euroValue: Item.euro_value,
      id: Item.id,
      currencyLogo: Item.currency_logo,
    }))
    this.setState({cryptoList: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, cryptoList} = this.state
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <h1 className="cryptocurrency-title">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="image-style"
            />
            <ul className="lists-container">
              <li className="header">
                <div className="left-header">
                  <h1 className="coin-symbol">Coin</h1>
                  <h1>Type</h1>
                </div>
                <div className="right-header">
                  <h1 className="usd-title">USD</h1>
                  <h1>EURO</h1>
                </div>
              </li>
              {cryptoList.map(Item => (
                <CryptocurrencyItem key={Item.id} crypto={Item} />
              ))}
            </ul>
          </>
        )}
      </>
    )
  }
}

export default CryptocurrenciesList

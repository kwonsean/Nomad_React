import React, { useEffect, useState } from 'react'

function CoinTracker() {
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  const [usd, setUsd] = useState('')
  const [coinPrice, setCoinPrice] = useState(0)

  const handleOnChange = (event) => {
    setUsd(event.target.value)
  }

  const handleOnSelect = (event) => {
    let coinPrice = event.target.value
    coinPrice = Number(coinPrice).toFixed(5)
    setCoinPrice(coinPrice)
    // console.log(coinPrice)
    // console.log('select!')
  }
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json)
        setLoading(false)
        // console.log(json)
      })
  }, [])

  return (
    <div>
      <h1>The Coins! {loading ? '' : `total: ${coins.length}`}</h1>
      <label htmlFor='input'>
        {' '}
        Your USD
        <br />
        <input
          id='input'
          value={usd}
          onChange={handleOnChange}
          type='number'
          placeholder='Input Your USD...'
        />
      </label>
      <br />
      <label htmlFor='coin'>
        {' '}
        Changed Coin
        <br />
        <input
          id='coin'
          value={(usd / coinPrice).toFixed(5)}
          type='number'
          readOnly={true}
        />
      </label>
      <br />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={handleOnSelect}>
          <option>Select Coin!</option>
          {coins.map((coin) => {
            return (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
              </option>
            )
          })}
        </select>
      )}
    </div>
  )
}

export default CoinTracker

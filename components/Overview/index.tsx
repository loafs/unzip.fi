import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useWeb3React } from '@web3-react/core'
import { Box, ResponsiveContext } from 'grommet'
import { updateAssets, updateBNBPrice, updateFarms } from '../../store/actions'
import Assets from '../Assets'
import Farms from '../Farms'
import { PROJECTS } from '../Farms/config'
import { ASSET_TOKENS } from '../Assets/config'
import { getTokenInfo } from '../../utils/common'
import AssetHeader from '../Assets/Header'
import styles from '../../styles/Home.module.css'

const Overview = () => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const [loading, setLoading] = useState(false)
  // const account = '0xD3f4381936A90db280c62b2783664c993eB6A952'

  useEffect(() => {
    setLoading(true)

    window
      .fetch(
        'https://api.bscscan.com/api?module=stats&action=bnbprice&apikey=3B9KB3G5YKFVBU941BQDV15YABZVXZIDMR'
      )
      .then((response) => {
        if (response.status !== 200) {
          setLoading(false)
          return
        }
        response.json().then((data) => {
          dispatch(updateBNBPrice(Number(data.result.ethusd)))
        })
      })
      .catch((err) => {
        console.log('Fetch Error :-S', err)
      })

    if (!account) return

    const farmsRequests = PROJECTS.map((p) => p.getPoolsStat(account))
    Promise.all(farmsRequests)
      .then((responses) => {
        const farms = PROJECTS.map((p, idx) => {
          return {
            ...p,
            pools: responses[idx],
          }
        }).filter((p) => p.pools.length)
        dispatch(updateFarms(farms))
        setLoading(false)
      })
      .catch((err) => {
        console.log('###', err)
      })
    const assetsRequests = ASSET_TOKENS.map((t) =>
      getTokenInfo(t.address, account)
    )
    Promise.all(assetsRequests)
      .then((responses) => {
        const tokens = ASSET_TOKENS.map((p, idx) => {
          return {
            ...p,
            ...responses[idx],
          }
        }).filter((p) => p.balance > 0)
        dispatch(updateAssets(tokens))
        setLoading(false)
      })
      .catch((err) => {
        console.log('###', err)
      })
  }, [dispatch, account])

  return (
    <Box direction="column" align="center" className={styles.mainBox}>
      <AssetHeader />
      <ResponsiveContext.Consumer>
        {(size) => {
          console.log('###', size)
          return (
            <Box direction={size === 'small' ? 'column' : 'row'} width="100%">
              <Assets loading={loading} />
              <Farms loading={loading} />
            </Box>
          )
        }}
      </ResponsiveContext.Consumer>
    </Box>
  )
}

export default Overview

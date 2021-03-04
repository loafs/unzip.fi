import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Text, Image } from 'grommet'
import styles from '../../styles/Project.module.css'
import { AssetsSkeleton } from './Skeleton'
const Assets = ({ loading }) => {
  const bnbPrice = useSelector((state) => state.bnbPrice)
  const tokens = useSelector((state) => state.assets)

  return (
    <Box direction="column">
      <Box direction="column" className={styles.assets}>
        {tokens.map((t, idx) => {
          return (
            <Box
              key={t.address}
              direction="row"
              align="center"
              justify="between"
              pad="small"
              className={styles.asset}
              style={{ borderBottomWidth: idx === tokens.length - 1 ? 0 : 1 }}
            >
              <Box direction="row" align="center">
                <Image
                  src={`/images/tokens/${t.symbol}.png`}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    marginRight: 10,
                  }}
                />
                <Box direction="column">
                  <Box direction="row" align="end">
                    <Text weight="bold" color="dark2">
                      {t.symbol}
                    </Text>
                    <Text
                      size="small"
                      color="dark-5"
                      margin={{ horizontal: '4px' }}
                    >
                      {`$${(t.price * bnbPrice).toFixed(2)}`}
                    </Text>
                  </Box>

                  <Text size="small" color="dark-5">
                    {t.balance}
                  </Text>
                </Box>
              </Box>

              <Text weight="bold" color="black">{`$${(
                t.balance *
                t.price *
                bnbPrice
              ).toFixed(2)}`}</Text>
            </Box>
          )
        })}
        {loading && <AssetsSkeleton />}
      </Box>
    </Box>
  )
}

export default Assets

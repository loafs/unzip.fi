import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { useSelector } from 'react-redux'
import { Button, Text, Image } from 'grommet'
import { ellipsis } from '../../utils/common'
import { injected } from '../../hooks/connectors'
import icons from '../../utils/icons'

function Account() {
  const { activate } = useWeb3React()
  const account = useSelector((state) => state.account)

  return (
    <>
      {account ? (
        <Text size="small" margin="none" weight="bold">
          {ellipsis(account as string, 6, 4)}
        </Text>
      ) : (
        <>
          <Button
            secondary
            style={{
              borderRadius: 8,
            }}
            label={
              <div
                style={{
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  alignItems: 'center',
                }}
              >
                <Text style={{ marginRight: 8 }}>Connect</Text>
                <Image
                  fit="cover"
                  src={icons.METAMASK}
                  style={{ width: 30, height: 30 }}
                />
              </div>
            }
            onClick={() => {
              activate(injected)
            }}
          />
        </>
      )}
    </>
  )
}

export default Account

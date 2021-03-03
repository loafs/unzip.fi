type fn = (...args: any[]) => any

interface Window {
  imToken: any
  web3: any
  ethereum: any
}

interface Contract {
  setProvider: any
}

interface UserPoolInfo {
  stakedValue: number | string
  earnedValue: number | string
  rewardDebt?: number | string
  stakedToken: string
  earnedToken: string
}

interface TokenInfo {
  symbol: string
  contract: string
  balance?: number | string
  price?: number | string
}

interface PendingReward {
  value: string | number
  token: string
}

interface PoolInfo {
  isLPToken: boolean
  // userInfo: UserPoolInfo
  poolName: string
  stakedToken: TokenInfo
  earnedToken?: TokenInfo
  pendingToken: TokenInfo
  token0?: TokenInfo
  token1?: TokenInfo
  logo?: any
  pending?: PendingReward
}

type PoolInfoFn = (account: string | null | undefined) => Promise<PoolInfo[]>

interface ProjectProps {
  name: string
  logo: any
  desc: string
  link: string
  getPoolsStat: PoolInfoFn
  calcValue?: any
}

interface SidebarProps {
  activeTab: TAB
  setActiveTab: fn
}
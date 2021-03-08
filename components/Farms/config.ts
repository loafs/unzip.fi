import { FARM_TYPE } from '../../utils/types'
import icons from '../../utils/icons'
import {
  getPoolsStat as bdoGetPoolsStat,
  getMidasPoolsStat as midasGetPoolsStat,
} from '../../utils/protocols/bdo'
import { getPoolsStat as pancakeGetPoolsStat } from '../../utils/protocols/pancake'
import { getPoolsStat as alpacaGetPoolsStat } from '../../utils/protocols/alpaca'
import { getPoolsStat as autofarmGetPoolsStat } from '../../utils/protocols/autofarm'

export const PROJECTS: ProjectProps[] = [
  {
    name: 'Alpaca',
    link: 'https://app.alpacafinance.org/stake',
    desc: 'Leveraged yield farming by the people,for the people',
    logo: icons.ALPACA,
    getPoolsStat: alpacaGetPoolsStat,
    pools: [],
    tags: [FARM_TYPE.YIELD_FARMING],
  },
  {
    name: 'bdollar',
    link: 'https://bdollar.fi',
    desc:
      'bDollar (BDO) is an algorithmic stablecoin running on Binance Smart-chain',
    logo: icons.BDO,
    getPoolsStat: bdoGetPoolsStat,
    pools: [],
    tags: [FARM_TYPE.ALGORITHM_STABLECOIN],
  },
  {
    name: 'Pancake',
    link: 'https://pancakeswap.finance/farms',
    desc: 'The #1 AMM and yield farm on Binance Smart Chain.',
    logo: icons.PANCAKE,
    getPoolsStat: pancakeGetPoolsStat,
    pools: [],
    tags: [FARM_TYPE.YIELD_FARMING],
  },
  {
    name: 'Midas',
    link: 'https://midasdollar.fi/',
    desc:
      'Established team, non-anonymous. Ready & real use-cases for $MDO algo stablecoin with [Midas.eco](https://midas.eco/)',
    logo: icons.MIDAS,
    getPoolsStat: midasGetPoolsStat,
    pools: [],
    tags: [FARM_TYPE.ALGORITHM_STABLECOIN],
  },
  {
    name: 'Autofarm',
    link: 'https://autofarm.network/',
    desc: 'For the true farmers',
    logo: icons.AUTOFARM,
    getPoolsStat: autofarmGetPoolsStat,
    pools: [],
    tags: [FARM_TYPE.YIELD_FARMING],
  },
]

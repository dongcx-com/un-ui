import {makeInstaller} from '@un-ui/utils'
import components from './components'
import '@un-ui/theme/index.css'

const installer = makeInstaller(components)

export * from '../components'

export default installer
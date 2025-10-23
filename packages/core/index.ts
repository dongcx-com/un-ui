import {makeInstaller} from '@un-ui/utils'
import components from './components'
import '@un-ui/theme/index.css'

const installer = makeInstaller(components)

export * from '@un-ui/components'

export default installer
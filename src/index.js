/**
 * To showcase the usage of the dnb-ui-lib in React
 *
 */

import React from 'react'
import { render } from 'react-dom'
import App from './App.jsx'

// 2. My App styles
import './App.css'

// 3. Custom Eufemia import
import 'dnb-ui-lib/style/basis'
import 'dnb-ui-lib/style/components'
import 'dnb-ui-lib/style/themes/ui'

render(<App />, document.getElementById('app'))

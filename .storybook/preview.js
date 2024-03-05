import React from 'react'

import 'minireset.css'
import '../styles/global.css'
import '../styles/token.css'
import { disableGlobalArgTypes } from '../helpers/storybook'

const styles = {
  display: 'flex',
  flexDirection: 'column',
  maxHeigth: 'auto',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  height: '100%',
  gap: '10px 30px',
}

export const decorators = [
  (Story, { parameters }) =>
    disableGlobalArgTypes(parameters)('getStyles') || (
      <div style={styles}>
        <Story></Story>
      </div>
    ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
}

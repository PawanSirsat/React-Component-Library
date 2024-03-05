import React from 'react'
import { options } from './constants'
import { Card } from './Card'
import {
  getListTemplate,
  getOptionsArgsTypes,
  getTemplate,
} from '../../helpers/storybook'
import styles from './Card.module.css'

const Template = getTemplate(Card, styles)
const ListTemplate = getListTemplate(Card, styles)

export default {
  title: 'Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    children: 'Im card',
  },
  argTypes: {
    color: getOptionsArgsTypes(options.colors),
    size: getOptionsArgsTypes(options.sizes),
  },
}

export const Default = Template.bind({})

export const Clickable = Template.bind({})
Clickable.args = {
  isClickable: true,
}
export const Draggable = Template.bind({})
Draggable.args = {
  isDraggable: true,
}

export const Colors = ListTemplate.bind({})
Colors.args = {
  items: options.colors.map((color) => ({ color })),
}

export const Sizes = ListTemplate.bind({})
Sizes.args = {
  items: options.sizes.map((size) => ({ size })),
}

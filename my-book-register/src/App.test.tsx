import React, { useState } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import InputForm from './components/InputForm'
import App from './App'

it('inputに入力した文字が、そのまま表示される', async () => {
  const user = userEvent.setup();
  render(<App />)

  const inputs = screen.getAllByPlaceholderText('入力してください')
  await user.type(inputs[0], 'こんにちは')

  // <span>{value}</span>で表示してるからテストできる
  expect(inputs[0]).toHaveValue('こんにちは')
})



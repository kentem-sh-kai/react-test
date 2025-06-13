import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import InputForm from './InputForm';
import Input from './Input';

// InputFormコンポーネントのテストをグループ化
describe('InputForm Component', () => {
//   it('should call setValue with the correct value when text is typed into the input', async () => {
//   const user = userEvent.setup();
//   const mockSetValue = vi.fn();

//   render(
//     <Input
//       value=""
//       onChange={e => mockSetValue(e.target.value)}
//     />
//   );

//   const inputElement = screen.getByRole('textbox');
//   await user.type(inputElement, '123');

//   expect(mockSetValue).toHaveBeenCalledTimes(3);
//   expect(mockSetValue).toHaveBeenLastCalledWith('123');
// });

  // // テストケース2: ボタンクリックの挙動をテスト
  // it('should call handleClickButton when the button is clicked', async () => {
  //   // 【準備】
  //   const user = userEvent.setup();
  //   const mockSetValue = vi.fn();
  //   const mockHandleClick = vi.fn(); // handleClickButtonが呼ばれたかチェックするモック

  //   render(
  //     <InputForm
  //       inputValue=""
  //       setValue={mockSetValue}
  //       handleClickButton={mockHandleClick}
  //     />
  //   );

  //   // ボタン要素を探す
  //   const buttonElement = screen.getByRole('button', { name: '書籍登録' });

  //   // 【実行】
  //   await user.click(buttonElement);

  //   // 【検証】
  //   // ボタンがクリックされたら、mockHandleClickが1回だけ呼ばれることを確認
  //   expect(mockHandleClick).toHaveBeenCalledTimes(1);
  // });

  // テストケース1：ユーザーの視点で、入力した値が表示されるかをテストする（推奨）
it('should display the typed value correctly', async () => {
  // --- テスト用の「親コンポーネント」を定義 ---
  // このコンポーネントが、実際のアプリのようにstateを管理してくれる
  const TestHarness = () => {
    const [value, setValue] = useState('');
    return <Input value={value} onChange={(e) => setValue(e.target.value)} />;
  };

  // 【準備】
  const user = userEvent.setup();
  // stateを管理するTestHarnessをレンダリングする
  render(<TestHarness />);

  const inputElement = screen.getByRole('textbox');

  // 【実行】
  await user.type(inputElement, 'こんにちは');

  // 【検証】
  // inputのvalueが、入力した通りの値になっているかを確認する。
  // これがユーザーから見た最終的な結果であり、最も信頼できるテストです。
  expect(inputElement).toHaveValue('こんにちは');
});
});

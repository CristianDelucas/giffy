import {fireEvent, render,screen } from '@testing-library/react';
import App from '../App';
import React from 'react'

test.only('search form could be used', async () =>{
  render(<App/>)
  const input = await screen.findByRole('textbox');
  const button = await screen.findByRole('button');

  fireEvent.change(input,{target: {value:'Matrix'}})
  fireEvent.click(button);


  const title = await screen.findByText('Matrix')
  expect(title).toBeVisible();
})
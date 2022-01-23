import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SubmitField from '..';

const TestSubmitField = () => {
  const [ value, setValue ] = useState();
  return(<>
    <SubmitField role="textField" onEnter={setValue} />
    <div>{value}</div>
  </>)
}


test('should submit text in field when enter key is pressed', async () => {
  await render(<TestSubmitField />);
  const submitText = 'test';
  userEvent.type(screen.getByRole('textField'), submitText)
  userEvent.type(screen.getByRole('textField'), '{enter}')

  expect(screen.getByText(submitText)).toBeInTheDocument();
})

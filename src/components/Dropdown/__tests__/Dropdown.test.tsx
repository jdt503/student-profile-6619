import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Dropdown from '..';

const childrenText = 'Dropdown Children';
const titleText = 'Dropdown Title';
const buttonOpenText = '−';
const buttonClosedText = '+';

const TestDropdown = () => (
  <Dropdown title={titleText}>
    {childrenText}
  </Dropdown>
)

test('should handle basic dropdown flow', async () => {
  await render(<TestDropdown />);

  expect(screen.getByText(titleText)).toBeInTheDocument();
  expect(screen.queryByText(childrenText)).not.toBeInTheDocument();

  userEvent.click(screen.getByRole('button', { name: buttonClosedText }));

  expect(screen.getByText(childrenText)).toBeInTheDocument();

  userEvent.click(screen.getByRole('button', { name: buttonOpenText }));

  expect(screen.queryByText(childrenText)).not.toBeInTheDocument();
});

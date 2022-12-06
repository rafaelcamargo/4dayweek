import { act, render } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

export async function pause(timeout = 0){
  await new Promise(resolve => setTimeout(resolve, timeout));
}

export async function asyncMount(component){
  let result;
  await act(async () => {
    result = render(component);
    await pause();
  });
  return result;
}

export const RouterMock = ({ children }) => {
  return (
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={children} />
      </Routes>
    </MemoryRouter>
  );
};

import { act, render } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
export * from '@testing-library/react';

export async function pause(){
  await new Promise(resolve => setTimeout(resolve));
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

import { act, render } from '@testing-library/react';
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

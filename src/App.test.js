import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GraphSearch from './GraphSearch';

test('renders Graph Search component', () => {
  render(<GraphSearch />);
  const linkElement = screen.getByText(/Graph Search/i);
  expect(linkElement).toBeInTheDocument();
});

test('runs BFS and displays the result', () => {
  render(<GraphSearch />);
  const bfsButton = screen.getByText(/Run BFS/i);
  fireEvent.click(bfsButton);

  // BFS 결과를 p 요소로 가정하고 해당 p 요소를 선택
  const resultElement = screen.getByTestId('bfs-result');
  expect(resultElement).toBeInTheDocument();
  expect(resultElement.textContent).not.toBe('');
});

test('runs DFS and displays the result', () => {
  render(<GraphSearch />);
  const dfsButton = screen.getByText(/Run DFS/i);
  fireEvent.click(dfsButton);

  // DFS 결과를 p 요소로 가정하고 해당 p 요소를 선택
  const resultElement = screen.getByTestId('dfs-result');
  expect(resultElement).toBeInTheDocument();
  expect(resultElement.textContent).not.toBe('');
});

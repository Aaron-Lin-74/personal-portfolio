import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ProjectCard from './ProjectCard';

describe('ProjectCard component', () => {
  const mockProject = {
    title: 'mock title',
    description: 'mock description',
    image: 'mock image',
    tags: ['mock tag1', 'mock tag2'],
    link: 'mock link',
    source: 'mock source',
    id: 0,
  };
  test('should render the component', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByRole('img')).toHaveAttribute('src', mockProject.image);
    screen.getByRole('heading', {
      name: mockProject.title,
    });
    screen.getByText(mockProject.description);
    screen.getByText(mockProject.tags[0]);
    screen.getByText(mockProject.tags[1]);
    screen.getByText('Live Demo');
    expect(screen.getAllByRole('link')).toHaveLength(2);
    expect(screen.getAllByRole('link')[0]).toHaveAttribute(
      'href',
      mockProject.link
    );
    screen.getByText('Github Repo');
    expect(screen.getAllByRole('link')[1]).toHaveAttribute(
      'href',
      mockProject.source
    );
  });
});

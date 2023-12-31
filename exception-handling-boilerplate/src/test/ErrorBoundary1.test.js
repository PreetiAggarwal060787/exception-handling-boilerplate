import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {  configure } from 'enzyme';
import { render, screen } from '@testing-library/react';
import Child1 from '../Components/Child1';
import {ErrorBoundary} from 'react-error-boundary'
import Fallback1 from '../Components/Fallback1';


configure({adapter: new Adapter()});

test('Displays Child 1 fallback error boundary', () => {
    render(<ErrorBoundary FallbackComponent={Fallback1}>
        <Child1 ></Child1>
    </ErrorBoundary>);
    const nameElement = screen.getByText(/Fallback Page for Page-1/);
    expect(nameElement).toBeInTheDocument();
});
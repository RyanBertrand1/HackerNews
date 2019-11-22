import React from 'react';
import ReactDOM , {unmountComponentAtNode, render} from 'react-dom';
import { act } from "react-dom/test-utils";
import Menu from './MenuComponent';
import { BrowserRouter } from 'react-router-dom';

let container = null;

const categories = [];

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
});

it('renders without crashing', () => {
  act(() => {
    render(<BrowserRouter><Menu></Menu></BrowserRouter>, container)    
  }) 
});
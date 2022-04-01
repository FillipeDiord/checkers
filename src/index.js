import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { App } from './App';
import MultiBackend from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import { DndProvider } from 'react-dnd';

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <App />
    </DndProvider>
  </React.StrictMode>
);
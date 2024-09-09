import React from 'react';
import { SystemProvider } from 'coral-system';
import './preview.css';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withSystemProvider = (Story, context) => {
  return (
    <SystemProvider prefix="--tango">
      <Story {...context} />
    </SystemProvider>
  );
};

export const decorators = [withSystemProvider];
export const tags = ['autodocs']; // 可以开启 Doc 文档

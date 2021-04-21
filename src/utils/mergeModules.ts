import { FC } from 'react';

interface Page {
  path: string;
  icon: string;
  order: number;
  color: string;
  title: string;
  visible: boolean;
  component: FC;
}

interface Modules {
  pages: Page[];
  reducers: object;
  sagas: object[];
}

const mergeModules = (...modules: Modules[]) => ({
  pages: modules
    .reduce((acc: Page[], { pages }) => (pages ? [...acc, ...pages] : acc), [])
    .sort((a: any, b: any) => a.order - b.order),
  reducers: modules.reduce(
    (acc: any, { reducers }: any) => (reducers ? { ...acc, ...reducers } : acc),
    {},
  ),
  sagas: modules.reduce((acc: any, { sagas }: any) => (sagas ? [...acc, ...sagas] : acc), []),
});

export default mergeModules;

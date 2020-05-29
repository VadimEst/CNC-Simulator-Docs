
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/',
  component: ComponentCreator('/'),
  exact: true,
  
},
{
  path: '/docs/:route',
  component: ComponentCreator('/docs/:route'),
  
  routes: [
{
  path: '/docs/dev/devdocs',
  component: ComponentCreator('/docs/dev/devdocs'),
  exact: true,
  
},
{
  path: '/docs/dev/mdx',
  component: ComponentCreator('/docs/dev/mdx'),
  exact: true,
  
},
{
  path: '/docs/user/userdocs',
  component: ComponentCreator('/docs/user/userdocs'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];

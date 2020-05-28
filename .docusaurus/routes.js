
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
  path: '/docs/dev/doc2',
  component: ComponentCreator('/docs/dev/doc2'),
  exact: true,
  
},
{
  path: '/docs/dev/doc3',
  component: ComponentCreator('/docs/dev/doc3'),
  exact: true,
  
},
{
  path: '/docs/dev/mdx',
  component: ComponentCreator('/docs/dev/mdx'),
  exact: true,
  
},
{
  path: '/docs/user/doc2',
  component: ComponentCreator('/docs/user/doc2'),
  exact: true,
  
},
{
  path: '/docs/user/doc3',
  component: ComponentCreator('/docs/user/doc3'),
  exact: true,
  
},
{
  path: '/docs/user/mdx',
  component: ComponentCreator('/docs/user/mdx'),
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

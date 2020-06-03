
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
  path: '/docs/dev/architecture',
  component: ComponentCreator('/docs/dev/architecture'),
  exact: true,
  
},
{
  path: '/docs/dev/code/tool',
  component: ComponentCreator('/docs/dev/code/tool'),
  exact: true,
  
},
{
  path: '/docs/dev/code/vector2',
  component: ComponentCreator('/docs/dev/code/vector2'),
  exact: true,
  
},
{
  path: '/docs/dev/contribute',
  component: ComponentCreator('/docs/dev/contribute'),
  exact: true,
  
},
{
  path: '/docs/dev/getting-started',
  component: ComponentCreator('/docs/dev/getting-started'),
  exact: true,
  
},
{
  path: '/docs/dev/libraries',
  component: ComponentCreator('/docs/dev/libraries'),
  exact: true,
  
},
{
  path: '/docs/dev/overview',
  component: ComponentCreator('/docs/dev/overview'),
  exact: true,
  
},
{
  path: '/docs/dev/scoping',
  component: ComponentCreator('/docs/dev/scoping'),
  exact: true,
  
},
{
  path: '/docs/dev/ui-concept',
  component: ComponentCreator('/docs/dev/ui-concept'),
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


import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','f02'),
  
  routes: [
{
  path: '/docs/dev/architecture',
  component: ComponentCreator('/docs/dev/architecture','265'),
  exact: true,
},
{
  path: '/docs/dev/code/circle',
  component: ComponentCreator('/docs/dev/code/circle','31e'),
  exact: true,
},
{
  path: '/docs/dev/code/colorwrapper',
  component: ComponentCreator('/docs/dev/code/colorwrapper','b56'),
  exact: true,
},
{
  path: '/docs/dev/code/commandcoordinates',
  component: ComponentCreator('/docs/dev/code/commandcoordinates','237'),
  exact: true,
},
{
  path: '/docs/dev/code/commandparameterswrapper',
  component: ComponentCreator('/docs/dev/code/commandparameterswrapper','86a'),
  exact: true,
},
{
  path: '/docs/dev/code/commandtable',
  component: ComponentCreator('/docs/dev/code/commandtable','379'),
  exact: true,
},
{
  path: '/docs/dev/code/commandwrapper',
  component: ComponentCreator('/docs/dev/code/commandwrapper','35f'),
  exact: true,
},
{
  path: '/docs/dev/code/g00',
  component: ComponentCreator('/docs/dev/code/g00','02a'),
  exact: true,
},
{
  path: '/docs/dev/code/g01',
  component: ComponentCreator('/docs/dev/code/g01','237'),
  exact: true,
},
{
  path: '/docs/dev/code/g02',
  component: ComponentCreator('/docs/dev/code/g02','feb'),
  exact: true,
},
{
  path: '/docs/dev/code/g03',
  component: ComponentCreator('/docs/dev/code/g03','488'),
  exact: true,
},
{
  path: '/docs/dev/code/g28',
  component: ComponentCreator('/docs/dev/code/g28','b23'),
  exact: true,
},
{
  path: '/docs/dev/code/idletimer',
  component: ComponentCreator('/docs/dev/code/idletimer','678'),
  exact: true,
},
{
  path: '/docs/dev/code/invalidcommandexception',
  component: ComponentCreator('/docs/dev/code/invalidcommandexception','b15'),
  exact: true,
},
{
  path: '/docs/dev/code/invalidprogramfileexception',
  component: ComponentCreator('/docs/dev/code/invalidprogramfileexception','eec'),
  exact: true,
},
{
  path: '/docs/dev/code/line',
  component: ComponentCreator('/docs/dev/code/line','2c9'),
  exact: true,
},
{
  path: '/docs/dev/code/logentry',
  component: ComponentCreator('/docs/dev/code/logentry','dad'),
  exact: true,
},
{
  path: '/docs/dev/code/logger',
  component: ComponentCreator('/docs/dev/code/logger','11b'),
  exact: true,
},
{
  path: '/docs/dev/code/m00',
  component: ComponentCreator('/docs/dev/code/m00','054'),
  exact: true,
},
{
  path: '/docs/dev/code/m02',
  component: ComponentCreator('/docs/dev/code/m02','90c'),
  exact: true,
},
{
  path: '/docs/dev/code/m03',
  component: ComponentCreator('/docs/dev/code/m03','b6c'),
  exact: true,
},
{
  path: '/docs/dev/code/m04',
  component: ComponentCreator('/docs/dev/code/m04','644'),
  exact: true,
},
{
  path: '/docs/dev/code/m05',
  component: ComponentCreator('/docs/dev/code/m05','bba'),
  exact: true,
},
{
  path: '/docs/dev/code/m08',
  component: ComponentCreator('/docs/dev/code/m08','f77'),
  exact: true,
},
{
  path: '/docs/dev/code/m09',
  component: ComponentCreator('/docs/dev/code/m09','a63'),
  exact: true,
},
{
  path: '/docs/dev/code/m13',
  component: ComponentCreator('/docs/dev/code/m13','f67'),
  exact: true,
},
{
  path: '/docs/dev/code/m14',
  component: ComponentCreator('/docs/dev/code/m14','dd5'),
  exact: true,
},
{
  path: '/docs/dev/code/mill',
  component: ComponentCreator('/docs/dev/code/mill','a57'),
  exact: true,
},
{
  path: '/docs/dev/code/millcommand',
  component: ComponentCreator('/docs/dev/code/millcommand','89e'),
  exact: true,
},
{
  path: '/docs/dev/code/milloutofboundsexception',
  component: ComponentCreator('/docs/dev/code/milloutofboundsexception','0e9'),
  exact: true,
},
{
  path: '/docs/dev/code/millposition',
  component: ComponentCreator('/docs/dev/code/millposition','c55'),
  exact: true,
},
{
  path: '/docs/dev/code/milltimer',
  component: ComponentCreator('/docs/dev/code/milltimer','b4c'),
  exact: true,
},
{
  path: '/docs/dev/code/programparser',
  component: ComponentCreator('/docs/dev/code/programparser','645'),
  exact: true,
},
{
  path: '/docs/dev/code/programwrapper',
  component: ComponentCreator('/docs/dev/code/programwrapper','383'),
  exact: true,
},
{
  path: '/docs/dev/code/settings',
  component: ComponentCreator('/docs/dev/code/settings','bb5'),
  exact: true,
},
{
  path: '/docs/dev/code/settingsparser',
  component: ComponentCreator('/docs/dev/code/settingsparser','752'),
  exact: true,
},
{
  path: '/docs/dev/code/settingspopover',
  component: ComponentCreator('/docs/dev/code/settingspopover','062'),
  exact: true,
},
{
  path: '/docs/dev/code/settingswrapper',
  component: ComponentCreator('/docs/dev/code/settingswrapper','c11'),
  exact: true,
},
{
  path: '/docs/dev/code/terminalreader',
  component: ComponentCreator('/docs/dev/code/terminalreader','a19'),
  exact: true,
},
{
  path: '/docs/dev/code/tool',
  component: ComponentCreator('/docs/dev/code/tool','dc4'),
  exact: true,
},
{
  path: '/docs/dev/code/ui_left',
  component: ComponentCreator('/docs/dev/code/ui_left','cb3'),
  exact: true,
},
{
  path: '/docs/dev/code/ui_right',
  component: ComponentCreator('/docs/dev/code/ui_right','e55'),
  exact: true,
},
{
  path: '/docs/dev/code/userinterface',
  component: ComponentCreator('/docs/dev/code/userinterface','450'),
  exact: true,
},
{
  path: '/docs/dev/code/vector2',
  component: ComponentCreator('/docs/dev/code/vector2','612'),
  exact: true,
},
{
  path: '/docs/dev/code/vector2wrapper',
  component: ComponentCreator('/docs/dev/code/vector2wrapper','cea'),
  exact: true,
},
{
  path: '/docs/dev/contribute',
  component: ComponentCreator('/docs/dev/contribute','fef'),
  exact: true,
},
{
  path: '/docs/dev/getting-started',
  component: ComponentCreator('/docs/dev/getting-started','303'),
  exact: true,
},
{
  path: '/docs/dev/libraries',
  component: ComponentCreator('/docs/dev/libraries','fd8'),
  exact: true,
},
{
  path: '/docs/dev/overview',
  component: ComponentCreator('/docs/dev/overview','1e5'),
  exact: true,
},
{
  path: '/docs/dev/scoping',
  component: ComponentCreator('/docs/dev/scoping','f2a'),
  exact: true,
},
{
  path: '/docs/dev/ui-concept',
  component: ComponentCreator('/docs/dev/ui-concept','095'),
  exact: true,
},
{
  path: '/docs/user/commands',
  component: ComponentCreator('/docs/user/commands','82a'),
  exact: true,
},
{
  path: '/docs/user/examples',
  component: ComponentCreator('/docs/user/examples','7a0'),
  exact: true,
},
{
  path: '/docs/user/functionality',
  component: ComponentCreator('/docs/user/functionality','345'),
  exact: true,
},
{
  path: '/docs/user/installation',
  component: ComponentCreator('/docs/user/installation','355'),
  exact: true,
},
{
  path: '/docs/user/overview',
  component: ComponentCreator('/docs/user/overview','f01'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];

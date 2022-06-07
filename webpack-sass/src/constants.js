
const fromFile = 'Hello world!!!';

// nodejs
// module.exports = {
//   fromFile,
// };

// Frotend, angular, react, vue
const exportInfo = {
  fromFile
};

// luego esto se importa de esta manera
// import { newVariable } from './constants';
export const newVariable = 'new variable';

// luego esto se importa de esta manera
// import constants from './constants';
// el nombre en este caso puede ser el que queramos
export default exportInfo;
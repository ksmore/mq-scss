import unitTest from '../../../gulp/helpers/unitTest';

unitTest('complexOr', __dirname, '@media screen and (max-width: 800px) and (min-width: 601px), (max-aspect-ratio: 1 / 1), (min-aspect-ratio: 2 / 1){.unitTest{color:#000}}')

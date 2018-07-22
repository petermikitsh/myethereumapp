import iconv from 'iconv-lite';
import encodings from 'iconv-lite/encodings';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// For info on this hack:
// https://stackoverflow.com/questions/46227783/encoding-not-recognized-in-jest-js
iconv.encodings = encodings;

enzyme.configure({ adapter: new Adapter() });

import iconv from 'iconv-lite';
import encodings from 'iconv-lite/encodings';

// For info on this hack:
// https://stackoverflow.com/questions/46227783/encoding-not-recognized-in-jest-js

iconv.encodings = encodings;

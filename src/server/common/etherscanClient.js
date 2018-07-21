import etherscan from 'etherscan-api';
import constants from '../constants';

const api = etherscan.init(constants.ETHERSCAN_API_KEY);

export default api;

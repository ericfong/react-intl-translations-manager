import stableStringify from 'json-stable-stringify';
import compareByKey from './compareByKey';

export default (value, {
  replacer = null,
  space = 2,
  sortKeys = true,
}) => (
  sortKeys
    ? stableStringify(value, { replacer, space, cmp: compareByKey })
    : JSON.stringify(value, replacer, space)
);

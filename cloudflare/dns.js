const sdk = require('./client');

const ZONE = process.env.JS_COOL_CF_ZONE;

const list = async (page = 1) => {
  const { data: { result = [] } = {} } = await sdk.get(`/zones/${ZONE}/dns_records`, {
    params: {
      page,
      per_page: 100,
      type: 'CNAME'
    }
  });
  if (result === 100) {
    return [...result, ...(await list(page + 1))];
  }
  return result;
};

const create = async (args) => {
  return sdk.post(`/zones/${ZONE}/dns_records`, {
    ...{
      type: 'CNAME',
      ttl: 1
    },
    ...args
  });
};

const remove = (recordId) => {
  return sdk.delete(`/zones/${ZONE}/dns_records/${recordId}`);
};

exports.list = list;
exports.create = create;
exports.remove = remove;

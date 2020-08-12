const sdk = require('./client');

const list = async (page = 1) => {
  const { data: { result = [] } = {} } = await sdk.get(`/zones/${process.env.JS_COOL_CF_ZONE}/dns_records`, {
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

const create = async () => {};

const update = async () => {};

const remove = async () => {};

exports.list = list;
exports.create = create;
exports.update = update;
exports.remove = remove;

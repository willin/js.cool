const fs = require('fs');
const path = require('path');
const dns = require('../cloudflare/dns');
const cnames = require('../main/active_cname');

const file = fs.readFileSync(path.join(__dirname, '../main/active_cname.js'), { encoding: 'utf-8' }).split('\n');

const { log } = console;
/* eslint-disable no-await-in-loop */

// const ISPR = !!process.env.TRAVIS_PULL_REQUEST && process.env.TRAVIS_PULL_REQUEST !== 'false';
async function main() {
  // Fetch all DNS Records of type CNAME
  // 获取全部 DNS CNAME 记录
  log('Start DNS Records scaning...');
  const arr = await dns.list();
  const full = {};
  // CNAME records online
  // 线上的 CNAME 列表
  const onlineCNAMEs = [];

  // Filter data
  // 数据清理
  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i];
    const { name, id, content, proxied } = item;
    const key = name.replace('.js.cool', '').replace('js.cool', '@');

    onlineCNAMEs.push(key);
    full[key] = {
      id,
      content,
      proxied
    };
  }
  // Latest CNAME records from git
  // GIT 上最新的 CNAME 列表
  const latestCNAMEs = Object.keys(cnames);
  // Deleted records
  // 删除的记录（线上列表中存在，最新列表中不存在）
  const deletedCNAMEs = onlineCNAMEs.filter((n) => !latestCNAMEs.includes(n));
  log('Deleting Records:', JSON.stringify(deletedCNAMEs));
  for (let i = 0; i < deletedCNAMEs.length; i += 1) {
    const key = deletedCNAMEs[i];
    await dns.remove(full[key].id);
  }
  // Added records
  // 新增的记录（最新列表中存在，线上列表中不存在）
  const addedCNAMEs = latestCNAMEs.filter((n) => !onlineCNAMEs.includes(n));
  log('Adding Records:', JSON.stringify(addedCNAMEs));
  for (let i = 0; i < addedCNAMEs.length; i += 1) {
    const name = addedCNAMEs[i];
    const content = cnames[name];
    // Check `// nocf`
    // 检查是否为 `// nocf` 记录
    const regexp = new RegExp(`'${name}':\\s*'${content}'`);
    const matchedLine = file.find((x) => regexp.test(x)) || '';
    const proxied = !/\/\/\s*noCF/.test(matchedLine);
    await dns.create({
      name: `${name.toLowerCase()}.js.cool`,
      content: content
        .toLowerCase()
        .replace(/^(.*\/\/)/, '')
        .replace(/(\/.*)$/, ''),
      proxied
    });
  }
}

main().then(() => {
  process.exit(0);
});

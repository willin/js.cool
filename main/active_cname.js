/*
 ***** 已使用的子域名
 * ***********************
 *
 * 目前以下子域名已经启用
 * 提交一个 PR， 添加你想使用的的域名
 *
 *
 **** 说明
 * ***********
 *
 * KEY:         你提交的域名（如：`foo` 表示自定义子域名为 `foo.js.cool`）
 *
 * VALUE:       以 Github 为例，`foo.github.io` 表示用户/组织的主页，
 *              或 `foo.github.io/bar` 表示项目主页，也可以绑定 Gitee、 CODING.NET 等其它开源托管服务商。
 *
 * CLOUDFLARE:  目前 JS.COOL 使用的 DNS 服务商为 CloudFlare。默认情况下代理状态为自动（支持 SSL），
 *              通过 HTTPS 链接（如： https://foo.js.cool ）进行访问。
 *              但如果你不希望通过 CloudFlare 加速，可以选择 `仅限 DNS` 选项，
 *              只需要在你提交的代码后面添加 `// noCF` 注释即可。
 * CLOUDFLARE:  JS.COOL uses CloudFlare as its DNS. By default, CloudFlare proxies all requests to your subdomain
 *              to get SSL support (https://foo.js.cool) and make use of browser caching with a TTL of 30 min.
 *              But you can opt-out from this and make Cloudflare forward all requests directly to GitHub.
 *              Just add '//noCF' in the line of your requested subdomain to give us a hint.
 *              (all the lines marked with '//noCF?' are from a time when a requester had to explicitly opt-in.
 */
module.exports = {
  // Cloudflare CDN
  'github': 'cdn-github.willin.workers.dev', // github.com
  'fonts-gstatic': 'cdn-fonts-gstatic.willin.workers.dev', // fonts.gstatic.com
  'remix-i18n': 'remix-i18n.pages.dev',
  // 请在此处区域内添加自定义域名
  'game': 'huxinfeng.github.io',
  'trojan': 'trojanz07.github.io',
  'robsd': 'robsd.pages.dev',
  'xyzblog': 'xyzscratcher.github.io',
  '13': '0x3st.netlify.app',
  'leiloser': 'leiloser.github.io',
  'foryou': 'foryou-byfw.vercel.app', //noCF
  'appcheck': 'app-checker.github.io',
  'json': 'waifu-project.github.io',
  'spin': 'rahulkarda.github.io',
  'can1425': 'can1425.github.io',
  'code-font': 'waifu-project.github.io',
  'color-ui': 'colorui-kit.github.io',
  'icns': 'icnskit.github.io',
  'j2me_games': 'waifu-project.github.io',
  'cnchar': 'theajack.github.io',
  'leader': 'willin.github.io',
  'codewars': 'js-cool.github.io',
  'dara': 'idara17.github.io',
  'dataloader': 'wshow.github.io',
  'fcircle-doc': 'hexo-circle-of-friends-doc.vercel.app',
  'regexper': 'wshow.github.io',
  'hyperapp': 'willin.github.io',
  'anime': 'js-cool.github.io',
  'vasu': 'vasu-xd.github.io',
  'learn': 'hosting.gitbook.com',
  'vchart': 'willin.github.io',
  'graphql': 'willin.github.io',
  'speech': 'willin.github.io',
  'shorturl': '63a13201-210b-428a-bebc-299898afb42b.id.repl.co',
  'blockchain': 'willin.github.io',
  'antiadblock': 'js-cool.github.io',
  'noho': 'willin.github.io',
  //'jen': 'dirkhe1051931999.github.io',
  'uiw': 'uiwjs.github.io',
  'shu': '87a5f664-7619-4689-b0d8-3cf0d028a6d3.id.repl.co',
  'exam': 'examined.netlify.app',
  'xrkffgg': 'xrkffgg.github.io',
  'interview': 'front-end-interview.netlify.app',
  'xiaomeiwu': 'xiaomeiwu.github.io',
  'xiaopi': 'xiaopi.netlify.app',
  'xiaowang': 'xiaowang.netlify.app',
  'love': 'sincere.vercel.app',// noCF
  'ip': 'vercel-dns.kai.bi', // noCF
  'mingyan': 'lehs8n.coding-pages.com', //noCf
  'na': 'qq.mcust.cn',
  'rx': 'willin.github.io',
  'yogg': 'yogsuhrawn.github.io',
  'bbx': 'appser.gitee.io',
  'mengd': 'cname.vercel-dns.com',
  'kali': '551kdx.coding-pages.com',
  'kunkun': 'kunkun.netlify.app',
  'zwt': 'zwtdyhm.github.io',
  'zwtdwz': 'zwtdzh.github.io',
  'zwtdwlzd': 'zwtdwlid.github.io',
  'wangdabao-resume': 'wangdabaoqq.github.io',
  'wangdabao': 'wangdabaoqq.github.io',
  'resources': 'willin.github.io',
  'smallkunkun': 'kblog-dev.netlify.app',
  'zwtdwzym': 'zwtduserid.github.io',
  'kaodan': 'kaodan.github.io',
  'gatsby-demo': 'whitematrix.github.io',
  'box': 'qikaile.github.io',
  'hualin': 'liaochenlanruo.github.io',
  'authing-next': 'cname.vercel-dns.com',
  'rallie': 'ralliejs.github.io',
  'remix': 'remix-blog-demo.pages.dev',
  'atordvairn': 'atordvairn.vercel.app',
  'free-ss': 'free-ss.vercel.app',
  'verse': 'verse-social.vercel.app',
  'retrounhash': 'retrounhash.pages.dev',
  'todoish': 'academicgit.github.io',
  'wordle': 'academicgit.github.io',
  'god': 'godwhitetaiwan.github.io',
  'godwhite': 'godwhitetaiwan.github.io',
  'lzscxb': 'lzscxb.github.io',
  'fox': 'cname-china.vercel-dns.com', //noCF
  'luca': 'lucatolton.github.io',
  'notapi': 'notapi.vercel.app', //noCF
  'heiguoblog': 'fairy-plus.github.io',
  'zenobia': 'zenobiadevelopment.github.io',
  'ngcchinl': 'zeusgangzz.github.io',
  'pzwboy': 'pzwboy.github.io',
  'pattrick': 'kazs0001.github.io',
  'connor': 'connordoesdev.github.io',
  'mew': 'meowier.github.io',
  'ethan': 'ethan-phu.github.io',
  'wzx': 'wzx-blog.vercel.app', //noCF
  'eleven': 'elevenvac.github.io',
  'wsee': 'md-wz.vercel.app', //noCF
  'wlcf': 'md-wz.vercel.app', //noCF
  'spicydevs': 'spicydevs.pages.dev',
  'cdn.spicydevs': 'spicydevs.github.io',
  'sd': 'spicydevs.pages.dev',
  'preview.spicydevs': 'spicydevs.github.io',
  'minecraft': 'mcjs.pages.dev',
  'servers': 'opaayush.github.io',
  'world': 'pythoniaweb.github.io',
  'frank': 'joyfrank.vercel.app',// noCF
  'class20': 'redblueidea.github.io',
  'radio': 'ayahchill.github.io',
  'start': 'start-pages.vercel.app',//noCF
  'zx': 'cname.vercel-dns.com', //noCF
  'aqiu': 'aqiu.vercel.app',//nocF
  'scripthouse': 'scripthouse.vercel.app',//nocF
  'elvis': 'elvisndubuisi.vercel.app',//nocF
  'dinglin': 'roaring-churros-e65865.netlify.app',// noCF
  'thitit': 'portfolio-five-tan.vercel.app',
  'duck': 'deng-duck.github.io',
  'ms': 'ms27520.github.io',
  'zzy': 'hitptep.github.io',//noCF
  'abe': 'hitptep.github.io',//noCF
  'dice': 'cname.vercel-dns.com', //noCF
  'willmo': 'willmo.netlify.app',
  'navigator': 'navigator.github.io',
  'zswangziye': 'zswangziye.github.io',
  'duckwaline': 'waline-3bg5otthj-deng-duck.vercel.app',
  'dengduck': 'dengduck.netlify.app',
  'waio': 'cname.vercel-dns.com', // noCF
  'joy': 'frankjoy.vercel.app',// noCF
  'journey': 'feynmanfrank.github.io',// noCF
  'dhruvil': 'dhruvilmoradiya.github.io',
  'whatsme.dhruvil': 'whatsme.netlify.app'
  'ziscul': 'ziscul.vercel.app',
  'muyangplus': 'muyangplus.github.io', // noCF
  'eshexon': 'eshexon-docs.netlify.app', // noCF
  'feat': 'featyou.vercel.app',
  'feat-status': 'status.cron-job.org',
  'zennnnnnnnnnnn': 'zennnnnnnnnnnn.github.io',
  'xlenco'：'cname.vercel-dns.com', //noCF
  'yxlr': 'regal-gnome-0c8689.netlify.app', //noCF
  'vishal': 'vishalpx.github.io', //noCF
  'gtcblog'：'gtcblog.netlify.app', //noCF
  'willmocms': 'willmocms.vercel.app',//noCF
  'syr': 'cname-china.vercel-dns.com',//noCF
  'chirag-adhvaryu': 'chirag-adhvaryu.github.io',
  'marzm': 'xiaomait.github.io',
  'jayg': 'jayggit.github.io',
  'yashh-chauhan': 'yashh-chauhan.github.io',
  'lan': 'LanHuang025.github.io',
  'geekswg': 'geekswg.github.io',
  'geek-waline': 'geekswg.vercel.app', //noCF
  'fun': 'michaelsynan.github.io',
  'zmk': 'wszmk.github.io',
  'ba': 'mianba.netlify.app',
  'viren-trivedi': 'viren-trivedi.github.io',
  'hajeekn': 'cname.vercel-dns.com', //noCF
  'yash-poojara': 'yash-poojara.github.io',
  'ajit-thakor': 'ajit-thakor.github.io',
  'viral-gadhiya': 'viral-gadhiya.github.io',
  'dudani-meet': 'dudani-meet.github.io',
  'priti-shide': 'priti-shide.github.io'
  'ansari-saify': 'ansari-saify.github.io',
  'mihir-patel-agc': 'mihir-patel-agc.github.io',
  'ankit-acquaintsoft': 'ankit-acquaintsoft.github.io',
  'bhavesh-acquaintsoft': 'bhavesh-acquaintsoft.github.io',
  'chirag-adhvaryu': 'chirag-adhvaryu.github.io',
  'insight': 'insight.adaptable.app',
  'lakhani-palak': 'lakhani-palak.github.io',
  'prajapati-divya': 'prajapati-divya.github.io',
  'pandya-riddhi': 'pandya-riddhi.github.io',
  'shakeel-ahamad': 'shakeel-ahamad.github.io',
  'ajay-charotariya': 'ajay-charotariya.github.io',
  'mandaninikunj': 'mandaninikunj.github.io',
  'hiren-brahmbhatt': 'hiren-brahmbhatt.github.io',
  'gottaegbert': 'egbert.vercel.app',
  'oa': 'zcns.github.io',
  'syed': 'alephanull.github.io',
  'antioch': 'antioch.vercel.app',
  'yogesh': 'yogeshx.vercel.app',//noCF
  // 请在此行之上新增一行并提交 Pull Request
  // 示例：
  // 'youarname': 'username.github.io' // noCF
  // 以下为已启用的保留域名，请勿修改
  '@': 'js-cool.github.io',
  'www': 'kv6xcc.coding-pages.com', // 国内镜像
  'logo': 'js-cool.github.io',
  'thetechnikfreak': 'thetechnikfreak.netlify.app'
};

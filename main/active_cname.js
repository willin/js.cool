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
 *              只需要在你提交的代码后面添加 `//noCF` 注释即可。
 *
 * IMPORTANT:   To authorize yourself as the owner of the GitHub Page you must have added a valid CNAME file
 *              (with the requested domain, e.g.: "foo.js.org") to your repository.
 *              The requested subdomain must match either your GitHub username or the name of your project
 *              repository. Exceptions are possible for the sake of clarity (e.g. if your project has the
 *              name "foojs" you can request "foo").
 *              Before you start a request for your personal fork of "react" or "vue" you should read
 *              the section "naming conflicts" in the wiki!
 *
 * NOTICE:      Please follow the format set by everyone else in this file. Entries should use double quotes,
 *              with space between the colon (after the key) and the value and should always be in alphabetical
 *              order. Each line apart from the very last entry should have a comma after it to ensure this file
 *              is valid syntax.
 *
 *              BECAUSE OF THE RISK OF ABUSE, I´M NOT ACCEPTING REQUESTS FOR PAGES WITHOUT REASONABLE CONTENT!
 */
module.exports = {
  '@': 'js-cool.github.io',
  www: 'js-cool.github.io',
  leader: 'willin.github.io'
};

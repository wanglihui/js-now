/**
 * Created by think on 2015/2/7.
 *
 * 根据时区获取当前不带时区时间,
 * 主要用于解决postgresQL存储无时区timestamp时与数据库生成时间不一致问题
 */

function now() {
  var d = new Date();
  d = d.getTime() - d.getTimezoneOffset() * 60 * 1000;
  d = new Date(d);
  return d.toUTCString().replace(/GMT/, "");
}

module.exports = now;
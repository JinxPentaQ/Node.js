/**
 * Created by dllo on 17/2/13.
 */
// 获取crypto模块
const crypto = require('crypto');

//使用md5进行加密
const  hash = crypto.createHash('md5');

// update的参数就是要加密的东西
// hash.update('hello,world');
// hash.update('hello,nodejs');
//
// // 把hash通过16进制进行加密
// 编码方式 可以为'hex', 'binary' 或者'base64'。
// console.log(hash.digest('hex'));

//使用sha1进行加密 还可以使用sha256或者sha512
// const hash = crypto.createHash('sha1');
// hash.update('hello,world');
// hash.update('hello,nodejs');
// console.log(hash.digest('hex'));

// AES一种对称的加密算法，加密解密都需要一个密钥，
// 加密的函数 参数1是需要加密的密码，参数2是密钥
function aesEncrypt(data, key) {

    // 把这个密码用aes192进行加密
    const cipher = crypto.createCipher('aes192', key);
    //参数1要加密的内容
    //参数2 编码方式，
    //参数3 已加密内容的输出编码方式
    var crypted = cipher.update(data, 'utf8', 'hex');
    // 加密之后的值 （ 所有的加密内容输出的编码格式）
    crypted += cipher.final('hex');
    return crypted;
}
// 解密的函数 函数 参数1是需要解密的密码，参数2是密钥
function aesDecrypt(encrypted, key) {
    // 把这个密码用aes192进行解密
    const decipher = crypto.createDecipher('aes192', key);
    //参数1要解密的内容
    //参数2 已加密内容的输出编码方式，
    //参数3   编码方式，
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    // 解密之后的值
    decrypted += decipher.final('utf8');
    return decrypted;
}
// 密码
var data = 'Hello, this is a secret message!';
// 密钥
var key = 'Password!';
// 加密
var encrypted = aesEncrypt(data, key);
// 解密
var decrypted = aesDecrypt(encrypted, key);
// 输出密码
console.log('Plain text: ' + data);
// 输出加密之后的文本
console.log('Encrypted text: ' + encrypted);
// 输出解密之后的文本
console.log('Decrypted text: ' + decrypted);

// DH----------------------------
// 创建一个 Diffie-Hellman 密钥交换(Diffie-Hellman key exchange)对象，
// 并根据给定的位长度生成一个质数。如果没有指定参数 generator，默认为 2。
var ming = crypto.createDiffieHellman(512);
// 产生一个密钥
var ming_keys = ming.generateKeys();
// 获取一个质数
var prime = ming.getPrime();

var generator = ming.getGenerator();

// 输出这个以16进制加密的质数
console.log('Prime: ' + prime.toString('hex'));
// 输出这个以16进制加密的素数
console.log('Generator: ' + generator.toString('hex'));

// xiaohong's keys:
var hong = crypto.createDiffieHellman(prime, generator);
var hong_keys = hong.generateKeys();

// exchange and generate secret:
// 交换小红和小明的密钥
var ming_secret = ming.computeSecret(hong_keys);
var hong_secret = hong.computeSecret(ming_keys);

// print secret:
// 输出小明的密码
console.log('Secret of Xiao Ming: ' + ming_secret.toString('hex'));
// 输出小红的密码
console.log('Secret of Xiao Hong: ' + hong_secret.toString('hex'));
# CA证书

## 安装工具
> 使用CloudFlare的PKI和TLS工具包cfssl来创建证书

### 安装cfssl工具集
cfssl工具集中包含很多工具

> cfssl：证书签发工具
```
go get github.com/cloudflare/cfssl/cmd/cfssl
```
> cfssljson：将cfssl生产的证书（json格式）变为文件承载式证书
```
go get github.com/cloudflare/cfssl/cmd/cfssljson
```
或者直接安装所有工具
```
go get github.com/cloudflare/cfssl/cmd/...
```
### 创建配置文件
> CA配置文件是用来配置根证书的使用场景（profile）和具体参数（usage、过期时间、服务端认证、客户端认证、加密等）
创建文件：ca-config.json
```json
{
    "signing": {
        "default": {
            "expiry": "87600h"
        },
        "profiles": {
            "iam": {
                "usages": [
                    "signing",
                    "key encipherment",
                    "server auth",
                    "client auth"
                ],
                "expiry": "876000h"
            }
        }
    }
}
```
- signing：表示该证书可用于签名其他证书（生成的ca.pem证书中的CA=TRUE）
- server auth：表示client可以用该证书对server提供的证书进行验证
- client auth：表示server可以用该证书对client提供的证书进行验证
- expiry：876000h，证书有效期设置为100年

### 创建证书签名请求文件
> 用来生成CA证书签名请求（CSR）的JSON配置文件

创建文件：ca-csr.json
```json
{
    "CN": "test-ca",
    "key": {
        "algo": "rsa",
        "size": 2048
    },
    "names": [
        {
            "C": "CN",
            "ST": "BeiJing",
            "L": "BeiJing",
            "O": "hexiaopi",
            "OU": "test"
        }
    ],
    "ca": {
        "expiry": "876000h"
    }
}
```
- C：Country，国家
- ST：State，省份
- L：Locality or City，城市
- CN：Common Name，浏览器使用该字段验证网站是否合法
- O：Organization，组织
- OU：Company Division，部门/单位

### 创建CA证书和私钥
```
cfssl gencert -initca ca-csr.json | cfssljson -bare ca
```
上述命令会创建运行CA所必须的文件`ca-key.pem`（私钥）和 `ca.pem`（证书），还会生成`ca.csr`(证书签名请求)，用于交叉签名或重新签名。
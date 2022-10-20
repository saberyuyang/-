进口 公理 从 "axios"
进口 {Md5} 从 "ts-md5"
进口 * A š dotenv 从 "dotenv"
进口 {存在同步, readFileSync} 从 "fs"
进口 {sendNotify} 从 './sendNotify'

dotenv.配置()

让 指纹: 线 | 数量, 代币: 线 = '', enCryptMethod: 任何

康斯特 USER_AGENTS: 数组<线> = [
  ＂jdapp；安卓；10.0.2；10；network／wifi；Mozilla／5.0（Linux；android 10；一加A5010 Build／QKQ 1.191014.012；wv）AppleWebKit／537.36（KHTML，像壁虎）版本／4.0 Chrome／77.0．3865.120 MQQBrowser／6.2 TBS／045230 Mobile Safari／537.36＂,
  ＂jdapp；苹果手机；10.0.2；14.3；network／4g；Mozilla／5.0（iPhone；CPU iPhone OS 14 _ 3像Mac OS X）AppleWebKit／605.1．15（KHTML，像壁虎）Mobile／15 e 148；supportJDSHWK／1＂,
  ＂jdapp；安卓；10.0.2；9；网络／4g；Mozilla／5.0（Linux；android 9；Mi Note 3 Build／PKQ1．181007.001；wv）AppleWebKit／537.36（KHTML，像壁虎）版本／4.0 Chrome／66.0．3359.126 MQQBrowser／6.2 TBS／045131 Mobile Safari／537.36＂,
  ＂jdapp；安卓；10.0.2；10；network／wifi；Mozilla／5.0（Linux；android 10；GM1910 Build／QKQ 1.190716.003；wv）AppleWebKit／537.36（KHTML，像壁虎）版本／4.0 Chrome／77.0．3865.120 MQQBrowser／6.2 TBS／045230 Mobile Safari／537.36＂,
  ＂jdapp；安卓；10.0.2；9；network／wifi；Mozilla／5.0（Linux；android 9；16T Build／PKQ1．190616.001；wv）AppleWebKit／537.36（KHTML，像壁虎）版本／4.0 Chrome／66.0．3359.126 MQQBrowser／6.2 TBS／044942 Mobile Safari／537.36＂,
  ＂jdapp；苹果手机；10.0.2；13.6；network／wifi；Mozilla／5.0（iPhone；CPU iPhone OS 13 _ 6像Mac OS X）AppleWebKit／605.1．15（KHTML，像壁虎）Mobile／15e 148；supportJDSHWK／1＂,
  ＂jdapp；苹果手机；10.0.2；13.6；network／wifi；Mozilla／5.0（iPhone；CPU iPhone OS 13 _ 6像Mac OS X）AppleWebKit／605.1．15（KHTML，像壁虎）Mobile／15e 148；supportJDSHWK／1＂,
  ＂jdapp；苹果手机；10.0.2；13.5；network／wifi；Mozilla／5.0（iPhone；CPU iPhone OS 13 _ 5像Mac OS X）AppleWebKit／605.1．15（KHTML，像壁虎）Mobile／15e 148；supportJDSHWK／1＂,
  ＂jdapp；苹果手机；10.0.2；14.1；network／wifi；Mozilla／5.0（iPhone；CPU iPhone OS 14 _ 1像Mac OS X）AppleWebKit／605.1．15（KHTML，像壁虎）Mobile／15e 148；supportJDSHWK／1＂,
  ＂jdapp；苹果手机；10.0.2；13.3；network／wifi；Mozilla／5.0（iPhone；CPU iPhone OS 13 _ 3像Mac OS X）AppleWebKit／605.1．15（KHTML，像壁虎）Mobile／15e 148；supportJDSHWK／1＂,
  ＂jdapp；苹果手机；10.0.2；13.7；network／wifi；Mozilla／5.0（iPhone；CPU iPhone OS 13 _ 7像Mac OS X）AppleWebKit／605.1．15（KHTML，像壁虎）Mobile／15e 148；supportJDSHWK／1＂,
  ＂jdapp；苹果手机；10.0.2；14.1；network／wifi；Mozilla／5.0（iPhone；CPU iPhone OS 14 _ 1像Mac OS X）AppleWebKit／605.1．15（KHTML，像壁虎）Mobile／15e 148；supportJDSHWK／1＂,
  ＂jdapp；苹果手机；10.0.2；13.3；network／wifi；Mozilla／5.0（iPhone；CPU iPhone OS 13 _ 3像Mac OS X）AppleWebKit／605.1．15（KHTML，像壁虎）Mobile／15e 148；supportJDSHWK／1＂,
  ＂jdapp；苹果手机；10.0.2；13.4；network／wifi；Mozilla／5.0（iPhone；CPU iPhone OS 13 _ 4像Mac OS X）AppleWebKit／605.1．15（KHTML，像壁虎）Mobile／15e 148；supportJDSHWK／1＂,
  ＂jdapp；苹果手机；10.0.2；14.3；network／wifi；Mozilla／5.0（iPhone；CPU iPhone OS 14 _ 3像Mac OS X）AppleWebKit／605.1．15（KHTML，像壁虎）Mobile／15e 148；supportJDSHWK／1＂,
  ＂jdapp；安卓；10.0.2；9；网络／wifi；Mozilla／5.0（Linux；android 9；MI 6 Build／PKQ1．190118.001；wv）AppleWebKit／537.36（KHTML，像壁虎）版本／4.0 Chrome／66.0．3359.126 MQQBrowser／6.2 TBS／044942 Mobile Safari／537.36＂,
  ＂jdapp；安卓；10.0.2；11；network／wifi；Mozilla／5.0（Linux；android 11；Redmi K30 5G Build／RKQ1．200826.002；wv）AppleWebKit／537.36（KHTML，像壁虎）版本／4.0 Chrome／77.0．3865.120 MQQBrowser／6.2 TBS／045511 Mobile Safari／537.36＂,
  “jdapp；苹果手机；10.0.2；11.4；network／wifi；Mozilla／5.0（iPhone；CPU iPhone OS 11 _ 4像Mac OS X）AppleWebKit／605.1．15（KHTML，像壁虎）Mobile／15f 79”,
  ＂jdapp；安卓；10.0.2；10；；网络／wifi；Mozilla／5.0（Linux；android 10；m2006j10 c build／QP1A．190711.020；wv）AppleWebKit／537.36（KHTML，像壁虎）版本／4.0 Chrome／77.0．3865.120 MQQBrowser／6.2 TBS／045230 Mobile Safari／537.36＂,
  ＂jdapp；安卓；10.0.2；10；network／wifi；Mozilla／5.0（Linux；android 10；m2006j10 c build／qp1 a．190711.020；wv）AppleWebKit／537.36（KHTML，像壁虎）版本／4.0 Chrome／77.0．3865.120 MQQBrowser／6.2 TBS／045230 Mobile Safari／537.36＂,
  ＂jdapp；安卓；10.0.2；10；network／wifi；Mozilla／5.0（Linux；android 10；一加A6000 Build／QKQ 1.190716.003；wv）AppleWebKit／537.36（KHTML，像壁虎）版本／4.0 Chrome／77.0．3865.120 MQQBrowser／6.2 TBS／045224 Mobile Safari／537.36＂,
  ＂jdapp；安卓；10.0.2；9；network／wifi；Mozilla／5.0（Linux；android 9；MHA－AL 00 build／huaweiMHA－AL 00；wv）AppleWebKit／537.36（KHTML，像壁虎）版本／4.0 Chrome／66.0．3359.126 MQQBrowser／6.2 TBS／044942 Mobile Safari／537.36＂,
  ＂jdapp；安卓；10.0.2；8．1.0；network／wifi；Mozilla／5.0（Linux；android 8．1.0；16 X Build／OPM1．171019.026；wv）AppleWebKit／537.36（KHTML，像壁虎）版本／4.0 Chrome／66.0．3359.126 mqbrowser／6.2 TBS／044942 Mobile Safari／537.36＂,
  ＂jdapp；安卓；10.0.2；8.0.0；network／wifi；Mozilla／5.0（Linux；android 8.0.0；HTC U－3w Build／OPR6．170623.013；wv）AppleWebKit／537.36（KHTML，像壁虎）版本／4.0 Chrome／66.0.3359.126 mqbrowser／6.2 TBS／044942 Mobile Safari／537.36＂,
  ＂jdapp；苹果手机；10.0.2；14.0.1；network／wifi；Mozilla／5.0（iPhone；CPU iPhone OS 14 _ 0 _ 1像Mac OS X）AppleWebKit／605.1．15（KHTML，像壁虎）Mobile／15 e 148；supportJDSHWK／1＂,
  ＂jdapp；安卓；10.0.2；10；network／wifi；Mozilla／5.0（Linux；android 10；LYA－al 00 build／huaweiLYA－al 00 l；wv）AppleWebKit／537.36（KHTML，像壁虎）版本／4.0 Chrome／77.0．3865.120 MQQBrowser／6.2 TBS／045230 Mobile Safari／537.36＂,
  ＂jdapp；苹果手机；10.0.2；14.2；network／wifi；Mozilla／5.0（iPhone；CPU iPhone OS 14 _ 2像Mac OS X）AppleWebKit／605.1．15（KHTML，像壁虎）Mobile／15e 148；supportJDSHWK／1＂,
  ＂jdapp；苹果手机；10.0.2；14.3；network／wifi；Mozilla／5.0（iPhone；CPU iPhone OS 14 _ 3像Mac OS X）AppleWebKit／605.1．15（KHTML，像壁虎）Mobile／15e 148；supportJDSHWK／1＂,
  ＂jdapp；苹果手机；10.0.2；14.2；network／wifi；Mozilla／5.0（iPhone；CPU iPhone OS 14 _ 2像Mac OS X）AppleWebKit／605.1．15（KHTML，像壁虎）Mobile／15e 148；supportJDSHWK／1＂,
  ＂jdapp；安卓；10.0.2；8．1.0；网络／wifi；Mozilla／5.0（Linux；android 8．1.0；MI 8 Build／OPM1．171019.026；wv）AppleWebKit／537.36（KHTML，像壁虎）版本／4.0 Chrome／66.0．3359.126 MQQBrowser／6.2 TBS／045131 Mobile Safari／537.36＂,
  ＂jdapp；安卓；10.0.2；10；network／wifi；Mozilla／5.0（Linux；android 10；Redmi K20 Pro Premium Edition Build／QKQ 1.190825.002；wv）AppleWebKit／537.36（KHTML，像壁虎）版本／4.0 Chrome／77.0．3865.120 MQQBrowser／6.2 TBS／045227 Mobile Safari／537.36＂,
  ＂jdapp；苹果手机；10.0.2；14.3；network／wifi；Mozilla／5.0（iPhone；CPU iPhone OS 14 _ 3像Mac OS X）AppleWebKit／605.1．15（KHTML，像壁虎）Mobile／15e 148；supportJDSHWK／1＂,
  ＂jdapp；苹果手机；10.0.2；14.3；network／4g；Mozilla／5.0（iPhone；CPU iPhone OS 14 _ 3像Mac OS X）AppleWebKit／605.1．15（KHTML，像壁虎）Mobile／15 e 148；supportJDSHWK／1＂,
  ＂jdapp；安卓；10.0.2；11；network／wifi；Mozilla／5.0（Linux；android 11；Redmi K20 Pro Premium Edition Build／RKQ 1．200826.002；wv）AppleWebKit／537.36（KHTML，像壁虎）版本／4.0 Chrome／77.0．3865.120 MQQBrowser／6.2 TBS／045513 Mobile Safari／537.36＂,
  ＂jdapp；安卓；10.0.2；10；网络／wifi；Mozilla／5.0（Linux；android 10；MI 8 Build／QKQ1．190828．002；wv）AppleWebKit／537.36（KHTML，像壁虎）版本／4.0 Chrome／77.0．3865.120 MQQBrowser／6.2 TBS／045227 Mobile Safari／537.36＂,
  ＂jdapp；苹果手机；10.0.2；14.1；network／wifi；Mozilla／5.0（iPhone；CPU iPhone OS 14 _ 1像Mac OS X）AppleWebKit／605.1．15（KHTML，像壁虎）Mobile／15e 148；supportJDSHWK／1＂,
]

功能 TotalBean(曲奇: 线) {
  返回 {
    曲奇: 曲奇,
    isLogin: 真正的,
    诨名: ''
  }
}

功能 getRandomNumberByRange(开始: 数量, 结束: 数量) {
  结束 <= 开始 && (结束 = 开始 + 100)
  返回 数学.地板(数学.随机的() * (结束 - 开始) + 开始)
}

让 USER_AGENT = USER_AGENTS[getRandomNumberByRange(0, USER_AGENTS.长度)]

异步 功能 getbeansharecde(曲奇: 线) {
  让 {数据}: 任何 = 等待 公理.发布('https://api.m.jd.com/client.action',
    `functionId=plantBeanIndex&body=${encodeURIComponent(
      JSON.stringify({版本: "9.0.0.1", "monitor_source": "plant_app_plant_index", "monitor_refer": ""})
    )}&appid=ld&client=apple&area=5_274_49707_49973&build=167283&clientVersion=9.1.0`, {
      标题: {
        曲奇: 曲奇,
        主人: "api.m.jd.com",
        接受: "*/*",
        连接: "keep-alive",
        "User-Agent": USER_AGENT
      }
    })
  如果 (数据.数据?.jwordShareInfo?.shareUrl)
    返回 数据.数据.jwordShareInfo.shareUrl.分割('Uuid=')![1]
  其他的
    返回 ''
}

异步 功能 getFarmShareCode(曲奇: 线) {
  让 {数据}: 任何 = 等待 公理.发布('https://api.m.jd.com/client.action?functionId=initForFarm', `body=${encodeURIComponent(JSON.stringify({"version": 4}))}&appid=wh5&clientVersion=9.1.0`, {
    标题: {
      "cookie": 曲奇,
      "origin": "https://home.m.jd.com",
      "referer": "https://home.m.jd.com/myJd/newhome.action",
      "User-Agent": USER_AGENT,
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })

  如果 (数据.farmUserPro)
    返回 数据.farmUserPro.shareCode
  其他的
    返回 ''
}

异步 功能 要求(检查: 布尔逻辑体系的 = 虚假的): 承诺<线[]> {
  让 cookiesArr: 线[] = []
  康斯特 jdCookieNode = 需要('../jdCookie.js')
  让 键: 线[] = 对象.键(jdCookieNode)
  为 (让 我 = 0; 我 < 键.长度; 我++) {
    让 曲奇 = jdCookieNode[键[我]]
    如果 (!检查) {
      cookiesArr.推(曲奇)
    } 其他的 {
      如果 (等待 checkCookie(曲奇)) {
        cookiesArr.推(曲奇)
      } 其他的 {
        让 用户名 = 脱尿剂(jdCookieNode[键[我]].比赛(/pt_pin=([^;]*)/)![1])
        控制台.日志('Cookie失效', 用户名)
        等待 sendNotify('Cookie失效', '【京东账号】' + 用户名)
      }
    }
  }
  控制台.日志(`共${cookiesArr.长度}个京东账号\n`)
  返回 cookiesArr
}

异步 功能 checkCookie(曲奇) {
  等待 等待(1000)
  尝试 {
    让 {数据}: 任何 = 等待 公理.得到(`https://api.m.jd.com/client.action?functionId=GetJDUserInfoUnion&appid=jd-cphdeveloper-m&body=${encodeURIComponent(JSON.stringify({"orgFlag": "JD_PinGou_New", "callSource": "mainorder", "channel": 4, "isHomewhite": 0, "sceneval": 2}))}&loginType=2&_=${日期.现在()}&sceneval=2&g_login_type=1&callback=GetJDUserInfoUnion&g_ty=ls`, {
      标题: {
        'authority': 'api.m.jd.com',
        'user-agent': ' Mozilla／5.0（苹果手机；CPU iPhone OS 10 _ 3 _ 1像Mac OS X）AppleWebKit／603.1．30（KHTML，像壁虎）版本／10.0 Mobile／14e 304 safari／602.1 ',
        'referer': 'https://home.m.jd.com/',
        'cookie': 曲奇
      }
    })
    数据 = JSON.作句法分析(数据.比赛(/getjduserinfunion\((.*)\)/)[1])
    返回 数据.retcode === '0';
  } 抓住 (E) {
    返回 虚假的
  }
}

功能 等待(超时: 数量) {
  返回 新的 承诺(解决 => {
    setTimeout(解决, 超时)
  })
}

异步 功能 requestAlgo(appId: number = 10032) {
  fingerprint = generateFp()
  return new Promise<void>(async resolve => {
    let {data}: any = await axios.post('https://cactus.jd.com/request_algo?g_ty=ajax', {
      "version": "1.0",
      "fp": fingerprint,
      "appId": appId,
      "timestamp": Date.now(),
      "platform": "web",
      "expandParams": ""
    }, {
      "headers": {
        'Authority': 'cactus.jd.com',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'Accept': 'application/json',
        'User-Agent': USER_AGENT,
        'Content-Type': 'application/json',
        'Origin': 'https://st.jingxi.com',
        'Sec-Fetch-Site': 'cross-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://st.jingxi.com/',
        'Accept-Language': 'zh-CN,zh;q=0.9,zh-TW;q=0.8,en;q=0.7'
      },
    })
    if (data['status'] === 200) {
      token = data.data.result.tk
      let enCryptMethodJDString = data.data.result.algo
      if (enCryptMethodJDString) enCryptMethodJD = new Function(`return ${enCryptMethodJDString}`)()
    } else {
      console.log(`fp: ${fingerprint}`)
      console.log('request_algo 签名参数API请求失败:')
    }
    resolve()
  })
}

function generateFp() {
  let e = "0123456789"
  let a = 13
  let i = ''
  for (; a--;)
    i += e[Math.random() * e.length | 0]
  return (i + Date.now()).slice(0, 16)
}

function getJxToken(cookie: string, phoneId: string = '') {
  function generateStr(input: number) {
    let src = 'abcdefghijklmnopqrstuvwxyz1234567890'
    let res = ''
    for (let i = 0; i < input; i++) {
      res += src[Math.floor(src.length * Math.random())]
    }
    return res
  }

  if (!phoneId)
    phoneId = generateStr(40)
  let timestamp = Date.now().toString()
  let nickname = cookie.match(/pt_pin=([^;]*)/)![1]
  let jstoken = Md5.hashStr('' + decodeURIComponent(nickname) + timestamp + phoneId + 'tPOamqCuk9NLgVPAljUyIHcPRmKlVxDy')
  return {
    'strPgtimestamp': timestamp,
    'strPhoneID': phoneId,
    'strPgUUNum': jstoken
  }
}

function exceptCookie(filename: string = 'x.ts') {
  let except: any = []
  if (existsSync('./utils/exceptCookie.json')) {
    try {
      except = JSON.parse(readFileSync('./utils/exceptCookie.json').toString() || '{}')[filename] || []
    } catch (e) {
      console.log('./utils/exceptCookie.json JSON格式错误')
    }
  }
  return except
}

function randomString(e: number, word?: number) {
  e = e || 32
  let t = word === 26 ? "012345678abcdefghijklmnopqrstuvwxyz" : "0123456789abcdef", a = t.length, n = ""
  for (let i = 0; i < e; i++)
    n += t.charAt(Math.floor(Math.random() * a))
  return n
}

function o2s(arr: object, title: string = '') {
  title ? console.log(title, JSON.stringify(arr)) : console.log(JSON.stringify(arr))
}

function randomNumString(e: number) {
  e = e || 32
  let t = '0123456789', a = t.length, n = ""
  for (let i = 0; i < e; i++)
    n += t.charAt(Math.floor(Math.random() * a))
  return n
}

function randomWord(n: number = 1) {
  let t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', a = t.length
  let rnd: string = ''
  for (let i = 0; i < n; i++) {
    rnd += t.charAt(Math.floor(Math.random() * a))
  }
  return rnd
}

function obj2str(obj: object) {
  return JSON.stringify(obj)
}

async function getDevice() {
  let {data} = await axios.get('https://betahub.cn/api/apple/devices/iPhone', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
    }
  })
  data = data[getRandomNumberByRange(0, 16)]
  return data.identifier
}

async function getVersion(device: string) {
  let {data} = await axios.get(`https://betahub.cn/api/apple/firmwares/${device}`, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
    }
  })
  data = data[getRandomNumberByRange(0, data.length)]
  return data.firmware_info.version
}

async function jdpingou() {
  let device: string, version: string;
  device = await getDevice();
  version = await getVersion(device);
  return `jdpingou;iPhone;5.19.0;${version};${randomString(40)};network/wifi;model/${device};appBuild/100833;ADID/;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/${getRandomNumberByRange(10, 90)};pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148`
}

function get(url: string, headers?: any): Promise<any> {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      headers: headers
    }).then(res => {
      if (typeof res.data === 'string' && res.data.includes('jsonpCBK')) {
        resolve(JSON.parse(res.data.match(/jsonpCBK.?\(([\w\W]*)\);?/)[1]))
      } else {
        resolve(res.data)
      }
    }).catch(err => {
      reject({
        code: err?.response?.status || -1,
        msg: err?.response?.statusText || err.message || 'error'
      })
    })
  })
}

function post(url: string, prarms?: string | object, headers?: any): Promise<any> {
  return new Promise((resolve, reject) => {
    axios.post(url, prarms, {
      headers: headers
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject({
        code: err?.response?.status || -1,
        msg: err?.response?.statusText || err.message || 'error'
      })
    })
  })
}

export default USER_AGENT
export {
  TotalBean,
  getBeanShareCode,
  getFarmShareCode,
  requireConfig,
  wait,
  getRandomNumberByRange,
  requestAlgo,
  getJxToken,
  randomString,
  o2s,
  randomNumString,
  getShareCodePool,
  randomWord,
  obj2str,
  jdpingou,
  get,
  post
}
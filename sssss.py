import json

import requests

url ="https://api5-normal-lf.toutiaoapi.com/luckycat/news/v1/task/done/excitation_ad/?" \
         "device_platform=android&" \
     "os=android&" \
     "ssmix=a&" \
     "_rticket=1655734387000&" \
         "cdid=2d3e96ed-36a8-426b-ba6c-b9cfad3e8d65&channel&" \
         "aid=13&" \
     "app_name=news_article&" \
     "version_code=884&" \
     "version_name=8.8.4&" \
     "manifest_version_code=8840&" \
         "update_version_code=88407&" \
         "ab_version=1859936%2C668779%2C4174800%2C668774%2C4174794%2C4293112%2C660830%2C4174803%2C4268623%2C668775%2C4174805%2C4187290%2C4244389%2C4245652%2C662099%2C4174747%2C668776%2C4174795%2C662176%2C4174787%2C4298471%2C3540005%2C3596064&" \
         "ab_feature=94563%2C102749&" \
         "resolution=1080*1920&dpi=480&" \
     "device_type=MI+6&" \
         "device_brand=Xiaomi&" \
     "language=zh&" \
     "os_api=28&" \
     "os_version=9&" \
         "ac=wifi&" \
     "dq_param=1&" \
     "plugin=0&" \
         "client_vid=4204195%2C3194524%2C3406951%2C3691472%2C3383553%2C4159518%2C2827920" \
         "&isTTWebView=0&" \
         "session_id="+str('ef6afd34-6808-44d1-9e16-b3e8bb00bb43')+"&host_abi=arm64-v8a&tma_jssdk_version=2.53.0&rom_version=miui_v10_9.9.3&iid=1500193498339031&" \
                                         "device_id="+str(3593663558996558)+"&" \
        "luckydog_base=gUj34BryF2zyOxCxd7LB4byR1zn9YiidJWbmC3XwiGYxPF8lDvueO6b5crnyIFzKmgX8dhmRg3BHy3xhSQvkFe_ySP4eeBRbfzftRyTd70RQwDXNSrDXOvCZOXQDgEluau74kEpQD261zmIj2Z4JFciitnEwt8_M_DolsWjHH9A&" \
         "luckydog_data=1Tr9hF0L3NASNugph3cBLB6dOjOANSrVbWTe433bX6UwG3aJCtvJL23QCraUflHDAgSCrMK4IgsPCvULBx2e3Q&" \
          "luckydog_token=FccFZSOgSwSb6J_4rrnABMVmqPzBQ41Bx2XE4y981VdlD5ANtlgZpufeLGUNsW5R&" \
       "luckydog_sdk_version=5.0.1-rc.11&luckydog_settings_version=15&luckycat_version_name=5.0.1-rc.24&luckycat_version_code=501024&status_bar_height=24"
data='{"ad_id":11,"amount":1277,"ad_rit":11,"track_id":"","task_key":"excitation_ad\/","task_id":'+str(188)+',"ad_alias_position":"task","ad_from":"coin","score_source":1,"coin_count":1277}'

headers = {
    'Accept-Encoding': 'gzip,deflate',
    'Cookie': 'odin_tt=c7bf9ce19b51d0b6e5b148e1052596739812265c06e7c969cbcfd76b53cd6f88ca7c63d8b59c295617306396888efe51ad745f0c8e2bd8e041a3b5b81da8fffba6a80e670af0935ee3a4470870bec14b;uid_tt=59bc36a5ad2cfccbcdd9fa5a2619d75c;uid_tt_ss=59bc36a5ad2cfccbcdd9fa5a2619d75c;sid_guard=089395619e1adcafec407b5ca0e1b7ad%7C1655733042%7C5172831%7CFri%2C+19-Aug-2022+10%3A44%3A33+GMT;sid_tt=089395619e1adcafec407b5ca0e1b7ad;sessionid=089395619e1adcafec407b5ca0e1b7ad;sessionid_ss=089395619e1adcafec407b5ca0e1b7ad;passport_csrf_token=a259262b983f2ac3a3eb36c651af9437;passport_csrf_token_default=a259262b983f2ac3a3eb36c651af9437;msToken=m-uIQxUdFRHLRLaIZy27rg-T4nhE9KN5jGDXsnSZoRgyDE9_AUVJgxk7uY_lPWljVNYaCKapviDEUmp28-a5Z2hePZilrvghsbaQOC1K3t4=',
    'Connection': 'keep-alive',
    'Accept': '*/*',
    'Accept-Language': 'en-us',
    "User-Agent": "com.ss.android.article.news/8840 (Linux; U; Android 9; zh_CN; MI 6; Build/PKQ1.190118.001; Cronet/TTNetVersion:ff367453 2022-05-16 QuicVersion:b314d107 2021-11-24)",
}

r = json.loads(requests.post(url=url ,data=data, headers=headers).text)

print(r["data"]["reward_amount"])
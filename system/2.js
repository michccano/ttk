const fetch = require('node-fetch');



fetch("https://t.tiktok.com/api/commit/follow/user/?aid=1988&app_name=tiktok_web&device_platform=web_pc&referer=https:%2F%2Fwww.tiktok.com%2Fupload%2F%3Flang%3Den%26loginType%3DaccountPassword&user_agent=Mozilla%2F5.0+(Windows+NT+10.0%3B+Win64%3B+x64)+AppleWebKit%2F537.36+(KHTML,+like+Gecko)+Chrome%2F86.0.4240.111+Safari%2F537.36&cookie_enabled=true&screen_width=1366&screen_height=768&browser_language=en-US&browser_platform=Win32&browser_name=Mozilla&browser_version=5.0+(Windows+NT+10.0%3B+Win64%3B+x64)+AppleWebKit%2F537.36+(KHTML,+like+Gecko)+Chrome%2F86.0.4240.111+Safari%2F537.36&browser_online=true&ac=4g&timezone_name=Asia%2FSingapore&page_referer=https:%2F%2Fwww.tiktok.com%2F@dash.bee%3Flang%3Den&priority_region=&verifyFp=verify_kh3i0uul_yBejVygR_efId_4E8B_AReH_tdJZajLRtnP7&appId=1180&region=PH&appType=t&isAndroid=false&isMobile=false&isIOS=false&OS=windows&did=6890154851839116801&device_id=6890154851839116801&type=1&user_id=6570555540790542338&from=18&channel_id=0&from_pre=0&app_language=en&current_region=PH&fromWeb=1&_signature=_02B4Z6wo00101Y6KMZwAAICByGs7SR41P2WOizUAADwF38", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9,es;q=0.8",
    "content-type": "application/x-www-form-urlencoded",
    "htc6j8njvn-a": "CtUrjo0J1uh7U1U60lMhyQ8cH7XpZgluj4rS5SbYMp7RlVT9Lr98P6-uTX2=52yCn3NEwMrUrctR61eZLr31bsXn85ykFoPDshoJ2sbyYI7bEv3qRxBX3pzzvcdd6E9JwXKlR2SGrEqI8Gl7uCdAD1m14gQAhsEiQBqieIwG5VsQS7lJuEBl1rec=w1keP69=lGwapei6KgSivlH5-sRrF23Ckhc41gz9ITWSI98evPy2gllqPKCOQYhupsjCZKCXyVGnY6L95RpypkZXC9d0EhD5SJuiUQJFHYr-QjsZpK-1aSEqm=PtXTmlz9w=-W7JXvTOtef8LKIMFXG7rzwlEsNG4ZHNQpVE9qeYu3nK8xnl4b3UYiu4O4ovWBZphFb2u95PVSyZKEbC5Vlg0iBmk6EqKrLQLiHIScX-cfcncDP43Rooxi71D5DAsiWCkmZyCrBM9wsMbGOLyEwYJpqiPDOVgzUkcsujWnn107ydl8SJaEsl8XXs8U9uGJNt-EpI=AIkL6SDPNbCcCGVvyJmSa0aOrH3M4UliVxcHFDeKLEkmkDU18z8nl9k=D2WfPS1HbJC5wGq4cwcLr4HPwuvPpkcTFj0JFoT6uyAOXDEoNAO9S=EjDAGX-ZZYPn9G2gyJwq=je5i9jcpIrW-e5wkg-CnHZ-ZVZ5T4mtjdymxjWZxDsUx9VcaudxCfEpKoke5O7N=ZbGtqj7SG7RflGa3pk4qdwI3bjdmlFnChy4LRnp5fpGaR6M3=LvXXgTg1EfcGhjgHsIAr88-Th1xgv1h2bCMx2cyPhQKLp95h3s9rkZ4dUNfZIQvVHezVmdLkVXELLutWToqJGvpPygqW7aROGJ8a5fCCS-jIds0FqjT3=6pbpXILMlPG3tCesQ-k5u8IdOnFWrbZ5CROModBNiuVChGEanTYwVEOpHkwJD75JJqWcjYslau6hQ1MCJeUQj77MTwxcfjIBVr5HldCPdbyZGJbuLhpdeyXrKCReTtDwBkRJwc4rg2zsON868OYB1Tyfrmq4cqxt8idH5kVWZeqHUSlC3QXnrm=1QmoAgdCOEUlJmrOyXDT1ygD7NwzhqcTcAsMz3bAhqRN3K6T5mw8iWIIRO8TEe94aV9Wz0-oOFcmGoriBVgf2zt48Lt0Xhe8jNaShR7XYM8aI5yG78BXK=a=FumCe3Zt7Aph2oFh2jrJ1ryarOkTNzIl2gaKnydOKA5xdVFJyRl1TRZZQ7kmskqysMxUnZd-gDguOlDbtLEknqo6=kcDCJLfG6KEaGfB4Mhjn=QANhdKyD9wgVAlTHHo5YPA0We7qyWVD8=9dbJzV1xhqzLCaQhZOowsZMi6gElkWLbVJxXb18LPuMwuudv0fjq10SAAi70AtiKpKYc-cN0A2ET5s3Z4SoeDtCOOWuxbTmI3RkVB0CUZYZa-7vxjD95ww1R5me-0nhCgHcVi7472U-6Yl18RtiNTxwICXBD-P7RDPQ=o-4KJWbYzloO1kRcyhHHTjeawEi8OGilwuYzvq87FQkhv-SmjZUdfm9peILxbAqIa1adkqzvWXPUVhqidUMqkiWWCEIOOgy6xeKDZWg8EEe3c=jB=WUqjrrToSVRVxUgZorodXEGMFT6OchUT7yg3tZYeUd7tM3NFtj=gx3nGcPE2vPLhwdjdvnU-weio4v-eW3NGKzMdoavwLt9uNnPPYkPn=Sy9HgTuNeuI0=iF2meRUI7b8uuoxkkWPnIfIueBz1oaYM0UeNfNF6WHiD0l24lE-kjwmuqQ2anqMyaFg2StBj-vjtluUBv7e=od-kDBHrl7pEpVetOyYgj5pkzaXDf0CSIzT-tyr6RI5gXzyqEGde8m6oolnq2PQrPAUL5QybRan-QlX-yiJ4nhr0gfPJUrGzOa2q13gzcHGtya2OeK1H0x6g2XrXnRPmehpCU3q3eH-W8OpCWdFKhaHfBu4EAyhbgmyvbrGxgTJQ5xUbHfH6=k6J-Wb0-bqOqVIPREugs4qovAEjl8ycLYddRVUqwgjnl0GC2Tn60VepzzDhtMHoesUrz6apjxg5rTBYeuV-8LHLe-J9RBZf0y0oZurks5vNZjRHl8XW1W8Dffcrd-NnlelLgK2QnFrVctMQ4=gPr-0W3uE=eFtL11i1Zj3IlDvrDmbTTH4RO1JA3=f=w4B-8KHJr42GTBRpdWpsxEeOOfliHvJz74lmadbVit5eKenrX-8baO7n4Lnazj9xV9nprfc4PZgKLfaQqQ7tOrU-jJd8Dl6boOSaI=syLHzfIQ3uAYHugThqDsoCvEm49wazpYt1AArrkVB7gHLws9ebtpxbngvcXoSkbYQMFsyBnxO==UKNnEH4XKOsCGea6jnSBgWp3YidZiVfX9O2dHRYP=9iycOr6G4=hwD5khpPKEkR87B5bXA4kMGYT0zlTS9OCvGPtCbFhq=lThg8aJ1U85oxfgFvGyB4dcJHlbMiahSObvDKyGiOcPwTCQernxpAUVS8VICUDwvn6mc=y1qXT6ksxRQTmHTCTikKeEy3UveBmzKpUOi7TxOIyhnN8aJiPC3guLyQzgDppHMOvGN85QcTFGc9T8JHaliBO3jdS5piiKDf=t67OV0lwyFG5OuSPFPU4ldbZKyl3=N5WLGR7gnCAZvc9iqfJEue7HiRbK1nQ1D0uqJSDil231pgC-jBdf4d=KrxkN70b8xPToAVkOqCXWmro4S-rYx-En3KvFDYKhPzkNimg7HInG-eVlqOKvlIj2G5XABQmowX5SOhrNpmO7tNvJO6JL8Q3ff3zKlTb7TF5RDsSswpFS83OvNQ06Y0LcmwiW==eaoXr5k-5Ti5-b2Ivxf9pJd1XX8mDj4QuUURLHb08FbLPcRpHTMV7D=A7Ihwm5m8RbI8qpOHNTwTMkyBYQaPZIPqmC88MUCXgdJPmK7gzckf8b=ufwo7DFVAOB79poIkJVc3wC9ltTvzt=KoBnFYbweIfCbAAVUsDVrw-eqe0cZlQOdvN9h8iJ=56QZbuTvHPSjA-IHm8Gk6gaWTOafNHAOpnCiXdebM4Jlgf883pdZfnvgm3-Ukiz1oBa4JJqPAHaJMZyg1b=jiX5CRTRY72KmzCeC30Xk4fFQox6iwXQSsfmCXmOymVRGa=azKPmXDturKjnh3mj6r8iU8r3hRAOnrtrca2jtmgJy8Jy=g-ECYLKAE8GoKTvgfJW-iLQsHzOFOdvm4IwahkLImveCiX19pOvkZ800UPH47pD=eBZgAaum7TY=-GXAmPGhc8jyos1shk=RLGLJE76UYiF-wIIrp7xxUKVVUx9FRJrqX4e8WGCwkcJNue4FM0KwQCfZFzuqF32qKwB6EDtw=ts9AVwphMK-cnQYETH-tEbZw2twe58G5PsfiHApp8nPvBbIclPFKvLN7HjmFcxlEYOb5tkFwNnu1hcaDu6JI2oWKtUiseY8XVWHpRVE0hkMqZVIk8z6iyeK5s6Srh8yI4--p2iukpfDwvoaaAHh9OhVBVLQjU7aVzen1ifjOPt5PFaO5htLYEgpymKeAnkVBEd9pCDW1FJ4w7FOOW7LFxCRcNa6QRBZE4dDPRWFTkuNl1s7Ki8O5LB60mcdYneSTf2ik9kQrfIIxzGJgNG1Sa3l2CkUnIGz-r9qsauBLrL-AUboSb9khS-keZgUT828WxOXTJJ5Akg4Ja5kCPsCGhuKHXSyXjC4ZrCLXx-WhAzYzj6CYZEcMqaVWWlZKi0m6cUEawI1zJCCVKsnz1923uUVW4Z7hCyWb-0PSGo5R=oedjiNO4=mackev9voWQlZRrPQ38wbxf7hjEKGxf2UPq=mAvR1=rTm4F6m0BitjK-DgrHOti4VYk10KqtZlb6vDKSv1lVtyWQgC7TOHZrU9SAVvUaBT6SPOSPJqFeej2kVe3jt2P4NN7SDK61mFHjEc0gyMDBJviqJdDNobjyd6mU7pM6j96vMbCv4Fimmz4S8M7J9PDAhq0-I0-bocjHD=mpF1SoND4aAwwbr35Llz4-Wllh88RQ6SkEFxe6bhVoaDAdepo5WGyy3dFK4bZaOlMSHy6l8doOUApALQtfiREjvhAdcUhVade6pyPx0KeefdSaQI0=DZmQ8b0XUCfS2zI6OKtA4uGULqEPbjvcCDBg9z62au-vKLAhkni-KSzjUCblqZGHHnBb1LkLwcLe6z4JV7GqpJn2bamyWhTimoJNbhdqo7-kFaQPVo9JRPCFh-HWsxvLMELx8mOw-CDcV0Rrd260Qr1xZGlDrFRR1VIQyREOCXdnsDv4A6iEOTX2muri4ETvkNySKm2r4mMzVOx1iSll80Feo9FmMoh8jzEgF6F3BTCosroKSHL4xSVSxXEUDWYGCJIjgREuNeGhtfsM4nGTiNM-KOqI2yqsiJgrOsQFNjwD9NHkAUf=uId=cW-F4U8cuImaKGhEwyD7C6LDWkPxSSl6HPdDIMBi3mwiVsZtePH7RivES0Hlp2jNKoq=qXfGKusbt0tDfL4Igo8=nJWuGx4r9zkH=KkSGZlBTMjc=f0ibZjPRyAMT91hcgGIoMA6H1Bz39p9cnEvOJi9FKHInXXngy3W-nXupwGEG9hWo0o5kf8RSS8ezCA9jj6LWWf=qSc2XQinQ-k2x5q1HeZNdVtMvfanK8EWD-2F5OuD5QXklsuQHsDNnxT4fXBHMmS4Pv3m22Nos28b3gFZyAxvUKdvK9zkv0ylS43ramBudCI1EIbqm2rY2xrx02OI7j3Jn4LqmbD9H0caBztcs99QMbz6W8MG5s3zgeSRSahz6hPVyGX8GoIqq-ivLL0HWFnPye7=hVV2d9di3-JK8S0XqvXIFjHawXyzF8OK14AH7ZoSP6NUI-6OW9Q=8PlEkWPo-RtuAw==ens0lS-2-9G-dvdP6Q6pm=--G2B-NeoiAuYfU9EQqD0n=ojXqdbD0ls7yilApRAbl09VF=oHROLIQ-zrYN5D2IQ4pNOSQCyCg8TmCTPpzevlRfdppoaHMC8Qi8tx2lh7=TS1f9z6Y0D7U9O02ohxC6OdKLflJT41maYJcObLPqlUnayPa2NG2TJLirujeR2akSnCi-TtX575EY6U0B-QFOy3Y9qpQypZjTmDTIFDkYcH1VCi-vPH0JhRfqRqI7hmCckftb1zOYLBSBMJWu79mms5FLhwHBY2-e3dUStzzjZC28F2UmrH2m4QFHArCBipxE8UTiJMKo6iJA=GLlWQm-dN7bL17HyLwxgpduUtRJ2MBp3-S3hG50tMoNugYWg7gf-vq632yvu1i8Gy6FZYxzD10BH3tAhT9fJoh843oZqorosul9K65QvbD-IgsWDVb3kAytLLYm7qMgv-b=NKfoTeJvNiLTmg0rXS4RPss5bd1S=aTmj5CtjMq49hcYj9Ewq8Jt0EQ4btz=7AaxN9FFWO3=8LgB9BXyoZdw0bPmFwCJvhdFdIChTWgRf0WyEmpnHyQUBklLZL0NPsyj9s7hMH0=hsozvl7Ho6QTGHahvrQbHEAVpNtH2BPCmC3nt0xNjS03ASZ2rxoxhIns6eF=zbrKEXHCn6JOvlGXggG9UU0ELLDbolNgrYlXZZamcn-KSfMdXzmE0FJdlvvC2EIsDorCXByznRD9u6xKEb1",
    "htc6j8njvn-b": "-s6ycae",
    "htc6j8njvn-c": "AECZYph1AQAAX3KIEObnuvbZkGmuM1rGbtpHw9GrkhPYlghZe62ze8FfBSlZ",
    "htc6j8njvn-d": "AAaihIjBDKGNgUGASZAQhISy1EKts3vBXwUpWf_____dWkCBAJW2VLQosoWSErOcRoc6has",
    "htc6j8njvn-f": "A6u9e5h1AQAAGVTQhJs411v1zaWHBgiAOwpTE5UDlcqvTgm6A5l5sDgzaTzuAXgdadWucgA7wH8AAEB3AAAAAA==",
    "htc6j8njvn-z": "q",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "tt-csrf-token": "h2HTWCvYD4l7bqzxKFm_i01c",
    "cookie": "tt_webid_v2=6890154851839116801; tt_webid=6890154851839116801; ttwid=1%7C2q1e1Gy-iOEa6Cv58V0KAgD5vqX5Fp6Q0pRPqgV2rWk%7C1604390974%7C536f2f4367adc161d801e34bc05ffeef75e4f69ea7e15641214a86b64da81638; passport_csrf_token=ec3195562f8e1a15719b0a1844e4609a; store-idc=alisg; store-country-code=ph; tt_csrf_token=h2HTWCvYD4l7bqzxKFm_i01c; odin_tt=467316f1590d7a376513148c70dedafb3f0be744c8e519d7236f867c762bbe489dc7f52e6188378120e71b4b53b42342319dfb6713d4bbb9823606f378945639; sid_guard=dd6839f7b4d7d405a47e564a57f4544b%7C1604580996%7C5184000%7CMon%2C+04-Jan-2021+12%3A56%3A36+GMT; uid_tt=bba863619ab0b8408fdaf113183bd4ffe9ca69b7da59ccc015bfb261db75ee82; uid_tt_ss=bba863619ab0b8408fdaf113183bd4ffe9ca69b7da59ccc015bfb261db75ee82; sid_tt=dd6839f7b4d7d405a47e564a57f4544b; sessionid=dd6839f7b4d7d405a47e564a57f4544b; sessionid_ss=dd6839f7b4d7d405a47e564a57f4544b"
  },
  "referrer": "https://www.tiktok.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "POST",
  "mode": "cors"
}).then(res => res.text())
.then(body => console.log(body));



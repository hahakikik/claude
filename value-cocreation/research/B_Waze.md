# B. Waze (Google) — 도로 제보 + Conversational Reporting

> 조사 메모: blog.google, macrumors, techradar 등 원문 페이지는 네트워크 차단(EGRESS_BLOCKED)으로 직접 열람하지 못했고, 검색 결과 요약문(스니펫)에 근거해 작성함. 따라서 아래 모든 항목은 "검색 결과 요약 기준"이며, 과제 제출 전 원문 재확인 권장.

## 1. 개요
- Waze는 운전자가 도로 상황(정체, 사고, 공사, 단속 등)을 직접 제보해 실시간 지도에 반영하는 크라우드소싱 내비게이션 앱이며 Google 소유임. (https://www.technologyreview.com/s/422583/social-surveillance-yields-smarter-directions/ — 크라우드소싱 개념 기사, 세부 내용 미확인)
- 커뮤니티 규모: 월간 활성 사용자 약 1억 9천만 명, 월간 활성 자원봉사 지도 편집자 약 3만 명이라는 검색 결과 요약이 있음. 다만 출처 페이지(Waze 커뮤니티 포럼 등)에서 직접 확인하지 못함 (미확인). (https://www.waze.com/discuss/t/community/377030)
- 2025년 말 월간 활성 약 1.5억 명, 월 1억 건 이상 제보, 하루 약 2천만 건 제보라는 수치는 2차 비즈니스 분석 사이트 요약에서만 확인됨 (미확인, 인용 비권장). (https://businessmodelcanvastemplate.com/blogs/target-market/waze-target-market)

## 2. 서비스 내용
- 실시간 교통 기반 길안내, 운전자 제보 지도, 지도 편집 커뮤니티(Waze map editors)로 구성. 편집자는 1~6단계 권한을 가지며 도로, 장소명, 주유소·상점 등을 편집함. (https://mobilesyrup.com/2020/02/20/a-closer-look-at-how-waze-develops-its-maps/ 및 위 forum 링크 요약 기준)
- 2026년 7월 Gemini 기반 목적지 검색, 오토바이 모드, 개인화 내비게이션 등이 포함된 업데이트가 보도됨. (https://www.macrumors.com/2026/07/13/five-new-waze-features-rolling-out/ , https://www.techwyse.com/news/platform-updates/waze-gemini-ai-features-motorcycle-mode-personalized-navigation-2026 — 본문 미열람)

## 3. 소비자 제보 구조
- 운전자는 앱의 제보 버튼으로 정체, 사고, 도로 위 물체, 공사, 단속 등을 보고함. (https://www.androidauthority.com/waze-tutorial-tips-tricks-3130672/ — 요약 기준)
- 소비자 역할: 현장 정보 제공자. 별도 센서 없이 운전자가 곧 데이터 수집원이 됨.
- 보상: 제보·확인 시 포인트를 받고 등급이 올라감. 검색 요약 기준 확인("Still there/Not there")은 2점, 제보는 6점이며, 등급은 Waze Grown-Up → Warrior → Knight → Royalty 순. (https://www.slashgear.com/2235547/waze-points-explained/ , https://android.gadgethacks.com/news/what-can-you-do-with-waze-points-badges-levels/ — 정확한 점수는 본문 미열람, 미확인)

## 4. Conversational Reporting (AI 역할)
- 발표/베타: 2025년 10월 초 발표. 9to5Google 기사 URL 날짜 2025-10-06, BetaNews 2025-10-08. Waze 베타 "trusted testers"에게 Android·iOS, 영어로 먼저 제공, 다른 사용자·언어는 "in the coming months" 예정. (https://9to5google.com/2025/10/06/waze-conversational-reporting-voice-command-feature/ , https://betanews.com/2025/10/08/waze-is-rolling-out-voice-controlled-conversational-reporting-of-hazards/ , https://blog.google/waze/conversational-reporting-waze/)
  - 주의: 일부 검색 요약에 "2024년 10월"이라는 표기가 있으나 위 URL 날짜와 맞지 않아 2025년 10월로 판단함.
- 확대: 2026년 7월경 iOS·Android에서 전 세계 롤아웃이 보도됨(초기 영어). TechRadar는 "일부 이용자는 불만"이라는 제목의 기사를 냄. (https://www.macrumors.com/2026/07/13/five-new-waze-features-rolling-out/ , https://www.techradar.com/vehicle-tech/car-infotainment/waze-rolls-out-its-big-conversational-reporting-feature-but-not-everyone-is-happy-with-it — 날짜·지역·언어 세부는 미확인)
- 작동 방식: 제보 버튼을 누른 뒤 자연어로 말하면("Looks like there are cars jammed up ahead!" 같은 예시) Gemini가 의미를 이해해 올바른 제보 유형으로 분류하고 실시간 제보를 지도에 추가함. 정보가 부족하면 후속 질문을 할 수 있음. 특정 명령어나 메뉴 탐색이 필요 없음. (https://www.tomsguide.com/computing/mobile-apps/waze-is-getting-a-huge-ai-upgrade-that-fixes-one-of-its-most-dangerously-distracting-features , https://betanews.com/2025/10/08/waze-is-rolling-out-voice-controlled-conversational-reporting-of-hazards/ — 요약 기준)
- 지도 수정 제안: "The road is closed here" 같은 발화는 지역 지도 편집자에게 전달되어 검증 후 모두의 지도에 반영됨. 도로 폐쇄, 오래된 주소 등. (https://www.macrumors.com/2026/07/13/five-new-waze-features-rolling-out/ , https://designcompass.org/en/2026/07/14/waze-gemini-ai-voice/ — 요약 기준)
- 목적: 운전 중 주의 분산 감소, 탭 수 절감(Tom's Guide는 "가장 위험하게 주의를 분산시키는 기능 중 하나를 고친다"고 표현). 공식 인용문은 원문 미열람(미확인).
- AI의 가치공동창출 의미: AI가 참여 진입장벽(탭, 카테고리 선택)을 낮춰 소비자 제보량과 안전성을 높이는 "참여 촉진·자동 분류" 역할.

## 5. 기업의 학습·선별·반영 과정
- 확인 루프: 다른 운전자가 해당 지점을 지나가면 팝업으로 "Still there / Not there"를 물어 제보를 유지·삭제함. (https://support.google.com/waze/answer/12237550 및 검색 요약 기준)
- 신뢰도 가중: 제보자 등급이 높을수록 제보의 영향력이 크고, 낮은 등급 제보는 경로 변경에 덜 반영된다는 설명이 있으나, Waze 공식 문서가 아닌 2차 설명이므로 (미확인). (https://www.slashgear.com/2235547/waze-points-explained/)
- 이상 제보 탐지: 한 사용자만 보고하고 다른 이용자가 확인하지 않는 단속 제보 등은 신뢰도가 낮게 처리됨. 마이애미 경찰이 가짜 속도단속 제보를 올렸으나 크라우드소싱 덕에 효과가 적었다는 보도. (https://dailydot.com/police-waze-fake-speed-traps — 요약 기준)
- 지도 편집 커뮤니티가 구조적 오류(도로 폐쇄 등)를 검증·수정. (위 2·4절 출처)
- 경로·ETA 반영 방식의 정확한 알고리즘은 공개 자료에서 확인하지 못함 (미확인).

## 6. 성과·수치
- 월간 활성 사용자 약 1.9억 명 (미확인, 출처: https://www.waze.com/discuss/t/community/377030 검색 요약)
- 월간 활성 지도 편집자 약 3만 명 (미확인, 동일 출처)
- 하루 제보 약 2천만 건, 월 1억 건 이상 (미확인, 2차 사이트: https://businessmodelcanvastemplate.com/blogs/target-market/waze-target-market)
- Conversational Reporting 자체의 성과 지표(제보 증가율, 인식 정확도 등)는 공개 확인하지 못함 (미확인).

## 7. 한계·비판
- 경찰 위치 제보 논란: 보안관 단체 등이 경찰 위치 경고 기능이 경찰관 안전을 위협한다며 비활성화를 요구. (https://www.foxnews.com/auto/sheriffs-want-popular-police-tracking-app-disabled , https://www.nbcwashington.com/news/local/sheriffs-want-popular-police-tracking-app-disabled/104343/)
- 허위 제보: 위 Miami 사례. (https://dailydot.com/police-waze-fake-speed-traps)
- 프라이버시: 앱이 켜져 있는 동안 위치를 지속 수집하고 법집행기관과 공유하는 정보 범위에 대한 우려. (https://thenextweb.com/news/googles-waze-stalking-app-claim-us-police 등 검색 요약; 세부 미확인)
- Conversational Reporting 관련: 일부 이용자 불만 보도(TechRadar, 구체 내용 미확인). 음성 인식 오류, 언어 지원 제한(초기 영어 중심)은 롤아웃 보도에서 확인되나 인식 오류율 수치는 없음 (미확인).
- 자료 한계: 이번 조사에서 공식 블로그 원문 열람 불가.

## 8. 출처 목록
| 제목 | 매체 | 날짜 | URL |
|---|---|---|---|
| Conversational Reporting Waze | Google Blog | 2025-10 (정확한 일자 미확인) | https://blog.google/waze/conversational-reporting-waze/ |
| Waze conversational reporting voice command feature | 9to5Google | 2025-10-06 | https://9to5google.com/2025/10/06/waze-conversational-reporting-voice-command-feature/ |
| Waze is rolling out voice-controlled Conversational Reporting of hazards | BetaNews | 2025-10-08 | https://betanews.com/2025/10/08/waze-is-rolling-out-voice-controlled-conversational-reporting-of-hazards/ |
| Waze is getting a huge AI upgrade... | Tom's Guide | 미확인 | https://www.tomsguide.com/computing/mobile-apps/waze-is-getting-a-huge-ai-upgrade-that-fixes-one-of-its-most-dangerously-distracting-features |
| Waze conversational reporting rollout | Android Authority | 미확인 | https://www.androidauthority.com/waze-conversational-reporting-rollout-3604910/ |
| 5 New Waze Features Rolling Out Now | MacRumors | 2026-07-13 | https://www.macrumors.com/2026/07/13/five-new-waze-features-rolling-out/ |
| Waze rolls out its big Conversational Reporting feature – but not everyone is happy | TechRadar | 미확인 | https://www.techradar.com/vehicle-tech/car-infotainment/waze-rolls-out-its-big-conversational-reporting-feature-but-not-everyone-is-happy-with-it |
| Waze with Gemini enhances destination search and traffic reporting | Design Compass | 2026-07-14 | https://designcompass.org/en/2026/07/14/waze-gemini-ai-voice/ |
| Waze Community 포럼 | Waze | 미확인 | https://www.waze.com/discuss/t/community/377030 |
| What Can You Do With Waze Points | SlashGear | 미확인 | https://www.slashgear.com/2235547/waze-points-explained/ |
| Waze Help (제보 확인) | Google Support | 미확인 | https://support.google.com/waze/answer/12237550 |
| A closer look at how Waze develops its maps | MobileSyrup | 2020-02-20 | https://mobilesyrup.com/2020/02/20/a-closer-look-at-how-waze-develops-its-maps/ |
| Sheriffs want popular police tracking app disabled | Fox News / NBC Washington | 미확인 | https://www.foxnews.com/auto/sheriffs-want-popular-police-tracking-app-disabled |
| Police Waze fake speed traps | Daily Dot | 미확인 | https://dailydot.com/police-waze-fake-speed-traps |
| Waze target market | businessmodelcanvastemplate (2차) | 미확인 | https://businessmodelcanvastemplate.com/blogs/target-market/waze-target-market |

## 9. 사용한 검색어
1. Waze Conversational Reporting Gemini announcement
2. Waze monthly active users reports per day volunteer map editors
3. Waze "Still there" confirm report points ranks how reports affect routing
(그 외: Waze false reports police alerts criticism privacy sheriffs / Waze Conversational Reporting beta trusted testers October 2025 English Android iOS 9to5Google)

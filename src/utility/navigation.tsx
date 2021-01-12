const navigation = [
  {
    service: 'weapon',
    text: '무기',
    description: '무기 게시판입니다.',
    children: [
      {
        parent: '무기',
        category: 'melee',
        text: '근거리 무기'
      },
      {
        parent: '무기',
        category: 'ranged',
        text: '원거리 무기'
      }
    ]
  },
  {
    service: 'guide',
    text: '게임 가이드',
    description: '게임 가이드 게시판입니다.',
    children: [
      {
        parent: '게임 가이드',
        category: 'dictionary',
        text: '게임 가이드'
      },
      {
        parent: '게임 가이드',
        category: 'child',
        text: '차일드'
      }
    ]
  },
  {
    service: 'community',
    text: '커뮤니티',
    description: '커뮤니티 게시판입니다.',
    children: [
      {
        parent: '커뮤니티',
        category: 'talk',
        text: '톡톡 한마디'
      },
      {
        parent: '커뮤니티',
        category: 'gallery',
        text: '이미지 갤러리'
      }
    ]
  },
  {
    service: 'reference',
    text: '자료실',
    description: '자료실 게시판입니다.',
    children: [
      {
        parent: '자료실',
        category: 'video',
        text: '동영상'
      },
      {
        parent: '자료실',
        category: 'music',
        text: '음악'
      }
    ]
  }
]

export default navigation

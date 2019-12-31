import Mock from 'mockjs'

const random = Mock.Random

// 首页文章列表数据
Mock.mock('/articles', 'get', {
  success: true,
  message: '@cparagraph',
  'articles|6': [{
    'title': random.csentence(12, 25),
    'summary': random.csentence(50, 60),
    'category': random.cword(3, 5),
    'updated_at': random.date(),
  }],
  'pages': {
    prev_page: random.integer(1, 10),
    next_page: random.integer(1, 10),
  }
})

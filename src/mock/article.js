import Mock from 'mockjs'

const random = Mock.Random

// 文章列表数据
Mock.mock('/articles', 'get', {
  success: true,
  message: '@cparagraph',
  'articles|6': [{
    'article_id':1,
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

// 文章详情数据
Mock.mock('/articles/1', 'get', {
  'article_id': 1,
  'title': random.csentence(12, 25),
  'descript': random.csentence(50, 60),
  'content': random.paragraph(80, 120),
  'category': {
    'category_id': 1,
    'name': random.cword(3, 5),
  },
  'updated_at': random.date(),
})

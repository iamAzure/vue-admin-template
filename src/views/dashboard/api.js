import request from '@/utils/request'

export function getPosts(params) {
  return request({
    baseURL: 'https://jsonplaceholder.typicode.com',
    url: '/posts',
    method: 'get',
    params
  })
}

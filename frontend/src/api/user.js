import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/edu_sys/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/edu_sys/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/edu_sys/user/logout',
    method: 'post'
  })
}

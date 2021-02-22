import axios from './axios'

export const list = ({ service, category, number, grade }: any) => {
  let url = `/api/eternalcity/weapon/list2?number=${number}&grade=${grade}&category=${service}&equipment=${category}`

  return axios.get(url)
}

export const read = ({ service, category, number, grade }: any) => {
  let url = `/api/eternalcity/weapon/view2/${number}?grade=${grade}&category=${service}&equipment=${category}`

  return axios.get(url)
}

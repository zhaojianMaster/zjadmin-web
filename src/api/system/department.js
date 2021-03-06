import { getRequest, postRequest } from '@/utils/axios'

export function getDepartmentAll(params) {
    return getRequest("/api/department/getDepartmentAll", params)
}

export function getDepartmentByid(params) {
    return getRequest("/api/department/getDepartmentByid", params)
}

export const getModulePager = (params) => {
    return getRequest('/api/department/getByCondition', params)
}

export function add(params) {
    return postRequest("/api/department/add", params)
}

export function edit(params) {
    return postRequest("/api/department/edit", params)
}

export function del(params) {
    return postRequest("/api/department/delete", params)
}

export const getDeptTree = (params) => {
    return getRequest('/api/department/getDeptTree', params)
}

export default { getModulePager, add, edit, del, getDeptTree, getDepartmentAll }
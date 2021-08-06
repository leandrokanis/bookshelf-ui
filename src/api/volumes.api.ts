import { http } from '@/config'
import { IQueryParams } from '@/config/types'
import { VOLUMES } from './endpoints'

export const VolumesApi = {
  list(params?: IQueryParams) {
    return http.get(VOLUMES, { params })
  },
}

import { VolumesApi } from '@/api'
import { ApiData, IQueryParams } from '@/config/types'
import { Volume } from '@/models'
import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'

const actions = {
  createMultiple(data: ApiData<Volume>): Volume[] {
    if (!data) return
    return data.items
  },
}

const hooks = {
  useList(): { volumes: Volume[]; updateVolumes: Function } {
    const [volumes, setVolumes] = useState<Volume[]>()

    useEffect(() => {}, [])

    function updateVolumes(params?: IQueryParams): Promise<Volume[]> {
      return new Promise((resolve, reject) => {
        VolumesApi.list(params)
          .then((response: AxiosResponse) => {
            resolve(actions.createMultiple(response.data))
          })
          .catch(reject)
      })
    }

    return {
      volumes,
      updateVolumes,
    }
  },
}

export const AdministratorService = {
  ...actions,
  ...hooks,
}

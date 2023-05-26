// Vendors
import useSWRImmutable from 'swr/immutable'
// Types
import { DanceStep } from '@types'

const useDanceSteps = () => {
    const { data, error, isLoading } = useSWRImmutable('/api/danceSteps')

    return {
        danceSteps: data as DanceStep[],
        error,
        isLoading
    }
}

export default useDanceSteps
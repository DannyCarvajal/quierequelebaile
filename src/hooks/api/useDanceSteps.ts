// Vendors
import useSWRImmutable from 'swr/immutable'

const useDanceSteps = () => {
    const { data, error, isLoading } = useSWRImmutable('/api/danceSteps')

    return {
        danceSteps: data,
        error,
        isLoading
    }
}

export default useDanceSteps
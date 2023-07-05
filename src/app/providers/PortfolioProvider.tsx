import React from 'react'

import useSWR, { Fetcher } from 'swr'

const PortfolioProvider = () => {
    const { data, error, isLoading } = useSWR('http://api.thinesjaishankar.com/v1/education', (apiURL: string) => fetch(apiURL).then(res => res.json()));
    return {
        user: data,
        isLoading,
        isError: error
    }
}

export default PortfolioProvider
import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const useShortURL = ({ middleware, redirectIfAuthenticated } = {}) => {
    const router = useRouter()


    const myurl = async ({ setErrors, ...props }) => {
        axios
            .get('/shorturls')
            .then(res => res.data)
            .catch()
    }

  
    const csrf = () => axios.get('/sanctum/csrf-cookie')

    return {
        myurl,
        useShortURL,
    }
}

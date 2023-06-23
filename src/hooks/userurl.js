import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const useUserURL = ({ middleware, redirectIfAuthenticated } = {}) => {
    const router = useRouter()
    const { data: myurl, error, mutate } = useSWR('/shorturls', () =>

    axios
            .get('/shorturls')
            .then(res => res.data)
            .catch(),
    )

  
    const csrf = () => axios.get('/sanctum/csrf-cookie')


    const generate = async ({ setErrors, setSuccess, ...props }) => {
        await csrf()

        setErrors([])
        setSuccess([])

        try {
            await axios.post('/shorturls/generate', props)
            mutate()
            setSuccess('สร้าง Short URL ของคณสำเร็จ!')
          } catch (error) {
            if (error.response.status !== 422) throw error
        
            setErrors(error.response.data.errors)
        
          }
    }
    const redirect = async ({ setErrors, setSuccess, ...props }) => {
      

        setErrors([])
        setSuccess([])

        try {
            const redirectURL = await axios.get('/redirect', props)
            window.location.href = redirectURL;
          } catch (error) {
            if (error.response.status !== 422) throw error
        
            setErrors(error.response.data.errors)
        
          }
    }

    return {
        myurl,
        generate,
    }
}

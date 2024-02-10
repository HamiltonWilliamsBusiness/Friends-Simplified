import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        const json = await response.json()

        // if not a success we will recieve an error message
        // status(400), ok will be false
        // this checks if ok is false
        if (!response.ok) {
            setIsLoading(false)
            // we are sent an error property back when
            // there is an error
            setError(json.error)
        }
        if (response.ok) {

            // save the user to local storage
            // This stores token and email
            localStorage.setItem('user', JSON.stringify(json))

            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }
    }

    return { signup, isLoading, error }
}
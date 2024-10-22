import { useEffect, useState } from "react";

/**
 * Custom hook to sync state with the local storage
 * 
 * This hook persists the state in local storage so that the state remains
 * even after the page is refreshed or reopened. It takes a key and initial value,
 * stores the state in local storage, and returns both state and a function to update it.
 * 
 * @param key - The localStorage key to store the value
 * @param initialValue - The initial state value (can be a value or function)
 * @returns -Returns the current state and a functionto update it
 */

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {

    // Initialize state with value from localStorage if available, otherwise use initialValue
    const [value, setValue] = useState<T>(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue === null) {
            // If initialValue is a function, call it to get the value
            if (typeof initialValue === 'function') {
                return (initialValue as () => T)()
            } else {
                return initialValue;
            }
        } else {
            // Parse the stored value from localStorage
            return JSON.parse(jsonValue);
        }
    })

    // Update localStorage whenever the state (value) or key changes
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    },[value,key])

    // Return the state and a function to update it
    return [value, setValue] as [T, typeof setValue]
}
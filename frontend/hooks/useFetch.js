import { useState, useEffect } from 'react'

export default function useFetch(url, options) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url, options)
      const json = await res.json()
      setData(json)
      setLoading(false)
    }
    fetchData()
  }, [options, url])

  return [data, loading]
}

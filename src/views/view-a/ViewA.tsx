import React, { useEffect } from 'react'
import { ApiFactory } from '../../apis'
import { ChillContent } from './chill-content'

function ViewA() {
  const { businessApi } = ApiFactory()
  const { getAll } = businessApi()

  const handleGetData = async (params: any) => {
    try {

      await getAll<any>(params);
      // alert success
    } catch (e) {
      // alert error message
    }
  };

  useEffect(() => {
    handleGetData({})
  }, [])


  return (
    <ChillContent />
  )
}

export default ViewA
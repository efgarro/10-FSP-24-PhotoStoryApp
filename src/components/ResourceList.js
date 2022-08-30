import React from 'react'
import { link, useParams } from 'react-router-dom'

export const ResourceList = () => {
  const { resourceId } = useParams()
  return (
    <div>ResourceList {resourceId} </div>
  )
}

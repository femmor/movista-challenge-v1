import React from 'react'
import { Spring } from '@react-spring/web'

const Result = ({ result, index }) => {
  const { images, title } = result.toJS()
  return (
    <>
      <Spring 
        from={{ opacity: 0, transform: 'translateY(30px)'}}
        to={{ opacity: 1, transform: 'translateY(0px)'}}
        config={{ delay: index * 100}}
      >
        {springProps => (
          <img style={springProps} src={images.original.url} alt={title}/>
        )}
      </Spring>
    </>
  )
}

export default Result

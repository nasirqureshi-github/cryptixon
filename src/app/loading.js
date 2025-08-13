import React from 'react'

const Loading = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
      <div className="w-10 h-10 border-4 border-[#2258BF] border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

export default Loading

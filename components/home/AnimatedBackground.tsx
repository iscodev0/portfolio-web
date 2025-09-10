export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Hero Section - 3 figures */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-blue-500/30 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 border-2 border-purple-500/30 rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
      <div className="absolute top-60 right-1/3 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-cyan-500/40 animate-bounce" style={{animationDuration: '3s'}}></div>
      
      {/* About Section - 3 figures */}
      {/* <div className="absolute top-80 left-1/4 w-24 h-24 border-2 border-green-500/30 rounded-full animate-ping" style={{animationDuration: '4s'}}></div>
      <div className="absolute top-96 right-1/4 w-14 h-14 border-2 border-yellow-500/30 rotate-12 animate-pulse" style={{animationDuration: '2s'}}></div>
      <div className="absolute top-1/3 left-20 w-18 h-1 border-t-2 border-orange-500/40 animate-pulse" style={{animationDuration: '3s'}}></div>
       */}
      {/* Experience Section - 3 figures */}
      {/* <div className="absolute top-1/2 right-10 w-20 h-20 border-2 border-red-500/30 rounded-full animate-bounce" style={{animationDuration: '5s'}}></div>
      <div className="absolute top-2/3 left-1/3 w-12 h-12 border-2 border-pink-500/30 rotate-45 animate-spin" style={{animationDuration: '10s'}}></div>
      <div className="absolute top-3/4 right-1/3 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-indigo-500/40 animate-ping" style={{animationDuration: '6s'}}></div> */}
      
      {/* Skills Section - 3 figures */}
      {/* <div className="absolute bottom-80 left-1/2 w-16 h-16 border-2 border-emerald-500/30 rotate-45 animate-pulse" style={{animationDuration: '3s'}}></div>
      <div className="absolute bottom-60 right-20 w-22 h-22 border-2 border-violet-500/30 rounded-full animate-bounce" style={{animationDuration: '4s'}}></div>
      <div className="absolute bottom-1/3 left-16 w-20 h-1 border-t-2 border-teal-500/40 animate-pulse" style={{animationDuration: '2s'}}></div> */}
      
      {/* Contact Section - 3 figures */}
      {/* <div className="absolute bottom-40 left-1/4 w-18 h-18 border-2 border-amber-500/30 rounded-full animate-ping" style={{animationDuration: '5s'}}></div>
      <div className="absolute bottom-20 right-1/3 w-10 h-10 border-2 border-rose-500/30 rotate-12 animate-spin" style={{animationDuration: '7s'}}></div>
      <div className="absolute bottom-32 left-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[18px] border-l-transparent border-r-transparent border-b-sky-500/40 animate-bounce" style={{animationDuration: '4s'}}></div> */}
    </div>
  )
}
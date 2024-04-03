/* eslint-disable react/prop-types */


function Button({children,className=""}) {
  return (
    
 <button className={`text-white bg-orange-700 hover:bg-orange-300 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ${className}`}>{children}</button>
        
  )
}

export default Button
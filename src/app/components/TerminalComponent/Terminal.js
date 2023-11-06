export default function Termnal( {command = 'command', children} ) {
    return (
  <div className='min-w-full h-full border-2 border-green-400 flex flex-col justify-between bg-black bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'>
    
    <div className="p-4 flex">
      <p className='text-sm text-green-300 w-full h-auto'>Fernando-Leon@Portafolio: <span className="text-green-200">~$</span> <span>{ command }</span></p>
    </div>

    <div className="flex-grow p-4">
    { children }
    </div>

    <div className="flex h-4 items-center">
      <div className="w-20 bg-green-200 h-full">
        <div className="w-2/3 bg-green-300 m-auto h-full">
          <div className="w-2/3 bg-green-400 m-auto h-full">
            <div className="text-black w-1/2 text-center m-auto bg-green-500 h-full flex items-center justify-center">
              <span className="center-text">~</span>
            </div> 
          </div>  
        </div>
      </div>
    </div>

  </div>
    )
  }
  
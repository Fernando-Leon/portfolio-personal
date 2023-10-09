export default function Termnal( {command = 'command', children} ) {
    return (
  <div className='min-w-full h-full border-2 border-purple-400 flex flex-col justify-between bg-black bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg'>
    
    <div className="p-4 flex">
      <p className='text-sm text-purple-300 w-full h-auto'>Fernando-Leon@Portafolio: <span className="text-purple-200">~$</span> <span>{ command }</span></p>
    </div>

    <div className="flex-grow p-4">
    { children }
    </div>

    <div className="flex h-4 items-center" class="footer-terminal">
      <div className="w-1/12 bg-purple-200 h-full" class="icon-terminal-1">
        <div className="w-2/3 bg-purple-300 m-auto h-full" class="div-1">
          <div className="w-2/3 bg-purple-400 m-auto h-full" class="div-2">
            <div className="text-black w-1/2 text-center m-auto bg-purple-500 h-full flex items-center justify-center" class="div-3">
              <sapan className="center-text">~</sapan>
            </div> 
          </div>  
        </div>
      </div>
    </div>

  </div>
    )
  }
  
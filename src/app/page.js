import Image from 'next/image'
import Terminal from './components/TerminalComponent/Terminal'
// import SobreMi from './estudios'

export default function Home() {
  return (
    <main className="h-min-content p-4">
      <div className='w-full h-full'>
        <Terminal command='Show About Info'>
          <div className='w-full h-full grid grid-cols-2 gap-10 items-center'>
            <p className='flex-1 text-start tracking-wide'>
              Hola mi nombre en Fernando Leon, actualmente soy estudiante de la Ingeniria en Desarrollo de Software Multiplataforma. Inicie en la programación desde los 15 años y desde entonces e estado aprendiendo y practicando diversas tecnologias, ademas e desarrollado diferentes proyectos desde apps moviles hasta aplicaciones web.
            </p>
            <div className='grid h-full w-full justify-center items-center'>
              <Image
              className='rounded shadow-sm'
              src="/images/img1.jpg"
              width={400}
              height={400}
              alt="Picture of the author"
              />
            </div>
          </div>
        </Terminal>
      </div>
    </main>
  )
}

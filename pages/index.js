// import Image from 'next/image'
import Center from '@/components/Center'
import Player from '@/components/Player'
import Sidebar from '@/components/Sidebar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden text-gray-400">
      <main className='flex'>
        {/* Sidebar */}
        <Sidebar />
        {/* Songs */}
        <Center />
      </main>

      {/* Player */}
      <div className='sticky bottom-0'>
        <Player />
      </div>
    </div>
  ) 
}

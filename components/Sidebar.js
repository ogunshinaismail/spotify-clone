import { signOut, useSession } from "next-auth/react"

const Sidebar = () => {
  const { data: session, status } = useSession()

  console.log(session)

  return (
    <div className='h-screen p-4 border-r border-r-gray-700'>
      <p>Sidebar</p>
      <p className="cursor-pointer" onClick={signOut}>Log out</p>
    </div>
  )
}

export default Sidebar
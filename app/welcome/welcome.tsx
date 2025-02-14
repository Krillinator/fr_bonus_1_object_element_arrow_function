import { useState } from "react"
import type { User } from "~/types/User"

export function Welcome() {
  const [user, setUser] = useState<User>({ username: "Benny", password: "123" })
  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <p>Hello world :)</p>
      {/* Problem with Elements containing objects */}
      {/* ReactNode does not Accept OBJECTS */}
      <p>{count}</p> {/* number is OK */}
      <p>{JSON.stringify(user)}</p> {/* object is NOT OK */}
    </div>
  )
}

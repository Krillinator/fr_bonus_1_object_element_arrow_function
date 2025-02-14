import { useState } from "react"
import { Link } from "react-router"
import { CustomButton } from "~/components/CustomButton"
import type { User } from "~/types/User"

export function Welcome() {
  const [user, setUser] = useState<User>({ username: "Benny", password: "123" })
  const [count, setCount] = useState<number>(0)

  function addToCount(x: number, event: React.MouseEvent) {
    setCount(x)
  }

  return (
    <div>
      <p>Hello world :)</p>
      {/* Problem with Elements containing objects */}
      {/* ReactNode does not Accept OBJECTS */}
      <p>{count}</p> {/* number is OK */}
      <p>{JSON.stringify(user)}</p> {/* object is NOT OK */}
      {/* Arrow Function Example */}
      <button
        onClick={(event) => {
          addToCount(20, event)
        }}
      >
        Add to Count +1
      </button>
      {/* Navigation Example */}
      <p>
        Navigate: <Link to={"/about"}> About Page </Link>
      </p>
      <CustomButton
        message={"Navigate to About"}
        navigateTo={"/about"}
        customOnClickFunction={() => {
          console.log("Navigating to About...")
        }}
      />
      <CustomButton
        message={"Navigate to /"}
        navigateTo={"/"}
        customOnClickFunction={() => {
          console.log("Navigating to /...")
        }}
      />
      <CustomButton
        message={"Navigate to Home"}
        navigateTo={"/home"}
        customOnClickFunction={() => {
          console.log("Navigating to Home...")
        }}
      />
      <CustomButton
        message={"Navigate to Contact"}
        navigateTo={"/contact"}
        customOnClickFunction={() => {
          console.log("Navigating to Contact...")
        }}
      />
    </div>
  )
}

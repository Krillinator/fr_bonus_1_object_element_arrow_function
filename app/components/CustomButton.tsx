// Component: Reusability (DRY), Abstract (Solid)
// Question: How do we navigate?

import { Link } from "react-router"

interface CustomButton {
  navigateTo: string
  message: string
  customOnClickFunction: () => void
  // cssClass: string
}

export function CustomButton(props: CustomButton) {
  return (
    <Link to={props.navigateTo}>
      <button
        onClick={props.customOnClickFunction}
        /* className={props.cssClass}*/
      >
        {props.message}
      </button>
    </Link>
  )
}

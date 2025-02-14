// Component: Reusability (DRY), Abstract (Solid)
// Question: How do we navigate?

import { Link } from "react-router"

interface CustomButton {
  navigateTo: string
  message: string
  // cssClass: string
}

export function CustomButton(props: CustomButton) {
  return (
    <Link to={props.navigateTo}>
      <button /* className={props.cssClass}*/> {props.message}</button>
    </Link>
  )
}

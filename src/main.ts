import "./style.scss"
import "bootstrap-icons/font/bootstrap-icons.scss"
import "bootstrap/dist/js/bootstrap.min.js"
import { NavbarGen } from "@jpmod/jpmod";

document.body.setAttribute("data-bs-theme","dark")

let navbar = (document.querySelector("nav#main") as HTMLElement)

const navgen = new NavbarGen()



navgen.createnavbar(navbar)
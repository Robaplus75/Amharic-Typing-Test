import { NavBar } from "../components/navbar"
import { Body } from "../components/body"
import { Footer } from "../components/footer"

export const  Home = ()=>{
    return (
    <div className="container">
        <NavBar />
        <Body />
        <Footer />
    </div>)
}
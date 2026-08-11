import Footer from "../component/common/Footer";
import Header from "../component/common/Header"

export default function WebsiteLayout({ children }) {
    return (
        <>
        <Header/>
        <main>{children}</main>
        <Footer/>
        
        </>
    )
}
import {Theme, presetGpnDefault } from "@consta/uikit/Theme"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

const DefaultLayout = ({children}) => {
    return (
        <>
            <Theme preset={presetGpnDefault }>
                <Header/>
                <div style={{
                    width:"980px",
                    margin:"0px auto",
                }}>
                    {children}
                </div>
                <Footer/>
            </Theme>
        </>
    )
}
export default DefaultLayout;
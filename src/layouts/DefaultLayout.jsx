import {Theme, presetGpnDefault } from "@consta/uikit/Theme"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

const DefaultLayout = ({children}) => {
    return (
        <>
            <Theme preset={presetGpnDefault } style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "nowrap",
                minHeight: "100vh",
            }}>
                <div>
                    <Header/>
                </div>
                <main style={{
                    maxWidth:"1200px",
                    margin:"0px auto",
                    flexGrow: 1
                }}>
                    {children}
                </main>
                <div style={{marginBottom: "1rem"}}>
                    <Footer/>
                </div>
            </Theme>
        </>
    )
}
export default DefaultLayout;
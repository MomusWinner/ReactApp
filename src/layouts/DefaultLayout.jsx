import {Theme, presetGpnDark } from "@consta/uikit/Theme"
import Header from "../components/header/Header";

const DefaultLayout = ({children}) => {
    return (
        <>
            <Theme preset={presetGpnDark }>
                <Header/>
                <div style={{
                    width:"980px",
                    margin:"0px auto",
                }}>
                    {children}
                </div>
            </Theme>
        </>
    )
}
export default DefaultLayout;
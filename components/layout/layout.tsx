import HeaderAppBar from "../common/appbarheader/headermenu"
import Head from "../common/head/head"

const  LayoutBase = () : JSX.Element =>  {
    return (
    <>
    <Head pageTitle="MyApp"></Head>
    <HeaderAppBar></HeaderAppBar>
    </>
    )

}

export default LayoutBase
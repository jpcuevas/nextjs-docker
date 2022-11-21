import HeadNext from 'next/head'

type HeadType = {
    pageTitle?: string
  }

const Head = ({pageTitle}:HeadType) => {
    return (
        <HeadNext>
            <title>{pageTitle}</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <link rel="icon" href="/favicon.ico" />
        </HeadNext>
    )
}

export default Head
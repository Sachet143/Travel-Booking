import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class CustomDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <link rel='preconnect' href='https://fonts.googleapis.com' />
                    <link rel='preconnect' href='https://fonts.gstatic.com' />
                    <link
                        rel='stylesheet'
                        href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
                    />
                    <link rel='apple-touch-icon' sizes='180x180' href='/images/apple-touch-icon.png' />
                    <link rel='shortcut icon' href='/images/favicon.png' />
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous" />
                </body>
            </Html>
        )
    }
}

export default CustomDocument

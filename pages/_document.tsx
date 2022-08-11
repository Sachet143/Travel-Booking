/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
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

                    {/* page css */}
                    <link rel="stylesheet" href="client/assets/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="client/assets/css/animate.min.css" />
                    <link rel="stylesheet" href="client/assets/css/fontawesome.all.min.css" />
                    <link rel="stylesheet" href="client/assets/css/owl.carousel.min.css" />
                    <link rel="stylesheet" href="client/assets/css/owl.theme.default.min.css" />
                    <link rel="stylesheet" href="client/assets/css/navber.css" />
                    <link rel="stylesheet" href="client/assets/css/meanmenu.css" />
                    <link rel="stylesheet" href="client/assets/css/style.css" />
                    <link rel="stylesheet" href="client/assets/css/responsive.css" />
                    <link rel="icon" type="image/png" href="assets/img/favicon.png" />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css" />

                    <script src="client/assets/js/jquery-3.6.0.min.js" />
                    <script src="client/assets/js/bootstrap.bundle.js" />
                    <script src="client/assets/js/jquery.meanmenu.js" />
                    <script src="client/assets/js/owl.carousel.min.js" />
                    <script src="client/assets/js/wow.min.js" />
                    <script src="client/assets/js/custom.js" />
                    <script src="client/assets/js/add-form.js" />
                    <script src="client/assets/js/form-dropdown.js" />
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

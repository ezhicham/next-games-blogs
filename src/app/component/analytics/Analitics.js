import Script from 'next/script';

function Analytics() {
  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}

      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=G-LE60GSMC7F`}
      />

      <Script id='' strategy='lazyOnload'>
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LE60GSMC7F', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
      {/* <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-3RK38KXX1Y"
      ></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3RK38KXX1Y');
        `}
      </Script> */}
    </>
  );
}

export default Analytics;

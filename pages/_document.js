import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Manage your FIRST Robotics teams' parts inventory easily."
          />

          <meta
            property="og:title"
            content="Robin V - Robotics Inventory Management"
          />
          <meta
            property="og:description"
            content="Manage your FIRST Robotics teams' parts inventory easily."
          />
          <meta
            property="og:image"
            content="https://og-image.vercel.app/FRC%20Inventory%3Cbr%20%2F%3EManagement.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

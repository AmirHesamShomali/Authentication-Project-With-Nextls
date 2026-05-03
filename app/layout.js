import "./globals.css";
import "@/app/index.css"
export const metadata = {
  title: "Codeyad Next.js Education",
  description: "React Framework",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='h-full'>
      <head>
        <link rel="stylesheet" href="https://lib.arvancloud.ir/bootstrap/5.3.0-alpha1/css/bootstrap.min.css"/>
      </head>
      <body dir='rtl'>
        <div className='h-100 d-flex flex-column custom-gradient-background justify-content-center'>
          <div className='flex-grow-1'>
            {children}
          </div>
        </div>
      </body>


    </html>
  );
}



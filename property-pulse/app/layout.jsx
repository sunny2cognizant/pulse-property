import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata ={
    title: 'Property Rental App',
    description: 'Find ',
    keywords: 'rental, rental house,find rental house',
}

const MainLayout = ({children}) => {
    return (
    <html lang="en">
        <body>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </body>
    </html>
    )
}

export default MainLayout;
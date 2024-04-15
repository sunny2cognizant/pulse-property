import '@/assets/styles/globals.css';

export const metadata ={
    title: 'Property Rental App',
    description: 'Find ',
    keywords: 'rental, rental house,find rental house',
}

const MainLayout = ({children}) => {
    return (
    <html lang="en">
        <body>
            <div>
                {children}
            </div>
        </body>
    </html>
    )
}

export default MainLayout;
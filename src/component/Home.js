

import  { createContext,useState } from 'react'

function Home() {

    const loadingContext = createContext();
    
    const [loading,isLoading] = useState([]);
    
    
  return (
    <loadingContext.Provider value={loading}>
        <>

            <section className='section-home'>
                <main className='home-grid'>

                </main>
            </section>
        </>
        
    </loadingContext.Provider>
  )
}

export default Home
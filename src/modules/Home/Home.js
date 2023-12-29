import React from 'react';

const Home = () => {
    return (
        <div>        
            <header>
                <h1>Welcome to MManga Haven - Your Gateway to Endless Manga Adventures!</h1>
            </header>
            <main>
                <section>
                    <h2>Discover Your Next Obsession</h2>
                    <p>Dive into our extensive manga library filled with captivating stories, breathtaking artwork, and thrilling adventures. From beloved classics to the latest releases, explore a world of diverse genres and immerse yourself in tales that will transport you to new realms.</p>
                </section>
                <section>
                    <h2>Explore Our Manga Collection</h2>
                    <p>Ready to embark on your next manga journey? Browse our curated manga list to uncover hidden gems or revisit timeless favorites. Find your preferred genre, explore new series, and start your collection today.</p>
                    <a href="MangaList">Explore Manga List</a>
                </section>

                <section>
                    <h2>Join the MManga Haven Community</h2>
                    <p>Sign up or log in to unlock exclusive features! As a member of MManga Haven, you'll enjoy personalized recommendations, access to pre-orders, and be part of a vibrant community of fellow manga enthusiasts.</p>
                    <a href="Login">Login / Register</a>
                </section>
                <section>
                    <h2>Why MManga Haven?</h2>
                    <ul>
                        <li><strong>Vast Collection:</strong> Over thousands of titles at your fingertips.</li>
                        <li><strong>Convenience:</strong> Easy browsing, secured transactions, and prompt deliveries.</li>
                        <li><strong>Community:</strong> Engage in discussions, share recommendations, and stay updated.</li>
                        <li><strong>Personalized Experience:</strong> Tailored recommendations based on your preferences.</li>
                    </ul>
                </section>
            </main>   
        </div>
    );
};

export default Home;
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ChallengeSection from './components/ChallengeSection'
import FeedSection from './components/FeedSection'
import BottomNav from './components/BottomNav'
import ProfilePage from './components/ProfilePage'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="app">
      {activeTab !== 'profile' && (
        <header className="app-header">
          <Header />
          <SearchBar />
        </header>
      )}

      <main className={`app-main ${activeTab === 'profile' ? 'app-main--profile' : ''}`}>
        {activeTab === 'home' && (
          <>
            <ChallengeSection />
            <FeedSection />
          </>
        )}
        {activeTab === 'forest' && <section aria-label="Forest page" />}
        {activeTab === 'add' && <section aria-label="Add Recipe page" />}
        {activeTab === 'leaderboard' && <section aria-label="Leaderboard page" />}
        {activeTab === 'profile' && <ProfilePage />}
      </main>
      <BottomNav activeId={activeTab} onChange={setActiveTab} />
    </div>
  )
}


export default App

import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ChallengeSection from './components/ChallengeSection'
import FeedSection from './components/FeedSection'
import BottomNav from './components/BottomNav'
import ProfilePage from './components/ProfilePage'
import ForestPage from './components/ForestPage'
import AddRecipe from './components/AddRecipe'
import ScanCapture from './components/ScanCapture'
import LeaderboardPage from './components/LeaderboardPage'
import RecipeDetail from './components/RecipeDetail'
import GrowLeafSheet from './components/GrowLeafSheet'
import GrowLeafSuccessModal from './components/GrowLeafSuccessModal'
import RecipeViewSheet from './components/RecipeViewSheet'

const HOME_STATUS_IMAGE = '/savor/Group.svg'

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [selectedRecipeId, setSelectedRecipeId] = useState(null)
  const [isScanOpen, setIsScanOpen] = useState(false)
  const [isGrowLeafOpen, setIsGrowLeafOpen] = useState(false)
  const [isGrowLeafSuccessOpen, setIsGrowLeafSuccessOpen] = useState(false)
  const [isRecipeViewOpen, setIsRecipeViewOpen] = useState(false)
  const isRecipeDetailOpen = activeTab === 'home' && selectedRecipeId != null
  const showHeader = activeTab === 'home' && !isRecipeDetailOpen
  const showBottomNav = !isScanOpen

  return (
    <div className="app">
      {showHeader && (
        <header className="app-header">
          <div className="app-time-default">
            <span>10:00 AM</span>
            <img src={HOME_STATUS_IMAGE} alt="" />
          </div>
          <Header />
          <SearchBar />
        </header>
      )}

      <main className={`app-main ${activeTab !== 'home' ? 'app-main--profile' : ''}`}>
        {activeTab === 'home' && selectedRecipeId == null && (
          <>
            <ChallengeSection />
            <FeedSection
              onSelectRecipe={setSelectedRecipeId}
              onOpenGrowLeaf={() => setIsGrowLeafOpen(true)}
            />
          </>
        )}
        {isRecipeDetailOpen && (
          <RecipeDetail
            onBack={() => setSelectedRecipeId(null)}
            onOpenGrowLeaf={() => setIsGrowLeafOpen(true)}
            onOpenRecipe={() => setIsRecipeViewOpen(true)}
          />
        )}
        {activeTab === 'forest' && <ForestPage />}
        {activeTab === 'add' && !isScanOpen && <AddRecipe onOpenScan={() => setIsScanOpen(true)} />}
        {activeTab === 'add' && isScanOpen && <ScanCapture />}
        {activeTab === 'leaderboard' && <LeaderboardPage />}
        {activeTab === 'profile' && <ProfilePage />}
      </main>
      {showBottomNav && (
        <BottomNav
          activeId={activeTab}
          onChange={(tab) => {
            setActiveTab(tab)
            setSelectedRecipeId(null)
            setIsScanOpen(false)
            setIsGrowLeafOpen(false)
            setIsGrowLeafSuccessOpen(false)
            setIsRecipeViewOpen(false)
          }}
        />
      )}

      <GrowLeafSheet
        open={isGrowLeafOpen}
        onClose={() => setIsGrowLeafOpen(false)}
        onUpload={() => {
          setIsGrowLeafOpen(false)
          setIsGrowLeafSuccessOpen(true)
        }}
      />
      <GrowLeafSuccessModal
        open={isGrowLeafSuccessOpen}
        onClose={() => setIsGrowLeafSuccessOpen(false)}
        onViewForest={() => {
          setIsGrowLeafSuccessOpen(false)
          setSelectedRecipeId(null)
          setIsGrowLeafOpen(false)
          setIsRecipeViewOpen(false)
          setActiveTab('forest')
        }}
      />
      <RecipeViewSheet open={isRecipeViewOpen} onClose={() => setIsRecipeViewOpen(false)} />
    </div>
  )
}


export default App

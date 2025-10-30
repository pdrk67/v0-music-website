import { MatrixRain } from "@/components/matrix-rain"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Gallery } from "@/components/gallery"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Matrix rain background */}
      <MatrixRain />

      {/* Main content */}
      <div className="relative z-10">
        <Header />

        <div className="flex">
          <Sidebar />
          <Gallery />
        </div>
      </div>
    </div>
  )
}

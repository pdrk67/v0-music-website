import { Card } from "@/components/ui/card"
import { MatrixRain } from "./matrix-rain"

export function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r-2 border-primary/30 p-4 space-y-4 relative">
      {/* Matrix rain background */}
      <div className="absolute inset-0 opacity-30">
        <MatrixRain />
      </div>

      {/* Content with relative positioning to appear above matrix */}
      <div className="relative z-10 space-y-4">
        {/* About section */}
        <Card className="bg-card border-2 border-primary/50 p-4">
          <h2 className="text-primary font-bold mb-2 text-sm">ABOUT THIS ARTIST</h2>
        </Card>

        {/* Artist image */}
        <div className="relative aspect-square rounded-sm overflow-hidden border-2 border-accent">
          <img src="/y2k-aesthetic-portrait-with-pink-and-purple-neon-l.jpg" alt="Artist avatar" className="w-full h-full object-cover" />
        </div>

        {/* Bio section */}
        <Card className="bg-card border-2 border-accent/50 p-4">
          <div className="space-y-2">
            <p className="text-accent text-xs leading-relaxed">
              ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed
              sit amet dui.
            </p>
            <p className="text-accent text-xs leading-relaxed">
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus
              convallis quis ac lectus.
            </p>
            <p className="text-accent text-xs leading-relaxed">
              Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis
              at tellus.
            </p>
          </div>
        </Card>

        {/* Stats */}
        <Card className="bg-primary/10 border-2 border-primary p-3">
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="text-primary">UPLOADS:</span>
              <span className="text-foreground font-bold">127</span>
            </div>
            <div className="flex justify-between">
              <span className="text-primary">VIEWS:</span>
              <span className="text-foreground font-bold">45.2K</span>
            </div>
            <div className="flex justify-between">
              <span className="text-primary">RANK:</span>
              <span className="text-accent font-bold">#42</span>
            </div>
          </div>
        </Card>
      </div>
    </aside>
  )
}

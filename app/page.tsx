"use client"

import { useState, useEffect } from "react"
import { Heart, Star, Gift, Sparkles, BombIcon as Balloon, Cake, Music, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ChildrensDayWebsite() {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([])
  const [showMessage, setShowMessage] = useState(false)

  const createHeart = () => {
    const newHeart = {
      id: Date.now(),
      x: Math.random() * window.innerWidth,
      y: window.innerHeight,
    }
    setHearts((prev) => [...prev, newHeart])

    setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id))
    }, 3000)
  }

  useEffect(() => {
    const interval = setInterval(createHeart, 2000)
    return () => clearInterval(interval)
  }, [])

  const activities = [
    { icon: Balloon, title: "Balloon Games", description: "Let's play with colorful balloons!" },
    { icon: Cake, title: "Sweet Treats", description: "Sharing yummy cakes and cookies" },
    { icon: Music, title: "Dancing", description: "Dancing to our favorite songs" },
    { icon: Camera, title: "Photo Memories", description: "Capturing all our cute moments" },
  ]

  const memories = [
    "Nhớ lúc mình chơi game cùng nhau chớ?",
    "Hay cả những lần luyên thuyên ✨",
    "Hoặc là anh hát cho em nghe",
    "Cùng vui vẻ với nhau cả ngày nữa chứ",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100 relative overflow-hidden">
      {/* Floating Hearts */}
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute text-pink-400 animate-bounce"
          style={{
            left: heart.x,
            top: heart.y,
            animation: "float 3s ease-in-out infinite",
          }}
          size={20}
        />
      ))}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <h1 className="text-6xl md:text-8xl font-bold text-pink-500 mb-4 animate-pulse">Happy Children's Day!</h1>
            <div className="flex justify-center space-x-4 mb-6">
              <Star className="text-yellow-400 animate-spin" size={32} />
              <Sparkles className="text-pink-400 animate-bounce" size={32} />
              <Star className="text-yellow-400 animate-spin" size={32} />
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-pink-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">To My Sweet Little Princess 👑</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Hehehe Có thể không có gì đãc biệt nhưng mà cũng đáng để ghi nhớ chớ ha 💕
            </p>
            <Button
              onClick={() => setShowMessage(!showMessage)}
              className="bg-pink-400 hover:bg-pink-500 text-white text-lg px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Gift className="mr-2" size={20} />
              Click for a Special Surprise!
            </Button>
          </div>
        </div>
      </section>

      {/* Special Message */}
      {showMessage && (
        <section className="py-16 px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-r from-pink-200 to-yellow-200 border-4 border-pink-300 shadow-2xl transform animate-bounce">
              <CardContent className="p-8 text-center">
                <h3 className="text-3xl font-bold text-pink-600 mb-4">💝 Special Message 💝</h3>
                <p className="text-lg text-gray-800 leading-relaxed">
                  "Em không chỉ là người yêu, còn là điểm tựa để anh nổ lực hơn mỗi ngày, hiện tại anh chưa dám hứa với em điều gì xa xôi hơn nhưng chỉ mong là mình sẽ vui vẻ với nhau trong tương lai, thấu hiểu và sẻ chia hơn nhé 🌟"
                </p>
                <div className="mt-6 flex justify-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} className="text-red-400 animate-pulse" size={24} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Fun Activities Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-pink-500 mb-12">
            Our Favorite Kid Activities! 🎈
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <Card
                key={index}
                className="bg-white/90 border-3 border-yellow-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <activity.icon className="mx-auto mb-4 text-pink-400" size={48} />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{activity.title}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sweet Memories Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-orange-500 mb-12">Our Sweet Memories 📸</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {memories.map((memory, index) => (
              <Card
                key={index}
                className="bg-gradient-to-r from-yellow-200 to-pink-200 border-3 border-orange-300 shadow-lg"
              >
                <CardContent className="p-6">
                  <p className="text-lg text-gray-800 font-medium text-center italic">"{memory}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-pink-500 mb-4">Forever Your Big Kid 🧸</h3>
          <p className="text-lg text-gray-700 mb-6">
            Thank you for keeping the magic of childhood alive in our relationship. I love you more than all the stars
            in the sky! ⭐
          </p>
          <div className="flex justify-center space-x-4">
            <Heart className="text-red-400 animate-pulse" size={32} />
            <Sparkles className="text-yellow-400 animate-bounce" size={32} />
            <Heart className="text-red-400 animate-pulse" size={32} />
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); opacity: 1; }
          50% { transform: translateY(-100px) rotate(180deg); opacity: 0.8; }
          100% { transform: translateY(-200px) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import { ConfettiCelebration } from "./confetti-celebration"

type Stage = "greeting" | "question" | "said-no" | "said-yes"

export function ValentineCard() {
  const [stage, setStage] = useState<Stage>("greeting")
  const [noCount, setNoCount] = useState(0)

  const handleProceed = () => {
    setStage("question")
  }

  const handleYes = () => {
    setStage("said-yes")
  }

  const handleNo = () => {
    setNoCount((prev) => prev + 1)
    setStage("said-no")
  }

  // Make the Yes button grow bigger each time she presses No
  const yesButtonScale = 1 + noCount * 0.15

  return (
    <>
      {stage === "said-yes" && <ConfettiCelebration />}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* ==========================================
            CAT SHAKING HEAD GIF - SHOWN WHEN "NO" IS PRESSED
            ==========================================
            This GIF appears above the question card when
            the user presses the "No" button. Replace the
            placeholder below with your own cat shaking
            head GIF.

            Recommended size: 200x200 or similar
            Format: GIF
            Example sources:
              - Giphy (search "cat shaking head no")
              - Tenor (search "cat no")

            To add your GIF:
            1. Save your GIF file to /public/images/cat-no.gif
            2. Uncomment the <img> tag below
            3. Remove the placeholder text
            ========================================== */}
        {stage === "said-no" && (
          <div className="mb-6 animate-bounce-in">
            <div className="rounded-2xl bg-[rgba(255,255,255,0.15)] backdrop-blur-sm p-4 text-center border border-[rgba(255,255,255,0.2)]">
              {/* 
                =====================================================
                REPLACE THIS ENTIRE DIV WITH YOUR CAT SHAKING HEAD GIF:
                
                <img 
                  src="/images/cat-no.gif" 
                  alt="Cat shaking head saying no" 
                  className="w-48 h-48 mx-auto rounded-xl object-cover"
                />
                =====================================================
              */}
              <div className="w-48 h-48 mx-auto rounded-xl bg-[rgba(255,255,255,0.1)] flex items-center justify-center border-2 border-dashed border-[rgba(255,255,255,0.3)]">
                <div className="text-center px-3">
                  <p className="text-[hsl(0,0%,100%)] text-3xl mb-2">{"🙀"}</p>
                  <p className="text-[hsl(0,0%,90%)] text-xs font-medium leading-relaxed">
                    {"Place your cat shaking head GIF here"}
                  </p>
                  <p className="text-[hsl(0,0%,70%)] text-[10px] mt-1">
                    {"/public/images/cat-no.gif"}
                  </p>
                </div>
              </div>
              <p className="text-[hsl(0,0%,100%)] mt-3 font-medium text-sm">
                {"Nuh uh... that's not an option!"}
              </p>
            </div>
          </div>
        )}

        {/* Main Question Card */}
        <div
          className={`
            bg-[hsl(0,0%,100%)] rounded-3xl shadow-2xl p-8 md:p-12 
            max-w-md w-full text-center
            animate-pulse-glow animate-fade-in-up
            border border-[hsl(350,60%,92%)]
          `}
        >
          {/* Decorative heart at top */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-[hsl(350,60%,92%)] flex items-center justify-center animate-heartbeat">
              <Heart className="w-8 h-8 text-[hsl(346,77%,50%)] fill-[hsl(346,77%,50%)]" />
            </div>
          </div>

          {/* ===== STAGE: GREETING ===== */}
          {stage === "greeting" && (
            <div className="animate-fade-in-up">
              <h1 className="text-2xl md:text-3xl font-bold text-[hsl(350,30%,15%)] mb-3 text-balance">
                {"Hey Selam Esatu"}
              </h1>
              <p className="text-[hsl(350,10%,45%)] mb-8 text-lg leading-relaxed">
                {"I want to ask you something..."}
              </p>
              <button
                onClick={handleProceed}
                className="
                  w-full py-4 px-8 rounded-2xl
                  bg-[hsl(346,77%,50%)] text-[hsl(0,0%,100%)]
                  font-semibold text-lg
                  hover:bg-[hsl(346,77%,45%)]
                  active:scale-95
                  transition-all duration-300
                  shadow-lg hover:shadow-xl
                  animate-shimmer
                  bg-gradient-to-r from-[hsl(346,77%,50%)] via-[hsl(346,90%,60%)] to-[hsl(346,77%,50%)]
                "
              >
                {"Proceed"}
              </button>
            </div>
          )}

          {/* ===== STAGE: THE BIG QUESTION ===== */}
          {(stage === "question" || stage === "said-no") && (
            <div className="animate-fade-in-up">
              <h1 className="text-2xl md:text-3xl font-bold text-[hsl(350,30%,15%)] mb-2 text-balance">
                {"Baby..."}
              </h1>
              <p className="text-[hsl(346,77%,50%)] text-xl md:text-2xl font-semibold mb-8 text-balance">
                {"Will you be my Valentine?"}
              </p>

              <div className="flex gap-4 justify-center items-center">
                {/* YES BUTTON - grows bigger each time No is pressed */}
                <button
                  onClick={handleYes}
                  style={{ transform: `scale(${yesButtonScale})` }}
                  className="
                    py-3 px-8 rounded-2xl
                    bg-[hsl(346,77%,50%)] text-[hsl(0,0%,100%)]
                    font-semibold text-lg
                    hover:bg-[hsl(346,77%,45%)]
                    active:scale-95
                    transition-all duration-300
                    shadow-lg hover:shadow-xl
                  "
                >
                  {"Yes!"}
                </button>

                {/* NO BUTTON - only show if they haven't pressed No yet */}
                {stage !== "said-no" && (
                  <button
                    onClick={handleNo}
                    className="
                      py-3 px-8 rounded-2xl
                      bg-[hsl(350,30%,94%)] text-[hsl(350,30%,15%)]
                      font-semibold text-lg
                      hover:bg-[hsl(350,30%,88%)]
                      active:scale-95
                      transition-all duration-300
                    "
                  >
                    {"No"}
                  </button>
                )}
              </div>

              {stage === "said-no" && (
                <p className="mt-4 text-[hsl(350,10%,45%)] text-sm animate-fade-in-up">
                  {"There's only one right answer here..."}
                </p>
              )}
            </div>
          )}

          {/* ===== STAGE: SHE SAID YES! ===== */}
          {stage === "said-yes" && (
            <div className="animate-bounce-in">
              {/* ==========================================
                  BALLOON / CELEBRATION GIF - SHOWN WHEN "YES" IS PRESSED
                  ==========================================
                  This GIF appears inside the card when the
                  user presses the "Yes" button. Replace the
                  placeholder below with your own celebration
                  balloon pop GIF.

                  Recommended size: 200x200 or similar
                  Format: GIF
                  Example sources:
                    - Giphy (search "balloons celebration")
                    - Tenor (search "balloon pop celebration")

                  To add your GIF:
                  1. Save your GIF file to /public/images/balloons.gif
                  2. Uncomment the <img> tag below
                  3. Remove the placeholder div
                  ========================================== */}
              <div className="mb-6">
                {/* 
                  =====================================================
                  REPLACE THIS ENTIRE DIV WITH YOUR BALLOON / CELEBRATION GIF:
                  
                  <img 
                    src="/images/balloons.gif" 
                    alt="Celebration balloons popping" 
                    className="w-52 h-52 mx-auto rounded-xl object-cover"
                  />
                  =====================================================
                */}
                <div className="w-52 h-52 mx-auto rounded-xl bg-[hsl(350,60%,96%)] flex items-center justify-center border-2 border-dashed border-[hsl(346,77%,80%)]">
                  <div className="text-center px-3">
                    <p className="text-4xl mb-2">{"🎈"}</p>
                    <p className="text-[hsl(350,30%,40%)] text-xs font-medium leading-relaxed">
                      {"Place your balloon celebration GIF here"}
                    </p>
                    <p className="text-[hsl(350,10%,60%)] text-[10px] mt-1">
                      {"/public/images/balloons.gif"}
                    </p>
                  </div>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-[hsl(346,77%,50%)] mb-3">
                {"Yay!!!"}
              </h1>
              <p className="text-[hsl(350,30%,15%)] text-lg mb-2 font-semibold">
                {"I knew you'd say yes!"}
              </p>
              <p className="text-[hsl(350,10%,45%)] leading-relaxed">
                {"I love you so much, Selam Esatu. Happy Valentine's Day!"}
              </p>

              <div className="mt-6 flex justify-center gap-2">
                {["#e0245e", "#ff6b81", "#e0245e"].map((color, i) => (
                  <Heart
                    key={i}
                    className="w-6 h-6 animate-heartbeat"
                    style={{
                      fill: color,
                      color: color,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Small love note at the bottom */}
        <p className="mt-8 text-[hsl(0,0%,90%)] text-sm opacity-80 text-center">
          {"Made with love, just for you"}
        </p>
      </div>
    </>
  )
}

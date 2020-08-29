import React from 'react'
import '../styles/MantrasIntro.css'

const MantrasIntro = () => {
  const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

  return (
    <div className="intro-container">
      <p className="intro_title">Mantra Collection</p>
      <img
        src={require(`../assets/${
          darkMode ? 'mala.png' : 'mala.png'
        }`)}
        alt="Mantra Collection Logo"
        className="intro_image"
      />
      <p className="intro_text">
        We are collecting <b>111,111</b> mantras
        with wishes to find a beautiful space where we can all gather,
        practice, meet new people, and continue with our joyful activity!
        Wishing for the best possible outcome for
        the best possible place for DWB in San Francisco 🌈
      </p>
    </div>
  )
}

export default MantrasIntro

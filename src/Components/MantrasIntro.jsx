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
        Let's start collecting mantras in the intention of getting another new resident.
        With an empty room and no guest income we will not be able to support the center.
        Let's start making some strong wishes and commit to collecting <b>111,111 Karmapa Chenno</b> mantras.
        It is a nice way to keep our bonds and strength as sangha in times we are living in now.
      </p>
    </div>
  )
}

export default MantrasIntro

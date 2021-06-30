import Head from 'next/head'
import {useState} from 'react'

export default function Home() {
  const [word, setWord] = useState("")
  const [def, setDef]  = useState([])
  const clickEvent = (e) => {
    fetch("./api/main")
    .then(response => {
      return response.json()
    })
    .then(response => {
        setWord(response.randWord)
        setDef(response.def)
    })
  } 
  var defi = []
  if(def != undefined){
    defi = def.map((defin) => {
      return <li>{defin}</li>
    }) 
  }
  return (
    <div className="container">
      <Head>
        <title>Random Word and Meaning Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="title">Random Word and Meaning Generator</h1>
      <button id="genbut" onClick={clickEvent} className="btn">Generate Word</button>
      <h2 className="word">{word}</h2>
      <h2 className="deftitle">Definitions</h2>
      <ol className="deflist">
        {defi.length ? defi : <h3>No definitions for this word</h3>}
      </ol>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .word{
          margin-top: 0;
          font-size: 2.3em;
          text-transform: uppercase;
          margin-bottom: 0;
          letter-spacing: 1.8px;
          color: #0070f3;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          background-color: #efefef;
          border-radius: 4px;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        }

        .deftitle{
          margin-bottom: 0;
          font-size: 2em;
        }

        .deflist{
          width: 50vw;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .btn{
          outline: none;
          border: none;
          width: 40%;
          padding-top: 1rem;
          padding-bottom: 1rem;
          border-radius: 5px;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          font-size: 1.1em;
          font-weight: 600;
          background-color: #0070f3;
          color: #fff;
          margin-top: 2rem;
          margin-bottom: 2rem
        }

        .btn:hover,
        .btn:focus,
        .btn:active{
          background-color: #000;
          cursor: pointer;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

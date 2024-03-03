import {useEffect, useState} from "react";
import toadHeader from './assets/toadh1.png'
import toadBoxi from './assets/toad2.png'
import './App.css'

function Counter(){
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log('Component Mounted');

		const handleClick = () => setCount((c) => c + 1)
		document.addEventListener('click', handleClick)

		return () => {
			console.log('Component unmounted')
			document.removeEventListener('click', handleClick)
		}
	}, [])

	useEffect(() => {
		console.log('Count updated')
		document.title = `Count: ${count}`
	}, [count])

  function toadShower(){
    var toad = document.createElement('img');
    toad.src = toadBoxi;
    document.getElementById('toadBox').appendChild(toad);
  }

	return(
		<div>
			<h2>Clicks Count: {count}</h2>
			<button id="toadButton" onClick={toadShower}>Click here for a toad!</button>
		</div>
	)
}

function Header(){
	return (
    <h1 className="headerStyle">
        <img src={toadHeader} className="header" alt="Toad in hands" />
        <span>Hi welcome to my Toads fan page</span>
        <img src={toadHeader} className="header" alt="Toad in hands" />
    </h1>
  )
}

function App() {
  return (
    <main>
        <Header/>
        <div className="center piola m">
            <p>
                Toad is a common name for certain frogs, especially of the family Bufonidae, that are characterized by dry, leathery skin, short legs, and large bumps covering the parotoid glands.
    
                A distinction between frogs and toads is not made in scientific taxonomy, but is common in popular culture (folk taxonomy), in which toads are associated with drier, rougher skin and more terrestrial habitats.
            </p>
        </div>
        <Counter/>
        <div id="toadBox"></div>
    </main>
  )
}

export default App

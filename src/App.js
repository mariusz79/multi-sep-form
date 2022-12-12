import Container from './components/Container';
import Sidebar from './components/Sidebar/Sidebar';
import MainInfo from './components/MainInfo/MainInfo';

function App() {

  return (
		<div className="App">
			<Container>
				<Sidebar></Sidebar>
        <MainInfo></MainInfo>
			</Container>
		</div>
	);
}

export default App;

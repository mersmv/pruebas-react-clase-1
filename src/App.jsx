import Title from "./components/Title/Title"

const App = () => {
	return <Title text='hola' name='mer' boolean={true} isUndefined={undefined} isNull={null} array={[1, 2, 3, 4, 5, 5]} object={{ a: 1, b: 3 }} />;
};

export default App;

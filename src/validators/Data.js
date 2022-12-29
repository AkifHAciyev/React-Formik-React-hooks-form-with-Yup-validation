const Data = (values) => {
	fetch('https://northwind.vercel.app/api/products', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(values),
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
		});
};

export default Data;

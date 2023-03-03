import React, { useState } from 'react';

function ChecklistItem({ item, handleToggle }) {
	return (
		<li>
			<label>
				<input
					type='checkbox'
					checked={item.completed}
					onChange={() => handleToggle(item.id)}
				/>
				{item.name}
			</label>
		</li>
	);
}

function Checklist() {
	const [items, setItems] = useState([
		{ id: 1, name: 'Toiletpapier', completed: false },
		{ id: 2, name: 'Handdoeken', completed: false },
		{ id: 3, name: 'Schoonmaakspullen', completed: false },
		{ id: 4, name: 'Keukengerei', completed: false },
		{ id: 5, name: 'Beddengoed', completed: false },
	]);

	const handleToggle = (id) => {
		const updatedItems = items.map((item) =>
			item.id === id ? { ...item, completed: !item.completed } : item,
		);
		setItems(updatedItems);
	};

	return (
		<ul>
			{items.map((item) => (
				<ChecklistItem
					key={item.id}
					item={item}
					handleToggle={handleToggle}
				/>
			))}
		</ul>
	);
}

export default Checklist;

import React, {ChangeEvent, FC, MouseEvent, useState} from 'react';

const TodoList: FC = () => {

	const [inputValue, setInputValue] = useState<string>('Please enter your value');
	const [itemList, setItemList] = useState<string[]>([]);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		console.log(e);
		setInputValue(e.target.value);
	};

	const handleBtnClick = () => {
		const list: string[] = [...itemList, inputValue];
		setItemList(list);
		setInputValue('');
	};

	const handleItemDelete = (index: number) => (e: MouseEvent) => {
		console.log(e);
		e.preventDefault();
		const list: string[] = [...itemList];
		list.splice(index, 1);
		setItemList(list);
	};

	return (
		<div>
			<div>
				<input
					value={inputValue}
					onChange={handleInputChange}
				/>
				<button onClick={handleBtnClick}>Submit</button>
			</div>
			<ul>
				{
					itemList.map((value, index) => {
						return (
							<li key={index} onClick={handleItemDelete(index)}>
								{value}
							</li>
						);
					})
				}
			</ul>
		</div>
	);
};

export default TodoList;

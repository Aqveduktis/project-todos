import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Paragraf } from '../shared/shared';

// Styled components
const Wrapper = styled.header`
border-bottom: 5px solid white;
`;
const Title = styled.h1`
	font-size: 50px;
  padding: 20px 0;
	color: white;
`;

export const Header = () => {
	const totalNumber = useSelector((state) => state.todoStore.todos.length);
	const filterNumber = useSelector((state) => state.todoStore.todos.filter((item) => !item.taskDone).length);
	return (
		<Wrapper>
			<Title>Your Todos</Title>
			<Paragraf>
				Completed {filterNumber} of {totalNumber} Todos
			</Paragraf>
		</Wrapper>
	);
};

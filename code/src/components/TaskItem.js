import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { todoStore } from '../reducers/todoStore';
import moment from 'moment';
import { ColorButton } from 'shared/shared';

// styled components
const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	border-right: 1px dotted white;
	box-size: border-box;
  @media (min-width: 576px) {
    width: 50%;
  }
`;

const TodoItem = styled.button`
	min-width: 200px;
	background-color: #c7d3d4;
	border: 1px solid black;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 25px;
	text-transform: capitalize;
	opacity: ${(props) => (props.todoDone ? 0.6 : 1)};
`;
const SmallText = styled.p`
	font-size: 14px;
	font-width: 100;
	font-style: italic;
  color: ${props => props.late ? 'red' : 'black' }
`;
const MediumText = styled.p`
	font-size: 18px;
	font-width: 100;
	text-decoration: ${(props) => (props.todoDone ? 'line-through' : 'none')};
`;

export const TaskItem = ({ todo }) => {
	const dispatch = useDispatch();
  const todayDate = new Date()
  const deadline = new Date(todo.dueDate)
  const compareOntime = (todayDate < deadline)

	//action to change status
	const handleStatusChange = () => {
		dispatch(todoStore.actions.statusTask(todo));
	};
	// action to delete task
	const handleDelete = () => {
		dispatch(todoStore.actions.removeTask(todo));
	};

	return (
		<Wrapper>
			<TodoItem todoDone={todo.taskDone} onClick={handleStatusChange}>
				<MediumText todoDone={todo.taskDone}>{todo.task}</MediumText>

        {todo.taskDone ? <SmallText>Good job</SmallText> : <SmallText late={!compareOntime} >Deadline: {moment(todo.dueDate).fromNow()}</SmallText>
        }
        
			</TodoItem>
			<ColorButton color="red" onClick={handleDelete} aria-label="remove">
				-
			</ColorButton>
		</Wrapper>
	);
};

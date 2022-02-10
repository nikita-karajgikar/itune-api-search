import React from 'react';
import Item from './Item';
import styled from 'styled-components';

const Liste = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex: 0 1 auto;
	padding-top: 80px;
`;

const ItemsList = ({ items }) => {
	const itemsArray = items.map((item, index) => <Item key={index} {...item} />);
	return <Liste>{itemsArray}</Liste>;
};

export default ItemsList;
import '../variables.css'
import styled from "styled-components";

 const MainContainer = styled.div`
		max-width: var(--desktop);
		background-color: var(--white);
		border-radius: var(--border-radius-large);
		display: flex;
		padding: var(--padding-12);
		box-shadow: 0px 2px 7px 2px rgb(0 0 0 / 4%);
 `;

const Container = (props) => {
  
 

  return ( <MainContainer>{props.children}</MainContainer> );
}
 
export default Container;
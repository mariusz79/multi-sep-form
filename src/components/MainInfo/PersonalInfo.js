import '../../variables.css'
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  `

const Title = styled.p`
	color: var(--marine-blue);
	font-size: var(--font-size-32);
	font-weight: var(--font-weight-700);
`;

const UnderTitle = styled.p`
  color: var(--cool-gray);
`

const LabelContainer = styled.div`
	display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.label`
	color: var(--marine-blue);
`;

const ErrorMessage = styled.p`
	color: var(--strawberry-red);
	font-weight: var(--font-weight-500);
`;

const Input = styled.input`
	border-style: solid;
	border-width: 1px;
	border-color: var(--light-gray);
	border-radius: var(--border-radius-small);
	padding: var(--border-radius-medium);
	color: var(--marine-blue);
	font-family: "Ubuntu";
	font-size: var(--font-size-18);
	font-weight: var(--font-weight-700);
	&:focus {
		outline: none;
		border-color: var(--purplish-blue);
	}
	&::placeholder {
		color: var(--cool-gray);
		font-size: var(--font-size-18);
	}
`;

const PersonalInfo = ({ handleFormData, formData, showError }) => {
	const handleChange = (e) => {
		handleFormData(e.target.name, e.target.value);
	};
  console.log(formData);
console.log(showError)
	return (
		<Container>
			<Title>Personal info</Title>
			<UnderTitle>
				Please provide your name, email address, and phone number.
			</UnderTitle>
			<LabelContainer>
				<Label htmlFor="name">Name</Label>
				{showError.name ? (
					<ErrorMessage>This field is required</ErrorMessage>
				) : null}
			</LabelContainer>
			<Input
				type="text"
				id="name"
				name="name"
				placeholder="e.g. Stephen King"
				value={formData.name}
				onChange={handleChange}
			/>
			<LabelContainer>
				<Label htmlFor="email">Email Address</Label>
				{showError.email ? (
					<ErrorMessage>This field is required</ErrorMessage>
				) : null}
			</LabelContainer>
			<Input
				type="text"
				id="email"
				name="email"
				value={formData.email}
				onChange={handleChange}
				placeholder="e.g. stephenking@lorem.com"
			/>
			<LabelContainer>
				<Label htmlFor="phone">Phone Number</Label>
				{showError.phone ? (
					<ErrorMessage>This field is required</ErrorMessage>
				) : null}
			</LabelContainer>
			<Input
				type="text"
				id="phone"
				name="phone"
				value={formData.phone}
				onChange={(e) => handleChange(e)}
				placeholder="e.g. +1 234 567 890"
			/>
		</Container>
	);
};
 
export default PersonalInfo;
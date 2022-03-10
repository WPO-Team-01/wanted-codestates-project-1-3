import styled from "styled-components";

const CustomButton = styled.button`
  height: 37px;
  border: 1px solid #e5e7eb;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Button = ({ children, ...rest }) => {
  return <CustomButton {...rest}>{children}</CustomButton>;
};

export default Button;

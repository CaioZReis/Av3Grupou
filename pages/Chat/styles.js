import styled from 'styled-components/native';

export const Container = styled.View`
  background-color:#AB1B71;
  flex:1;
  padding:10px 10px 0px 10px;
  flex-direction:column;
  justify-content: flex-end;
  align-items:center;
  margin-top:25px;
`;


export const Texto = styled.Text`
 color:#fff;
 font-size:20px;
 text-align:center;
  marginBottom: 20;
`

export const ContainerMessages = styled.View`
  flex:1;
`;

export const MessageUser = styled.Text`
color:#000;
font-size:10px;
text-align:justify;
elevation: 1;
width: 100%;
color: #FFF;
opacity: 0.8;
`

export const Message = styled.Text`
color:#000;
font-size:14px;
text-align:justify;
elevation: 1;
width: 100%;
color: #FFF;
`

export const ContainerButtons = styled.View`
  flex-direction:row;
  margin-bottom:10px;
`

export const Button = styled.TouchableOpacity`
  padding: 0 20px;
  flex:1;
  width:100%;
  height: 60px;
  background-color: ${props => props.invert ? "#fff" : "#ae1b73"};
  border:1px solid #ae1b73;
  border-radius:5px;
  justify-content:center;
  align-items:center;
  margin-right:${props => props.invert ? "10px" : "0px"};
`

export const ButtonText = styled.Text`
  color:${props => props.invert ? "#ae1b73" : "#fff"};
  font-size:16px;
  font-weight:bold;
  `

export const Input = styled.TextInput`
  border:1px solid #fff;
  height:60px;
  flex:3;
  border-radius:5px;
  padding: 0 20px;
  background-color:#fff;
  margin-right:10px;
  color: #ae1b73;
  fontSize: 18px;
`
export const MessageWrapper = styled.View`
  backgroundColor: #570c39;
  padding: 8px;
  borderRadius: 8px;
  padding-top:5px;
  alignItems: 'flex-end;
  marginTop: 5;
  marginBottom: 5;
  marginLeft: ${props => props.invert ? "40" : "0"};
  marginRight: ${props => props.invert ? "0" : "40"};
`

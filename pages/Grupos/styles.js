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

export const ContainerGrupos = styled.View`
  width:100%;
  marginTop: 8px;
  flex:1;
  alignItems: center;
`;

export const Grupos = styled.Text`
 color:#fff;
 font-size:14px;
 text-align:justify;
 padding-top:5px;

`
export const Button = styled.TouchableOpacity`
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
export const GrupoButton = styled.TouchableOpacity`
padding: 10px;
width:100%;
maxWidth: 200px;
background-color: #570c39;
border:1px solid #fff;
border-radius:5px;
justify-content:center;
align-items:center;
marginBottom: 8px;
`

export const GrupoButtonText = styled.Text`
color: #fff;
font-size:16px;
font-weight:600;
`

export const GruposTitulo = styled.Text`
color: #fff;
font-size:24px;
font-weight:bold;
marginBottom: 24px;
`
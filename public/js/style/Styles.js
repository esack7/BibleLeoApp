import styled, { injectGlobal } from 'styled-components';
import reset from './Reset';

const BaseStyles = () => injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Permanent+Marker');
  ${reset};
`;

const AppContain = styled.div`
  max-width: 960px;
  background: #FFF6E2;
`;

const Title = styled.h1`
  margin: 10px;
  color: #7B8BB2;
  font-size: 48px;
  font-family: 'Permanent marker', cursive;
`;

const TextBox = styled.div`
  color: black;
  display: block;
  width: 75%;
  max-width: 665px;
  margin: auto;
`;

const ScriptureReference = styled.h3`
  font-size: 18px;
  color: #C9D9FF;
  margin: 25px;
  display: block;
`;

const VerseParagraph = styled.p`
  margin-bottom: 15px;
`;

const Notification = styled.h3`
  color: #B29D69;
  font-size: 18px;
  font-style: bold;
`;

const HeaderComponent = styled.header`
  border-bottom: 1px #B29D69 solid;
`

export { BaseStyles, AppContain, Title, TextBox, ScriptureReference, VerseParagraph, Notification, HeaderComponent };

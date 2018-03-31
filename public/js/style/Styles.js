import styled, { injectGlobal } from 'styled-components';
import reset from './Reset';

const BaseStyles = () => injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Permanent+Marker');
  ${reset};
`;

const AppContain = styled.div`
  max-width: 960px;
  background: hsl(220, 13%, 18%);
`;

const Title = styled.h1`
  margin: 10px;
  color: hsl(207, 82%, 66%);
  font-size: 48px;
  font-family: 'Permanent marker', cursive;
`;

const TextBox = styled.div`
  color: white;
  display: block;
  width: 75%;
  max-width: 665px;
  margin: auto;
`;

const ScriptureReference = styled.h3`
  font-size: 18px;
  color: hsl(220, 14%, 71%);
  margin: 25px;
  display: block;
`;

const VerseParagraph = styled.p`
  margin-bottom: 15px;
`;

export { BaseStyles, AppContain, Title, TextBox, ScriptureReference, VerseParagraph };

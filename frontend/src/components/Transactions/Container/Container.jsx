import { ContainerStyle } from './Container.styled.js';

const Container = ({ children, matches }) => {
  return (
          <ContainerStyle matches={matches}>
            {children}
          </ContainerStyle>
    );
};

export default Container;
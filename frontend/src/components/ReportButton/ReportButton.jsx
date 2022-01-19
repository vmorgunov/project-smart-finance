import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Title, Image, Container } from './ReportButton.styled';                
                    
export const ReportButton = () => {                    
  return (
      <Navigation router="/transaction">
          <Container>
            <Image />
              <Title>
                  Вернутся на главную
               </Title>
          </Container >
      </Navigation>     
    );
};
    
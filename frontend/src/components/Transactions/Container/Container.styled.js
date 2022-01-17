import styled from "@emotion/styled";

export const ContainerStyle = styled.div`
    position: relative;
    margin: 0 auto;

    max-width: ${({matches}) => matches.small ? '320px' : matches.medium ? '768px' : matches.large && '1280px'};
    padding: ${({matches}) => matches.small ? '0 19px' : matches.medium ? '0 51px' : matches.large && '0 110px'};
    padding-bottom: ${({matches}) => matches.small ? '0' : matches.medium ? '57px' : matches.large && '83px'};

    height: ${({matches}) => matches.small ? '257px' : matches.medium ? '527px' : matches.large && '527px'};

`

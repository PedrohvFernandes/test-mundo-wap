import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding-inline: 1rem;
  padding-block: 6rem;

  @media ${props => props.theme.deviceMax.laptop} {
    padding-inline: 6rem;
    flex-direction: row;
  }
`

export const ImageDiv = styled.div`
  width: 13rem;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media ${props => props.theme.deviceMax.laptop} {
    width: 24rem;
  }
`

export const SubContainer = styled.div`
  width: 100%;
  padding-bottom: 3rem;

  @media ${props => props.theme.deviceMax.laptop} {
    padding-bottom: 0;
  }

  @media ${props => props.theme.deviceMax.mobileL} {
    padding-top: 6rem;
    width: 50%;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const Title = styled.h1`
  margin-block: 0.5rem;
  font-weight: 700;
  font-size: ${props => props.theme.font.defaultL};
  line-height: 2rem;
`

export const Description = styled.p`
  margin-block: 0.5rem;
  font-size: ${props => props.theme.font.defaultL};
  line-height: 2rem;
  font-weight: 700;
`
export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

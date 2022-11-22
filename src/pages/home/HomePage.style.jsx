import styled from 'styled-components'

export const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 5%;
  margin-top: 20px;
`

export const SummaryWrapper = styled.div`
  border: 1px solid #e0e0e0;
  padding: 2.5%;
  border-radius: 5px;
  text-align: center;
`

export const CategoryImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid #e0e0e0;
  padding: 10px;

  @media (max-width: 1200px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 960px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 895px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 482px) {
    width: 110px;
    height: 110px;
  }
`

export const ProductExampleImage = styled.img`
  width: 100%;
  border-radius: 5px;
`

import React, { Component } from 'react';
import styled from 'styled-components';

const ContentSlider = styled.div`
  width: 100%;
  background: linear-gradient(to right, #992836, #4D141B);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 0 0;
  margin-bottom: 5rem;
`;

const ContentTitleSlider = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  hr {
    width: 15%;
    border: 1px solid #FFFFFF;
    opacity: 1;
  }
`;

const TitleSlider = styled.h2`
  width: 65%;
  color: #FFFFFF;
  font-family: 'Product Sans', Bold;
  text-align: center;
  text-transform: uppercase;
  margin-top: 2rem;
  opacity: 1;

  @media (max-width: 648px) {
    width: 80%;
	}
`;

const CarouselSlider = styled.div`
  width: 100%;
  margin: 6rem 0 3rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 648px) {
    width: 90%;
    margin: 4rem 0 2rem;
    align-items: center;
	}
`;

const SessionSlider = styled.section`
  display: flex;
  justify-content: space-around;
  border-radius: 4px;
  order: ${props => (props.order)};

  @media (max-width: 648px) {
    margin-right: 4rem;
    order: ${props => (props.orderMobile)};
	}
`;

const ContentSliderBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
 
  @media (max-width: 648px) {
    height: 50%;
    padding-left: 1rem;
    flex-direction: row;
    justify-content: flex-start;
    overflow-x: scroll;
    overflow-y: hidden;
	}
`;

const ContentSliderMeio = styled.div`
  width: 63%;
  background-color: #FFFFFF;
  color: #373737;
  font-size: 0.7rem;
  font-family: 'Open Sans', Regular;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding: 2rem 1.2rem 1rem;
  margin-bottom: 3.5rem;
  outline: none;
  transform: ${props => (props.transformScale && 'scale(1.4)')};

  @media (max-width: 1024px) {
    width: 70%;
	}

  @media (max-width: 648px) {
    width: 250px;
    transform: none;
	}
`;

const ContentSliderParagraph = styled.p`
  margin-top: 2rem;
`;

const SliderCarousel = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  cursor: pointer;

  @media (max-width: 425px) {
    width: 80%;
	}
`;

const SliderBolinha = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  border: 1px solid #E0E0E0;
  background-color: #E0E0E0;
  margin-left: 1.3rem;
  cursor: pointer;

  &:hover {
    background-color: #FFFFFF;
  }
`;


class Slider extends Component {
  state = {
    slider: undefined,
  }

  handleSlider = (item) => {
    this.setState({
      slider: item,
    })
  }

  render() {
    const { slider } = this.state;

    const orderDesktop1 = slider === '0' ? 1 : 0;
    const orderMobile1 = slider === '1' ? 0 : 1;
    const orderDesktop2 = (!slider && 1) || (slider === '2' && 2);
    const orderMobile2 = !slider && 0;
    const orderDesktop3 = slider === '2' ? 1 : 2;
    const orderMobile3 = slider === '2' ? 0 : 2;

    return (
      <ContentSlider>
        <ContentTitleSlider>
          <hr></hr>
          <TitleSlider>o que nossos clientes falam da gente!!</TitleSlider>
        </ContentTitleSlider>
        <CarouselSlider>
          <ContentSliderBox>
            <SessionSlider order={orderDesktop1} orderMobile={orderMobile1}>
              <ContentSliderMeio transformScale={slider === '0'}>
                <p>"Estamos muito satisfeitos com o atendimento
                  personalizado da Sedimenta JPM. Contabilidade não é
                  só número! E nós sabemos que podemos contar com eles."</p>
                <ContentSliderParagraph>Plano B</ContentSliderParagraph>
              </ContentSliderMeio>
            </SessionSlider>
            <SessionSlider order={orderDesktop2} orderMobile={orderMobile2}>
              <ContentSliderMeio transformScale={(!slider && '1' || slider === '1')}>
                <p>A Sedimenta JPM é uma empresa muito competente. Desde 2017 tem
                  nos auxiliado em todas as questões contábeis e financeiras do
                  Instituto sempre com muita agilidade, destreza técnica e simpatia.</p>
                <ContentSliderParagraph>Instituto Precisa Ser</ContentSliderParagraph>
              </ContentSliderMeio>
            </SessionSlider>
            <SessionSlider order={orderDesktop3} orderMobile={orderMobile3}>
              <ContentSliderMeio transformScale={slider === '2'}>
                <p>Uma empresa que tem como Meta a qualidade nos serviços
                  e no atendimento ao Cliente. Outro diferencial é a Competência,
                  honestidade e seriedade.</p>
                <ContentSliderParagraph>Erlane, cargo, Empresa</ContentSliderParagraph>
              </ContentSliderMeio>
            </SessionSlider>
          </ContentSliderBox>
          <SliderCarousel>
            <SliderBolinha onClick={() => this.handleSlider('0')}></SliderBolinha>
            <SliderBolinha onClick={() => this.handleSlider('1')}></SliderBolinha>
            <SliderBolinha onClick={() => this.handleSlider('2')}></SliderBolinha>
          </SliderCarousel>
        </CarouselSlider>
      </ContentSlider >
    )
  }
}

export default Slider;
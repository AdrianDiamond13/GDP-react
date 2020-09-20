

import React , { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import Slider from 'react-slick';

const Wrapper = styled.div`
    width: 100%;
    padding: 40px;
`;

const Page = styled.div`
    width: 100%;
    color:blue;
`;



class SlideView extends Component{
    render(){
        return(
            <Wrapper>
                <Slider 
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    infinite={true}
                    dots={true}
                >
                <Page>Page One</Page>
                <Page>Page Two</Page>
                <Page>Page Three</Page>
            
                
                </Slider>


            </Wrapper>
            
        );
    }

}

export default SlideView;
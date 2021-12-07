import React, { useState } from 'react';
import './Work.css';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SingleWork from './SingleWork/SingleWork';
import { connect } from 'react-redux';
import { addTocart } from '../../../redux/actions/cartActions';
import { Button, Container } from 'react-bootstrap';
import more1 from '../../../images/more1.png';
import more2 from '../../../images/more2.png';



const Work = (props) => {
    let [visible, setVisible] = useState(9);
    let [visibleButton, setVisibleButton] = useState(true);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 1);
        setVisibleButton(false);
    }
    const hideMoreItems = () => {
        setVisible((prevValue) => prevValue - 1);
        setVisibleButton(true);
    }

    // console.log(props)
    const { works } = props;
    // console.log(works)
    return (
        <div id="work" style={{ backgroundColor: 'rgb(238, 238, 238)' }}>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                <Masonry className="test" gutter="1" >

                    {
                        works.slice(0, visible).map(work => <SingleWork work={work}></SingleWork>)
                    }

                </Masonry>
            </ResponsiveMasonry>
            {/* <Button variant="primary" className="show-more-btn" onClick={showMoreItems}>FOR MORE WORK</Button> */}
            <h4 className="show-more text-center">FOR MORE WORK VISIT</h4>
            <Container Fluid>
                <div className="for-more-work">
                    <div className="for-more-work-link">
                        <a target="_blank" rel="noreferrer" href="https://flic.kr/s/aHsmR1icej"><img src={more1} alt="" /></a>
                        <a target="_blank" rel="noreferrer" href="https://www.behance.net/rayhancpam3a01"><img src={more2} alt="" /></a>
                    </div>
                </div>
            </Container>

            }

        </div>
    );
};


const mapStateToProps = state => {
    return {
        cart: state.cart,
        works: state.works
    }
}

const mapDispatchToProps = {
    addTocart: addTocart
}

// const connectToState = connect(mapStateToProps, mapDispatchToProps);

// connectToState(Work);
// connect(mapStateToProps, mapDispatchToProps)(Work);

export default connect(mapStateToProps, mapDispatchToProps)(Work);
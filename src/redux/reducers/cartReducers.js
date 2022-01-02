import { ADD_TO_CART } from "../actions/cartActions";
import { REMOVE_FROM_CART } from "../actions/cartActions";

import image1 from '../../images/img/cover1.jpeg';
import image2 from '../../images/img/cover2.jpeg';
import image3 from '../../images/img/cover3.jpeg';
import image4 from '../../images/img/cover4.jpeg';
import image5 from '../../images/img/cover5.jpeg';
import image6 from '../../images/img/cover6.jpeg';
import image7 from '../../images/img/cover7.jpeg';
import image8 from '../../images/img/cover8.jpeg';
import image9 from '../../images/img/cover9.jpeg';
import image10 from '../../images/img/cover10.jpeg';
import manavatar from './../../images/manavatar.jpg'
import womanavatar from './../../images/womanavatar.jpg'

const initialState = {
    cart: [],
    works: [
        {
            name: 'Rayhan Shahariar',
            worklink: 'https://youtu.be/M9z1dHmigIM',
            image: image1

        },
        {
            name: 'Rayhan Shahariar',
            worklink: 'https://youtu.be/zf63Bl145a0',
            image: image2

        },
        {
            name: 'Rayhan Shahariar',
            worklink: 'https://youtu.be/QUsl10JYtJc',
            image: image3

        },

        {
            name: 'Rayhan Shahariar',
            worklink: 'https://youtu.be/UJ3dq28gugs',
            image: image4

        },
        {
            name: 'Rayhan Shahariar',
            worklink: 'https://youtu.be/-g-Lg2r2z9s',
            image: image5

        },
        {
            name: 'Rayhan Shahariar',
            worklink: 'https://youtu.be/smnKf2ElK8c',
            image: image6

        },
        {
            name: 'Rayhan Shahariar',
            worklink: 'https://youtu.be/Gg0ffvDQZog',
            image: image7

        },
        {
            name: 'Rayhan Shahariar',
            worklink: 'https://youtu.be/q5g92yGzKlc',
            image: image8

        },
        {
            name: 'Rayhan Shahariar',
            worklink: 'https://www.youtube.com/watch?v=OqnZzSpqKMs',
            image: image9

        },
        {
            name: 'Rayhan Shahariar',
            worklink: 'https://youtu.be/tyaGMPiMXjY',
            image: image10

        }
    ],
    reviews: [
        {
            name: 'Christine Marie',
            position: 'CEO',
            message: 'I have been using Rayhan for all of my presentation slides. He is Responsive, has excellent communication skills and completes assignments quickly. I highly recommend him.',
            image: womanavatar

        },
        {
            name: 'Paul Burke',
            position: 'Marketing Manager',
            message: 'I am extremely happy with Rayhan and his work. His communication is clear and precise. He was extremely responsive and got the job done quickly. I highly recommend him and will look forward to working with him in the future.',
            image: manavatar

        },
        {
            name: 'Jasmin Ahmed',
            position: 'Doctor',
            message: 'There are many skilled people on the this market place site but often communication and delivery can take a considerable amount of one’s time to receive a final product. Rayhan was definitely the exception to this common problem. He was articulate, precise and delivered a high-class result with no extra effort from myself. He truly made the whole experience a pleasure. Thank you Rayhan, 110% Recommendation. I look forward to working with you again soon',
            image: womanavatar

        },
        {
            name: 'David Pultorak',
            position: 'Author',
            message: 'Outstanding experience ! You can trust M. Rayhan Shahariar : he will be a great asset for any of your projects. I will work with him again.',
            image: manavatar

        }

    ]
}
const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newId = action.id;
            const newCart = [...state.cart, newId];
            return {
                cart: newCart
            };
        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item !== id);
            return {
                cart: remainingCart
            }
        default:
            return state;
    }
}
export default cartReducers;
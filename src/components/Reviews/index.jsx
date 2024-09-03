import React from 'react';
import City from './City';
import Food from './Food';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Toast from '../props/Toast';
import Drink from './Drink';

function Reviews() {
    const [focus, setFocus] = React.useState(false);
    const _component = {
        city: <City />,
        food: <Food />,
        drink: <Drink />
    }
    return (
        <>
            <div className="container my-2">
                <div className='text-center'>
                    <ResponsiveMasonry columnsCountBreakPoints={
                        {
                            100: 1,
                            200: 2,
                            300: 3
                        }
                    }>
                        <Masonry> {
                            ["City", "Food", "Drink"].map((text, index) => <Toast styles="m-2 border border-dark" text={text} _c="light" populate={() => setFocus(text.toLowerCase())} key={index} />)
                        }
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
                {_component[focus]}
            </div>
        </>)
}

export default Reviews

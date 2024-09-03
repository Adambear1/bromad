import React from 'react'
import Card from '../props/Card'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Toast from '../props/Toast';
import Modal from "../props/Modal"
import { titleCase } from "../../utils/index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


function Food() {
    const [selected, setSelected] = React.useState("");
    const [show, setShow] = React.useState(false);
    const [selectedReview, setSelectedReview] = React.useState({ name: "", attributes: [], description: "", rating: 0, pros: [], cons: [], photos: [], formatted_description: "" })
    const showRelated = (type) => {
        setSelected(type);
    };
    const categories = [
        { text: "healthy", color: "primary" },
        { text: "traditional", color: "light" },
        { text: "snacky", color: "green" },
        { text: "dessert", color: "yellow" },
        { text: "breakfast", color: "light_blue" },
        { text: "exotic", color: "gray" },
        { text: "soup", color: "black" },
    ];
    const reviews = [
        {
            name: "Elote",
            attributes: ["traditional", "snacky", "dessert"],
            rating: 5,
            description: "Review ex"
        },
        {
            name: "Churros",
            attributes: ["traditional", "snacky", "dessert"],
            rating: 3,
            description: "Review ex for new age investing",
        },
        {
            name: "Chilaquiles",
            attributes: ["traditional", "breakfast"],
            rating: 2,
            description: "Review ex for new age investing",
        },
        {
            name: "Pozole",
            attributes: ["traditional", "soup"],
            rating: 4,
            description: "Review ex for new age investing",
        },
        {
            name: "Mole",
            attributes: ["traditional", "healthy"],
            rating: 3,
            description: "Review ex for new age investing",
        },
        {
            name: "Birria",
            attributes: ["traditional", "healthy", "soup"],
            rating: 5,
            description: "Review ex for new age investing",
        },
    ]
    return (
        <>
            <div className="container my-2">
                <h1 className='text-center'>FOOD REVIEWS</h1>
                <div className='text-center'>
                    <ResponsiveMasonry columnsCountBreakPoints={
                        {
                            350: 1,
                            750: 2,
                            900: 3
                        }
                    }>
                        <Masonry> {
                            categories.map(({ text, color } , index) => <Toast styles="m-2 border border-secondary" text={text} key={index} _c={color} populate={showRelated} />)
                        }
                        </Masonry>
                    </ResponsiveMasonry>
                    <Toast styles="m-2 border border-dark w-100" text={selected === "View All" ? "Clear All" : "View All"} _c={"light"} populate={selected === "View All" ? () => setSelected("") : showRelated} />
                </div>
            </div>
            <div className="container my-5 ">

                <div className='text-center'>
                    <h1>{titleCase(selected)}</h1>
                    {
                        reviews.filter((review) => selected === "View All" ? true : review.attributes.includes(selected)).sort((a, b) => a.name.localeCompare(b.name)).map(({ name, attributes, description, photos, rating, pros, cons }, index) =>
                                <Card name={titleCase(name)} cta={() => {
                                    setSelectedReview({ name, attributes, description, photos, rating, pros, cons })
                                    setShow(true)
                                }}
                                    pointer={true}
                                    key={index}
                                />
                        )

                    }
                    {show && <Modal title={
                        selectedReview.attributes.map((attribute, index) => <Toast
                            style={"m-2"}
                            key={index}
                            _c={categories.map(({ text, color }) => text === attribute && color).filter(i => i)[0]}
                            text={attribute}
                            disabled={true}
                        />
                        )
                    }
                        info={
                            <>
                                {Array(selectedReview.rating).fill(0).map((_, i) => i + 1).map((ind, index) => <FontAwesomeIcon key={index} icon={faStar} color='orange' />)}
                                {Array(Math.abs(selectedReview.rating - 5)).fill(0).map((_, i) => i + 1).map((ind, index) => <FontAwesomeIcon key={index} icon={faStar} color='light-gray' />)}
                                <p>
                                    {selectedReview.description}
                                </p>

                            </>
                        }
                        show={show}
                        setShow={setShow} />}
                </div>
            </div>
        </>
    )
}

export default Food
import React from 'react'
import Card from '../props/Card'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Toast from '../props/Toast';
import Modal from "../props/Modal"
import { titleCase } from "../../utils/index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


function Drink() {
    const [selected, setSelected] = React.useState("");
    const [show, setShow] = React.useState(false);
    const [selectedReview, setSelectedReview] = React.useState({ name: "", attributes: [], description: "", rating: 0, pros: [], cons: [], photos: [], formatted_description: "" })
    const showRelated = (type) => {
        setSelected(type);
    };
    const categories = [
        { text: "exotic", color: "gray" },
        { text: "fancy", color: "black" },
        { text: "casual", color: "primary" },
        { text: "traditional", color: "light" },
        { text: "flavorful", color: "green" },
        { text: "alcoholic", color: "yellow" },
    ];
    const reviews = [
        {
            name: "Sangria",
            attributes: ["traditional", "flavorful", "fancy", "alcoholic"],
            rating: 4,
            description: "Review ex"
        },
        {
            name: "Vino Tinto",
            attributes: ["fancy", "alcoholic"],
            rating: 5,
            description: "Review ex for new age investing",
        },
        {
            name: "Vino Blanco",
            attributes: ["fancy", "alcoholic"],
            rating: 5,
            description: "Review ex for new age investing",
        },
        {
            name: "Mezcal",
            attributes: ["traditional", "exotic", "alcoholic"],
            rating: 2,
            description: "Review ex for new age investing",
        },
        {
            name: "Margarita",
            attributes: ["traditional", "casual", "flavorful", "alcoholic"],
            rating: 2,
            description: "Review ex for new age investing",
        },
        {
            name: "Paloma",
            attributes: ["traditional", "casual", "flavorful", "alcoholic"],
            rating: 2,
            description: "Review ex for new age investing",
        },
        {
            name: "Pina Colada",
            attributes: ["traditional", "casual", "flavorful", "alcoholic"],
            rating: 2,
            description: "Review ex for new age investing",
        },
        {
            name: "Agua Frescas",
            attributes: ["traditional", "casual", "flavorful"],
            rating: 2,
            description: "Review ex for new age investing",
        },
    ]
    return (
        <>
            <div className="container my-2">
                <h1 className='text-center'>DRINK REVIEWS</h1>
                <div className='text-center'>
                    <ResponsiveMasonry columnsCountBreakPoints={
                        {
                            350: 1,
                            750: 2,
                            900: 3
                        }
                    }>
                        <Masonry> {
                            categories.map(({ text, color }) => <Toast styles="m-2 border border-secondary" text={text} _c={color} populate={showRelated} />)
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
                        reviews.filter((review) => selected === "View All" ? true : review.attributes.includes(selected)).sort((a, b) => a.name.localeCompare(b.name)).map(({ name, attributes, description, photos, rating, pros, cons }) =>
                            <>
                                <Card name={titleCase(name)} cta={() => {
                                    setSelectedReview({ name, attributes, description, photos, rating, pros, cons })
                                    setShow(true)
                                }}
                                    pointer={true}
                                />
                            </>
                        )

                    }
                    {show && <Modal title={
                        selectedReview.attributes.map((attribute, index) => <Toast
                            style="m-2"
                            key={index}
                            _c={categories.map(({ text, color }) => text === attribute && color).filter(i => i)[0]}
                            text={attribute}
                            disabled={true}
                        />
                        )
                    }
                        info={
                            <>
                                {Array(selectedReview.rating).fill(0).map((_, i) => i + 1).map((ind, index) => <FontAwesomeIcon key={ind} icon={faStar} color='orange' />)}
                                {Array(Math.abs(selectedReview.rating - 5)).fill(0).map((_, i) => i + 1).map((ind, index) => <FontAwesomeIcon key={ind} icon={faStar} color='light-gray' />)}
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

export default Drink
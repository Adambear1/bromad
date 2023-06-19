import React from 'react'
import Card from '../props/Card'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Toast from '../props/Toast';
import Modal from "../props/Modal"
import { titleCase } from "../../utils/index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function City() {
    const [selected, setSelected] = React.useState("");
    const [show, setShow] = React.useState(false);
    const [selectedCity, setSelectedCity] = React.useState({ name: "", attributes: [], description: "", rating: 0, pros: [], cons: [], photos: [], formatted_description: "" })
    const showRelated = (type) => {
        setSelected(type);
    };
    const categories = [
        { text: "expensive", color: "green" },
        { text: "affordable", color: "turquoise" },
        { text: "touristy", color: "black" },
        { text: "historic", color: "yellow" },
        { text: "nature driven", color: "light_blue" },
        { text: "tranquil", color: "gray" },
        { text: "adventurous", color: "light" },
        { text: "food culture", color: "primary" },
        { text: "night life", color: "red" },
    ];
    const cities = [
        {
            name: "Mexico City",
            attributes: ["expensive", "historic", "touristy", "adventurous", "food culture", "night life"],
            description: "Mexico is absolutely unbelievable. I think its a place everyone needs to visit at least once. Food galore, endless parks, and history at every foot step. With it being one of the largest cities in the world it does come with its downfalls-- noise, traffic, and construction-- however, the trade off is totally worth it. You can order $100 USD plates per meal, or order .50c tacos on the same block. You have ritzy skyscrapers and smaller bodegas and lofts. If you go to visit, bring your best walking shoes because you're going to be walking from sunrise to past sun down. Not once did I feel unsafe or uncomfortable, instead quite the opposite. There were times I got hungry 10PM, 11PM at night, walked down to the nearest taco stand, had to wait 30 minutes to place an order, met new friends and had some of the best tacos ever. The city truly never sleeps.",
            photos: [""],
            rating: 5,
            pros: ["Historic", "Food", "Night Life", "Shopping", "Nature", "Culture"],
            cons: ["Crowded", "Expensive", "Traffic", "Construction"]
        },
        {
            name: "Bacalar",
            attributes: ["nature driven", "affordable", "tranquil", "adventurous"],
            description: "A description of Bacalr.",
            rating: 4,
            pros: ["Nature", "Beautiful", "Affordable", "Quaint", "Tranquil"],
            cons: ["Under Developed", "Small", "Location"]
        },
        {
            name: "Patzcuaro",
            attributes: ["historic"],
            description: "A description of Patzcuaro.",
            rating: 3,
            pros: ["Historic", "Unique", "Location"],
            cons: ["Food", "Dirty", "Poor"]
        },
        {
            name: "Zurahuen",
            attributes: ["tranquil", "nature driven", "affordable"],
            description: "A description of zuraheun.",
            rating: 4,
            pros: ["Tranquil", "Location", "Affordable"],
            cons: ["Location", "Poor"]
        },
        {
            name: "Morelia",
            attributes: ["historic", "affordable", "night life", "food culture"],
            description: "A description of Morelia.",
            rating: 3,
            pros: ["Historic", "Night Life", "Food Culture", "Location"],
            cons: ["Dirty", "Poor", "Crowded"]
        },
        {
            name: "Valle de Bravo",
            attributes: ["historic", "tranquil", "adventurous", "nature driven"],
            description: "A description of valle de bravo.",
            rating: 4,
            pros: ["Tranquil", "Adventurous"],
            cons: ["Location"]
        },
        {
            name: "Cancun",
            attributes: ["expensive", "touristy", "night life"],
            description: "I did not like Cancun one bit. Its dirty, overcrowded, and expensive. It doesn't have that authentic Mexican feel, but instead is a smaller version of Miami. If you want to party and do nothing more, sure. Its fine. For people that actually want to travel, explore, and try new things, I do not recommend.",
            rating: 1,
            pros: ["Location"],
            cons: ["Dirty", "Overcrowded", "Expensive"]
        },
        {
            name: "Playa Del Carmen",
            attributes: ["expensive", "touristy", "night life"],
            description: "A description of Playa Del Carmen.",
            rating: 2,
            pros: ["Location", "Food Culture"],
            cons: ["Dirty", "Overcrowded", "Expensive"]
        },
        {
            name: "Puerto Vallarta",
            attributes: ["touristy", "adventurous"],
            description: "A description of Puerto Vallarta.",
            rating: 3,
            pros: ["Location", "Adventurous", "Nature Driven", "Night Life"],
            cons: ["Crowded", "Traffic", "Construction", "Expensive"]
        },
        {
            name: "Malinalco",
            attributes: ["nature driven", "tranquil", "adventurous"],
            description: "A description of Malinalco.",
            rating: 4,
            pros: ["Tranquil", "Adventurous"]
        },
        {
            name: "Queretero",
            attributes: ["historic", "affordable", "food culture"],
            description: "A description of Malinalco.",
            rating: 4,
            pros: ["History", "Affordable", "Food Culture"],
            cons: ["Crowded", "Dry"]
        },

    ]
    return (
        <>
            <div className="container my-2">
                <h1 className='text-center'>CITY REVIEWS</h1>
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
                    <Toast styles="m-2 border border-dark w-100" text={selected === "View All" ? "Clear All" : "View All"} _c={"light"} populate={selected === "View All" ? ()=>setSelected("") : showRelated} />
                </div>
            </div>
            <div className="container my-5 ">

                <div className='text-center'>
                    <h1>{titleCase(selected)}</h1>
                    {
                        cities.filter((city) => selected === "View All" ? true : city.attributes.includes(selected)).sort((a, b) => a.name.localeCompare(b.name)).map(({ name, attributes, description, photos, rating, pros, cons }) =>
                            <>
                                <Card name={titleCase(name)} cta={() => {
                                    setSelectedCity({ name, attributes, description, photos, rating, pros, cons })
                                    setShow(true)
                                }}
                                    pointer={true}
                                />

                            </>
                        )

                    }
                    {show && <Modal title={
                        selectedCity.attributes.map((attribute, index) => <Toast
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
                                {Array(selectedCity.rating).fill(0).map((_, i) => i + 1).map((ind, index) => <FontAwesomeIcon key={ind} icon={faStar} color='orange' />)}
                                {Array(Math.abs(selectedCity.rating - 5)).fill(0).map((_, i) => i + 1).map((ind, index) => <FontAwesomeIcon key={ind} icon={faStar} color='light-gray' />)}
                                <p>
                                    {selectedCity.description}
                                </p>
                                <br />
                                <br />
                                <p>
                                    <b>Pros: </b>{selectedCity.pros.map(pro =>
                                        <Toast styles="m-1" _c={"light_blue"} text={pro} disabled={true} />
                                    )}
                                    <br />
                                    <br />
                                    <b>Cons: </b> {selectedCity.cons.map(con =>
                                        <Toast styles="m-1" _c={"black"} text={con} disabled={true} />
                                    )}
                                </p></>
                        }
                        show={show}
                        setShow={setShow} />}
                </div>
            </div>
        </>
    )
}

export default City
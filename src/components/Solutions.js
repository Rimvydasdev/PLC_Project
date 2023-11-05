import React from 'react'
import "./styles/Styles.css"

function Solutions() {

    const Card = ({ item }) => {
        return (
            <div className='solution-card'>
                <img className='solution-img' src={item.image} alt={item.title} />
                <h2 className='solution-title'>{item.title}</h2>
                <p className='solution-desc'>{item.desc}</p>
            </div>
        )
    }

    const solution = [
        {
            "id": "1",
            "image": "https://teltonika-networks.com/cdn/extras/11733/easy-customizable-remote-capabilities-for-siemens-plcsjpe.webp",
            "title": "title 1",
            "desc": "trumpas aprasymas apie paslauga/sprendima"
        },
        {
            "id": "2",
            "image": "https://www.cignoli.it/wp-content/uploads/2020/12/cignoli-elettroforniture-installazione-industriale-automazione-illuminazione-43.jpg",
            "title": "title 2",
            "desc": "trumpas aprasymas apie paslauga/sprendima"
        },
        {
            "id": "3",
            "image": "https://www.lrt.lt/img/2020/10/06/735666-449593-756x425.jpg",
            "title": "title 3",
            "desc": "trumpas aprasymas apie paslauga/sprendima"
        },
        {
            "id": "4",
            "image": "https://originbd.net/wp-content/uploads/2019/04/9-plc-programming.jpg",
            "title": "title 4",
            "desc": "trumpas aprasymas apie paslauga/sprendima"
        },
        {
            "id": "5",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Ac-elektromotor-robuster-asynchronmotor.jpg/640px-Ac-elektromotor-robuster-asynchronmotor.jpg",
            "title": "title 5",
            "desc": "trumpas aprasymas apie paslauga/sprendima"
        },
    ]
    return (
        <div>
            <div className="solution-container d-flex flex-wrap align-items-center justify-content-center">
                {solution.map((item, index) => {
                    return (
                        <Card key={index} item={item} />
                    )
                })}
            </div>
        </div>
    )
}

export default Solutions


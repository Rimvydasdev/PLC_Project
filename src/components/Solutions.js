import React from 'react'
import "./styles/Styles.css"

function Solutions() {

    const Card = ({ item }) => {
        return (
            <div className='solution-card'>
                <img className='solution-img' src={item.image} alt={item.title} />
                <p className='solution-title'>{item.title}</p>
                <div className='solution-line'>
                    <div className='solution-hr-line'></div>
                </div>
                <p className='solution-desc'>{item.desc}</p>
            </div>
        )
    }

    const solution = [
        {
            "id": "1",
            "image": "https://blogs.sw.siemens.com/wp-content/uploads/sites/43/2021/11/Keyvis_FM600_03_2021_UHD-scaled.jpg",
            "title": "DESIGN",
            "desc": "Process control and automation design."
        },
        {
            "id": "2",
            "image": "https://www.cignoli.it/wp-content/uploads/2020/12/cignoli-elettroforniture-installazione-industriale-automazione-illuminazione-43.jpg",
            "title": "PROGRAMMING",
            "desc": "PLC, SCADA and HMI programming"
        },
        {
            "id": "3",
            "image": "https://stamh.com/img/thumb/600x450/crop/cms/0/%D0%A0%D0%BE%D0%B1%D0%BE%D1%82%D0%B8_%D0%B7%D0%B0_%D0%B7%D0%B0%D0%B2%D0%B0%D1%80%D1%8F%D0%B2%D0%B0%D0%BD%D0%B5_%D1%80%D1%8F%D0%B7%D0%B0%D0%BD%D0%B5_%D1%88%D0%BB%D0%B0%D0%B9%D1%84%D0%B0%D0%BD%D0%B5_1.jpg",
            "title": "INDUSTRIAL ROBOTS",
            "desc": "Programmable industrial robots"
        },
        {
            "id": "4",
            "image": "https://originbd.net/wp-content/uploads/2019/04/9-plc-programming.jpg",
            "title": "MANUFACTURING OF CONTROL CABINETS",
            "desc": "Assembly of control cabinets."
        },
        {
            "id": "5",
            "image": "https://teltonika-networks.com/cdn/extras/11733/easy-customizable-remote-capabilities-for-siemens-plcsjpe.webp",
            "title": "AUTOMATION & ELECTRICAL EQUIPMENT",
            "desc": "Supply of electrical equipment and automation components."
        },
        {
            "id": "6",
            "image": "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_Computer_Vision.jpg",
            "title": "MACHINE VISION SOLUTIONS",
            "desc": "Development and adjustment of machine vision systems."
        },
    ]
    return (
        <div className='solutions'>
            <div className="solution-container">
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


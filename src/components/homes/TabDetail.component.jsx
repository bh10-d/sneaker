import { useState } from 'react';
import CardHome from './CardHome.component';


const New = ({ data, images }) => {
    return (
        <>
            <div
                className="tab-pane p-0 fade show active"
                id="top-all-tab"
                role="tabpanel"
                aria-labelledby="top-all-link"
            >
                <div className="products just-action-icons-sm">
                    <div className="row">
                        {data.map((product, index) => (
                            <CardHome key={index} product={product} path={images} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}


const TopSelling = ({ data, images }) => {
    return (
        <>
            top selling
            <div
                className="tab-pane p-0 fade show active"
                id="top-all-tab"
                role="tabpanel"
                aria-labelledby="top-all-link"
            >
                <div className="products just-action-icons-sm">
                    <div className="row">
                        {data.map((product, index) => (
                            <CardHome key={index} product={product} path={images} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

const Sale = ({ data, images }) => {
    return (
        <>
            sale
            <div
                className="tab-pane p-0 fade show active"
                id="top-all-tab"
                role="tabpanel"
                aria-labelledby="top-all-link"
            >
                <div className="products just-action-icons-sm">
                    <div className="row">
                        {data.map((product, index) => (
                            <CardHome key={index} product={product} path={images} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}


const TabDetail = ({ tab, data, images }) => {
    if (tab == 'New') {
        return (<New data={data} images={images} />)
    }
    if (tab == 'Top selling') {
        return (<TopSelling data={data} images={images} />)
    }
    if (tab == 'Sale') {
        return (<Sale data={data} images={images} />)
    }
}

export default TabDetail; 
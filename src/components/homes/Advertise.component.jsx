const List_Advertise = [
    {
        title: 'Free Shipping',
        text: 'Orders $50 or more',
        icon: 'icon-rocket'
    },
    {
        title: 'Free Returns',
        text: 'Within 30 days',
        icon: 'icon-rotate-left'
    },
    {
        title: 'Get 20% Off 1 Item',
        text: 'when you sign up',
        icon: 'icon-info-circle'
    },
    {
        title: 'We Support',
        text: '24/7 amazing services',
        icon: 'icon-life-ring'
    },
]

const Advertise = ()=>{
    return (
        <>
            {List_Advertise.map(ad=>(
                <div className="col-sm-6 col-lg-3" key={ad.title}>
                    <div className="icon-box icon-box-side">
                    <span className="icon-box-icon text-primary">
                        <i className={ad.icon}></i>
                    </span>

                    <div className="icon-box-content">
                        <h3 className="icon-box-title">{ad.title}</h3>
                        <p>{ad.text}</p>
                    </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Advertise;
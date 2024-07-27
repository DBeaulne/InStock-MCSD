import './WarehouseList.scss';

const Warehouse = ({name, number, email, location, address, deletewarehouse, editwarehouse}) => {
    return (
        <>
        <div className="warehouse">
            <div className="warehouse__wrapper warehouse__wrapper--left">
                <div className='warehouse__wrapper--inner'>
                    <section className='warehouse__section-wrapper'> 
                        <h4 className='warehouse__sub-title'>WAREHOUSE</h4>
                        <p className='warehouse__text warehouse__text--bold-blue-font'>{location}</p>
                    </section>
                    <section className='warehouse__section-wrapper'> 
                        <h4 className='warehouse__sub-title'>ADDRESS</h4>
                        <p className='warehouse__text'>{address}</p>
                    </section>
                </div>
                <button onClick={editwarehouse} className='warehouse__button warehouse__button--delete'></button>
            </div>
            <div className="warehouse__wrapper warehouse__wrapper--right">
                <div className='warehouse__wrapper--inner'>
                    <section className='warehouse__section-wrapper'> 
                        <h4 className='warehouse__sub-title'>CONTACT</h4>
                        <p className='warehouse__text'>{name}</p>
                    </section>
                    <section className='warehouse__section-wrapper'> 
                        <h4 className='warehouse__sub-title'>CONTACT INFORMATION</h4>
                        <p className='warehouse__text'>{number}</p>
                        <p className='warehouse__text'>{email}</p>
                    </section>
                </div>
                <button onClick={deletewarehouse} className='warehouse__button warehouse__button--edit'></button>
            </div>
        </div>
        </>
    ) 
}

export default Warehouse;
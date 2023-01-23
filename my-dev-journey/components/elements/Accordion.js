import React, { useState } from 'react';

const Accordion = () => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div className="accordion" id="accordionFaqs">
                <div className="accordion-item border-gray-800 wow animate__animated animate__fadeIn">
                    <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                        <button className={isActive.key == 1 ? "accordion-button " : "accordion-button collapsed"}>
                            <span className="heading-4 color-white">Understanding company billing and accounts</span>
                        </button>
                    </h2>
                    <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel pretium mi. Morbi varius, tellus in accumsan blandit, elit ligula eleifend velit, luctus mattis ante nulla condimentum nulla.</div>
                    </div>
                </div>


                <div className="accordion-item border-gray-800 wow animate__animated animate__fadeIn">
                    <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                        <button className={isActive.key == 2 ? "accordion-button " : "accordion-button collapsed"}>
                            <span className="heading-4 color-white">Updating your billing credit card</span>
                        </button>
                    </h2>
                    <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel pretium mi. Morbi varius, tellus in accumsan blandit, elit ligula eleifend velit, luctus mattis ante nulla condimentum nulla.</div>
                    </div>
                </div>


                <div className="accordion-item border-gray-800 wow animate__animated animate__fadeIn">
                    <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                        <button className={isActive.key == 3 ? "accordion-button " : "accordion-button collapsed"}>
                            <span className="heading-4 color-white">Application keyboard shortcuts and tips</span>
                        </button>
                    </h2>
                    <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel pretium mi. Morbi varius, tellus in accumsan blandit, elit ligula eleifend velit, luctus mattis ante nulla condimentum nulla.</div>
                    </div>
                </div>


                <div className="accordion-item border-gray-800 wow animate__animated animate__fadeIn">
                    <h2 className="accordion-header" onClick={() => handleToggle(4)}>
                        <button className={isActive.key == 4 ? "accordion-button" : "accordion-button collapsed"}>
                            <span className="heading-4 color-white">Cancelling a website subscription</span>
                        </button>
                    </h2>
                    <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel pretium mi. Morbi varius, tellus in accumsan blandit, elit ligula eleifend velit, luctus mattis ante nulla condimentum nulla.</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Accordion;
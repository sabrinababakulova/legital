import React, {useState} from "react"
import "./Tabs.sass"



const Tab = (props) => {
    const [visibleTab, setVisibleTab] = useState(props.data[0].id);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
    })

    return(
        <div className="tabs">
          <div className="tab-buttons">
            {props.data.map((item, index) => 
            <>
                <div key={index} onClick={() => setVisibleTab(item.id)} className={visibleTab === item.id ? "tab-block tab-title--active" : "tab-block"}>
                    <div className="tab-numbers">
                        <p className="numbers">{item.tabNumbers}</p>
                    </div>
                    <div className="tab-heading">
                        <h3 className="heading">{item.tabTitle}</h3>
                    </div>
                    <div className="tab-icon">
                        <span className="icon"></span>
                    </div>
                </div>
                {windowWidth < 576 && 
                    <div className="tab-content">
                        { props.data.map((item, index) => 
                        <div key={index} style={visibleTab === item.id ? {} : {display: 'none'}}>
                            <div className="content-box">
                                <div className="box-icon">
                                    <i className="icon-contract"></i>
                                </div>
                                <div className="box-item">
                                    <div className="box-title">
                                        <h3 className="title">{item.tabTitle}</h3>
                                    </div>
                                    <div className="box-text">
                                        <p className="text sub-heading-back">{item.boxText}</p>
                                    </div>
                                </div>
                                <div className="content-items">
                                    <div className="content-heading">
                                        <h3 className="heading sub-heading-back">{item.contentHeading}</h3>
                                    </div>
                                    <ul className="list">
                                        <li className="list-item sub-heading-back">Пример 1</li>
                                        <li className="list-item sub-heading-back">Пример 2</li>
                                        <li className="list-item sub-heading-back">Пример 3</li>
                                        <li className="list-item sub-heading-back">Пример 4</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                }
             </>
            )}
          </div>
          <div className="tab-content">
             { props.data.map((item, index) => 
                <div key={index} style={visibleTab === item.id ? {} : {display: 'none'}}>
                    <div className="content-box">
                        <div className="box-icon">
                            <i className="icon-contract"></i>
                        </div>
                        <div className="box-item">
                            <div className="box-title">
                                <h3 className="title">{item.tabTitle}</h3>
                            </div>
                            <div className="box-text">
                                <p className="text sub-heading-back">{item.boxText}</p>
                            </div>
                        </div>
                        <div className="content-items">
                            <div className="content-heading">
                                <h3 className="heading sub-heading-back">{item.contentHeading}</h3>
                            </div>
                            <ul className="list">
                                <li className="list-item sub-heading-back">Пример 1</li>
                                <li className="list-item sub-heading-back">Пример 2</li>
                                <li className="list-item sub-heading-back">Пример 3</li>
                                <li className="list-item sub-heading-back">Пример 4</li>
                            </ul>
                        </div>
                    </div>
                </div>
                )}
          </div>
        </div>
      )
  }
  export default Tab
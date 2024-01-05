import React, {useState} from 'react'
import langEn from "../../assets/images/engLanguage.svg"
import langRu from "../../assets/images/ruLanguage.svg"
import langUz from "../../assets/images/uzbLanguage.svg"
import './Languages.sass'

const languageOptions = [ 
    {
      id: "en",
      flagimg: langEn
    },
    {
      id: "ru",
      flagimg: langRu
    },
    {
        id: "uzb",
        flagimg: langUz
      },
  ];

const defaultLangFlag = <img src={languageOptions[0].flagimg} height="30" width="30" alt="nope" />;

const Languages = () => {
    const [cssDisplay, setCssDisplay] = useState('none');
    const [langFlag, setLangFlag] = useState(defaultLangFlag)

    const showDropdown = () => {
        if (cssDisplay === 'none'){
        setCssDisplay('block');
        } else {
        setCssDisplay('none');
        }
    };
  
    const selectListItem = (event) => {
        handleLanguageChange(event);
        setCssDisplay('none');
        setLangFlag(<img src={event.target.src} height="30" width="30" alt="nope" />)
    };
  
    const handleLanguageChange = (event) => userLanguageChange(event);
    const userLanguageChange = (event) => {
        console.log("Here grab event.target.id and propagate lang change to app");
    }

  return (
        <div className='languages'>
        <button className='lang-btn' onClick={showDropdown} >
            <div className="">{langFlag}</div>
            <i className='icon-downward-arrow'></i>
        </button>
        <ul className='list' style={{ display: cssDisplay }}>
            {languageOptions.map((lang) => (
            <li className='list-item' id={lang.id} key={lang.id} disabled>
                <img onClick={selectListItem} src={lang.flagimg} height="30" width="30" alt="flagpic" id={lang.id} />
            </li>
            ))}
        </ul>
     </div>
    );
};

export default Languages;
import './index.css'

const TabItem=(props)=>{
    const {tabDetails,clickTabItem}= props
    const {displayText,tabId} = tabDetails
    const onclickTab=()=>{
        clickTabItem(tabId)
    }
    return(
        <li className="tab-content">
            <button className="tab-text" onClick={onclickTab}>{displayText}</button>
        </li>
    )
}

export default TabItem
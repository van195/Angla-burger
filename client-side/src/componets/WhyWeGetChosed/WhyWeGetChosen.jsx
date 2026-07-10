import './WhyWeGetChosen.scss';
import { cardsContent } from '../containers/functionContainer';
const WhyWeGetChosen =()=>{
    return(
        <div className="WhyWeGetChosen">
             <div className="WhyWeGetChosenContainer">
                <h1>Why We're the First Choice</h1>
                <div className="theFourCardLayout">
                   { cardsContent &&  cardsContent.map((data, i)=>(
                    <div className="layers" key={i}>
                        <div className="cardImages">
                            <img src={data.images} alt="" />
                        </div>
                        <div className="theDescription">
                            <h2>{data.title}</h2>
                            <p>{data.paragraph}</p>
                        </div>
                    </div>
                   ))
                   }
                </div>
             </div>
        </div>
    )
}
export default WhyWeGetChosen;
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getQuote } from '../actions'

const Facts = (props)=>{
    const isFetching = props.catFacts.isFetching
    // eslint-disable-next-line
    useEffect(()=>props.getQuote(),[])
    return(
        <div className="facts">
            {isFetching ? "Fetching Data" : <></>}
            {props.catFacts.data ? props.catFacts.data.text : undefined}
            <button onClick={props.getQuote}>Fetch new fact</button>
        </div>
    )
}

const mapToProps = (state)=>{
    return{
        catFacts: state.catFacts
    }
}
export default connect(mapToProps,{getQuote})(Facts);
import React from 'react';
import { connect } from 'react-redux';
import { IState } from '../../redux/types/store';
import { IQuote } from '../../redux/types/quotes';

interface IQuoteProps {
    symbol: string;
    quotes: IQuote[];
}

const Quote: React.FC<IQuoteProps> = (props) => {

    const currentQuote: IQuote | null = props.quotes.find((quote: IQuote) => quote.symbol === props.symbol) || null;

    return <>{currentQuote && currentQuote.current}</>;
};

const mapStateToProps = ({ quotes }: IState) => {
    return { quotes };
};

export default connect(mapStateToProps)(Quote);
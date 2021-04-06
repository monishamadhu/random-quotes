import React, { Component } from 'react';
import { Button, Card, CardHeader, CardBody } from 'reactstrap';
import { Quotes } from './quotes';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import { FadeTransform } from 'react-animation-components';

class RandomQuotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: Quotes,
            randomQuote: { text: "All is Well", author: "Hirani RajKumar" }

        }

    }

    handleClick = () => {
        const randomId = Math.floor(Math.random() * (this.state.quote.length));
        //alert(randomId);
        //alert(this.state.quote[randomId].text);
        this.setState({
            randomQuote: this.state.quote[randomId]
        });

    }

    render() {
        return (
            <div className="container">

                <div className="col-md-6 quoteArea">
                    <FadeTransform
                        in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(50%)'
                        }}>
                        <Card className="bg-light mt-3 area">
                            <CardHeader className="card-header bg-light"><h2>Random Quotes!!</h2></CardHeader>

                            <CardBody className="card-body">

                                <blockquote className="blockquote">
                                    <p className="mb-0">{this.state.randomQuote.text}</p>
                                    <footer className="blockquote-footer">{this.state.randomQuote.author}</footer>
                                </blockquote>

                                <Button className="button" color='success' onClick={this.handleClick}> New Quote </Button>
                                <div>
                                    <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                                </div>
                            </CardBody>
                        </Card>
                    </FadeTransform>
                </div>
            </div>

        );
    }
}
export default RandomQuotes;

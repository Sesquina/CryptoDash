import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import CryptoList from '../components/CryptoList';
import NewsList from '../components/NewsList';
import ModalWrap from '../components/ModalWrap';
// import NavBar from '../components/NavBar';
import '../styles/app.css';



class App extends React.Component {
  componentWillMount() {
    this.props.actions.requestTopList();
    this.props.actions.requestLatestNews();
  }

  triggerModal = (id, name) => {
    this.props.actions.openModal(id, name);
    this.props.actions.requestCurrencyPrice(id);
    this.props.actions.requestCurrencyHistory(id);
  }

  render() {
    const { cryptos, actions, news, modal, selected } = this.props;

    return (
      <div>

        {/* <NavBar /> */}

        <CryptoList 
          cryptos={cryptos}
          openModal={(id, name) => this.triggerModal(id, name)}
        />
        <NewsList news={news} />
        <ModalWrap modal={modal} 
                  selected={selected}
                  closeModal={() => actions.closeModal()}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cryptos: state.cryptos.topList,
    news: state.news.news,
    modal: state.modal,
    selected: state.selectedCrypto
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
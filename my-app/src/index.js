import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Image, Menu, Icon, GridColumn } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
      <Container className="background">
        <Menu className="ui borderless topmenu menu">
          <Menu.Item position="left" style={{color: "white"}}><Icon name="discord icon"/>Discord</Menu.Item>
          <Menu.Item style={{color: "white"}}>Download</Menu.Item>
          <Menu.Item style={{color: "white"}}>Nitro</Menu.Item>
          <Menu.Item style={{color: "white"}}>Safety</Menu.Item>
          <Menu.Item style={{color: "white"}}>Support</Menu.Item>
          <Menu.Item style={{color: "white"}}>Blog</Menu.Item>
          <Menu.Item style={{color: "white"}}>Careers</Menu.Item>
          <Menu.Item className="right bubble item">
            <div className="ui button login">Login</div>
          </Menu.Item>
        </Menu>
        <div className="ui centered container">
          <Header as="h1" style={{color: "white", fontSize: "70px", fontWeight: "700"}}>IMAGINE A PLACE...</Header>
          <Header as="h2" style={{color: "white", fontSize: "20px", fontWeight: 400, lineHeight: 1.5, paddingBottom: "10px"}}>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</Header>
          <div className="ui two column grid container">
            <div className="column">
              <div className="ui button white" style={{color: "#23272a"}}><Icon name="download icon"/>Download for Windows</div>
            </div>
            <div className="column">
              <div className="ui black button">Open Discord in your Browser</div>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}

class Middle extends React.Component {
  render() {
    return (
      <Container className="ui two column grid bottom container">
        <GridColumn className="column">
          <Image style={{paddingTop: "125px", paddingRight: "50px", height: "105%", width: "125%"}} src="https://dasdeutsch.com/wp-content/uploads/2022/01/miniverse324434-1024x676.jpeg"/>
        </GridColumn>
        <GridColumn className="text column">
          <Header as="h3" style={{paddingTop: "125px", paddingLeft: "200px", fontSize: "48px", fontWeight: 1000}}>Create an invite-only place where you belong</Header>
          <Header as="p" style={{paddingTop: "10px", paddingLeft: "200px", fontSize: "15px"}}>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</Header>
        </GridColumn>
      </Container>
    )
  }
}

class YourChoice extends React.Component {

  render() {
    return (
      <div>
        <TopMenu/>
        <Middle/>
      </div>
    );
  }
}

ReactDOM.render(<YourChoice/>, document.getElementById('root'));
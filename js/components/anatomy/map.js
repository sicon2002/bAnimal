import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  H3,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  Badge
} from "native-base";

import styles from "./styles";

class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false
    };
  }

  toggleTab1() {
    this.props.navigation.navigate("MyIndex");
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false
    });
  }

  toggleTab2() {
    this.props.navigation.navigate("MyMap");
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false
    });
  }

  toggleTab3() {
    this.props.navigation.navigate("MyTask");
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false
    });
  }

  toggleTab4() {
    this.props.navigation.navigate("MyTeam");
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true
    });
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>水质地图</Title>
          </Body>
          <Right />

        </Header>

        <Content padder>
          <Text>
            map...
          </Text>

        </Content>

        <Footer>
          <FooterTab>
            <Button
              active={this.state.tab1}
              onPress={() => this.toggleTab1()}
              vertical
              badge
            >
              <Badge><Text>2</Text></Badge>
              <Icon active={this.state.tab1} name="apps" />
              <Text>首页</Text>
            </Button>
            <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
              <Icon active={this.state.tab2} name="camera" />
              <Text>地图</Text>
            </Button>
            <Button
              active={this.state.tab3}
              onPress={() => this.toggleTab3()}
              vertical
              badge
            >
              <Badge style={{ backgroundColor: "green" }}>
                <Text>51</Text>
              </Badge>
              <Icon active={this.state.tab3} name="compass" />
              <Text>任务</Text>
            </Button>
            <Button active={this.state.tab4} onPress={() => this.toggleTab4()}>
              <Icon active={this.state.tab4} name="contact" />
              <Text>团队</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default MyMap;

import React from "react";
import {Container, Text, Content, Form, Item, Label, Input, Button} from "native-base";
import {Image} from 'react-native';

export default class Home extends React.Component {
    render() {
        return (
            <Container>
                <Content style={{alignContent:'center'}}>
                    <Image source={require('../../images/shittycat2.png')} style={{width: 'auto',height: '100%'}} />
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                        <Button block light title='SignIn'><Text>Sign In</Text></Button>
                    </Form>
                    <Text style={{textAlign: 'center'}}>Don't have an account?
                        <Button transparent title="Sign Up" onPress={() => this.props.navigation.navigate('SignUp')}>
                            <Text>Sign Up here!</Text>
                        </Button>
                    </Text>
                </Content>
            </Container>
        );
    }
}

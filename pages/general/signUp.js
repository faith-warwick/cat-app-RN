import React from 'react';
import {Container, Text, Content, Form, Item, Label, Input, Button} from "native-base";


export default class SignUp extends React.Component {
    render() {
        return (
            <Container>
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel last>
                        <Label>Password</Label>
                        <Input />
                    </Item>
                    <Button block light title='SignUp'><Text>Sign Up</Text></Button>
                </Form>
            </Container>
        );
    }
}
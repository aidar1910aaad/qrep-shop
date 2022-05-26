import React from "react";
import styled from "styled-components";
import {Facebook, Instagram, MailOutline, Phone, Room, Twitter} from "@material-ui/icons";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Logo = styled.h1`
    font-weight: 600;
`;

const SocialContainer = styled.div`
  display: flex; 
  
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props=>props.color};
  align-items: center;
  display:flex;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
  font-weight: 400;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;


const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  
`;

const Footer = () => {
    return <Container>
        <Left>
            <Logo>QREP.</Logo>
            <Desc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque mollitia, nemo odit officiis tempora voluptates.
            </Desc>
            <SocialContainer>
                <SocialIcon color="1d2b4b">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="931e36">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="376e9c">
                    <Twitter/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>
                Links
            </Title>
            <List>
                <ListItem>
                    Home
                </ListItem>
                <ListItem>
                    Cart
                </ListItem>
                <ListItem>
                    Man
                </ListItem>
                <ListItem>
                    Woman
                </ListItem>
                <ListItem>
                    My account
                </ListItem>
                <ListItem>
                    Order Tracking
                </ListItem>
                <ListItem>
                    Wishlist
                </ListItem>
                <ListItem>
                    Terms
                </ListItem>
            </List>
        </Center>
        <Right>
            <Title>
                 Contact
            </Title>
            <ContactItem><Room style={{marginRight: "10px"}}/>
                 123121313123123
            </ContactItem>
            <ContactItem><Phone style={{marginRight: "10px"}}/>
                +777777777777
            </ContactItem>
            <ContactItem><MailOutline style={{marginRight: "10px"}}/>
                 11111@gmail.com
            </ContactItem>
        </Right>

    </Container>
}

export default Footer
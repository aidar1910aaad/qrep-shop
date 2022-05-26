import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import {Add, Remove} from "@material-ui/icons";
import {useSelector} from "react-redux";

const Container = styled.div`
  
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props=>props.type === "filled" && "none"};
  background-color: ${props=>
          props.type === "filled" ? "black" : "transparent"};
  color: ${props=>props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;



const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  
`;

const Info = styled.div`
  flex: 3;
`;


const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
  
`;

const ProductId = styled.span`
  
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  
`;

const ProductSize = styled.span`
  
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
`;


const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  
`;

const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" && "500"};
  font-size: ${props => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`
  
`;

const SummaryItemPrice = styled.span`
  
`;

const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  
`;

const Cart = () => {
    const cart = useSelector(state => state.cart)
    return(
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <Title>
                    Bag
                </Title>
                <Top>
                    <TopButton>Continue shopping</TopButton>
                    <TopTexts>
                        <TopText>
                            Shopping Bag(2)
                        </TopText>
                        <TopText>
                            Wishlist
                        </TopText>
                    </TopTexts>
                    <TopButton type="filled">Checkout now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map(product=>
                        <Product>
                            <ProductDetail>
                                <Image src = {product.img}/>
                                <Details>
                                    <ProductName>
                                        <b>Product: </b> {product.title}
                                    </ProductName>
                                    <ProductId>
                                        <b>ID: </b> {product._id}
                                    </ProductId>
                                    <ProductColor color = {product.size}/>
                                    <ProductSize>
                                        <b>Size: </b> {product.size}
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ {product.quantity * product.price}</ProductPrice>
                            </PriceDetail>
                        </Product>
                        )}
                    </Info>
                    <Summary>
                        <SummaryTitle>
                            Order
                        </SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>
                                Subtotal
                            </SummaryItemText>
                            <SummaryItemPrice>
                                $55
                            </SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>
                                Total
                            </SummaryItemText>
                            <SummaryItemPrice>
                                {cart.total}
                            </SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton>Checkout now</SummaryButton>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
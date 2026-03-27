"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: Helvetica, sans-serif;
`;

const TitleBox = styled.div`
    padding: 10px 28px;
    margin-bottom: 10px;
`;

const Title = styled.h1`
    font-size: 32px;
    color: #344E41;
    font-weight: 500;
    letter-spacing: 6px;
    margin: 0;
`;

const Subtitle = styled.p`
    font-size: 13px;
    color: #344E41;
    letter-spacing: 1px;
    text-align: center;
    margin-bottom: 40px;
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 340px;
`;

const Label = styled.label`
    font-size: 11px;
    color: #3A5A40;
    align-self: flex-start;
    margin-bottom: 6px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
`;

const Input = styled.input`
    width: 100%;
    box-sizing: border-box;
    padding: 11px 14px;
    font-size: 15px;
    border: 1.5px solid #A3B18A;
    border-radius: 20px;
    background: #F3F7F3;
    color: #344E41;
    margin-bottom: 16px;
    outline: none;
    &:focus {
        border-color: #344E41;
    }
`;

const Select = styled.select`
    width: 100%;
    box-sizing: border-box;
    padding: 11px 14px;
    font-size: 15px;
    border: 1.5px solid #A3B18A;
    border-radius: 20px;
    background: #F3F7F3;
    color: #344E41;
    margin-bottom: 28px;
    outline: none;
`;

const Button = styled.button`
    width: 100%;
    padding: 13px;
    font-size: 14px;
    background: #344E41;
    color: #F3F7F3;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    letter-spacing: 2px;
    text-transform: uppercase;
    &:hover {
        background: #3A5A40;
    }
`;

export default function Home() {
    const [query, setQuery] = useState("");
    const [type, setType] = useState("music");
    const router = useRouter();

    const handleSubmit = () => {
        if (!query) return;
        router.push(`/${query}?type=${type}`);
    };

    return (
        <PageWrapper>
            <TitleBox>
                <Title>Find Something Similar</Title>
            </TitleBox>
            <Subtitle>Discover new music, movies, books & more</Subtitle>
            <Form>
                <Label htmlFor="query">Search</Label>
                <Input
                    id="query"
                    type="text"
                    value={query}
                    placeholder="The Beatles"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Label htmlFor="type">Type</Label>
                <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="music">Music</option>
                    <option value="movie">Movie</option>
                    <option value="show">Show</option>
                    <option value="song">Song</option>
                    <option value="book">Book</option>
                    <option value="game">Game</option>
                    <option value="person">Person</option>
                    <option value="place">Place</option>
                    <option value="brand">Brand</option>
                </Select>
                <Button onClick={handleSubmit}>Get Results</Button>
            </Form>
        </PageWrapper>
    );
}
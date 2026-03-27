import { SimilarResult } from "@/app/interfaces/TasteProps";
import styled from "styled-components";

const Card = styled.div`
    border: 1px solid #A3B18A;
    border-radius: 8px;
    padding: 24px 16px;
    margin: 8px;
    text-align: center;
    font-family: Helvetica, sans-serif;
    background: #F3F7F3;
`;

const Name = styled.h2`
    font-size: 16px;
    font-weight: 400;
`;

export default function TasteCard(props: SimilarResult) {
    return (
        <Card>
            <Name>{props.name}</Name>
        </Card>
    );
}